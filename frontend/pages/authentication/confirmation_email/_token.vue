<template>
	<div>
		<div style="height: 25vh; background-color: rgb(0, 118, 214);"></div>
		<div class="login-page">
			<div class="container"></div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'master',
	middleware: 'unauthenticated',
	data() {
		return {
			form: {
				email: '',
				password: '',
				remember_me: false
			}
		}
	},
	mounted: async function () {
		try {
			await this.$axios.post('authentication/confirmation_token', { token: this.$route.params.token })
			this.$toast.success('Votre email a été validé !')
			this.$router.replace('/authentication/login')
		} catch (error) {
			this.$toast.error('Une erreur est survenue, veuillez réessayer plus tard')
			this.$router.replace('/')
		}
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
