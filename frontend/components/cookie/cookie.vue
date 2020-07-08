<template>
	<div class="cookie" ref="cookie" v-if="consent === false">
		<div class="container">
			<p>
				En navigant sur notre site web, vous acceptez l'utilisation de nos cookies. Nos cookies permettent le bon fonctionnement de nos services. Ils ne sont aucunement utilisé pour vous "tracker"
			</p>
			<div class="action">
				<button class="btn btn-primary" @click.prevent="handleAccept">J'accepte</button>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
	name: 'Cookie',
	data: function () {
		return { ip: '', consent: true }
	},
	mounted: async function () {
		const { data } = await axios.get('https://ipapi.co/json/')
		this.ip = data.ip
		this.isConsent(data.ip)
	},
	methods: {
		handleAccept: async function () {
			try {
				await this.$axios.post('/cookie', { ip: this.ip })
				this.consent = true
			} catch (error) {}
		},
		isConsent: async function (ip) {
			try {
				const { data } = await this.$axios.get('/cookie/' + ip)
				if (data.cookie) {
					if (new Date(data.cookie.expiration) <= new Date()) {
						this.consent = false
					}
				} else {
					this.consent = false
				}
			} catch (err) {}
		}
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
