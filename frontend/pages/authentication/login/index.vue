<template>
	<div>
		<div style="height: 25vh; background-color: rgb(0, 118, 214);"></div>
		<div class="login-page">
			<div class="container">
				<div class="login-info">
					<div class="content">
						<h1>Connexion</h1>
						<p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis. Iste doloremque sunt, odio perferendis dolor asperiores culpa quam ad.</p>
						<nuxt-link to="/authentication/register" class="btn btn-primary">Créer un compte</nuxt-link>
					</div>
				</div>
				<div class="login-form">
					<div class="container">
						<b-form @submit.prevent="handleSubmit">
							<b-form-group label="Adresse email :" label-for="email">
								<b-form-input id="email" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
							</b-form-group>

							<b-form-group label="Mot de passe :" label-for="password">
								<b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter name"></b-form-input>
							</b-form-group>

							<b-form-group id="input-group-4">
								<b-form-checkbox switch size="lg" v-model="form.checked">Se souvenir de moi</b-form-checkbox>
							</b-form-group>

							<b-button type="submit" variant="primary" @click.prevent="handleSubmit">Submit</b-button>
						</b-form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	layout: 'master',
	data() {
		return {
			form: {
				email: '',
				password: '',
				remember_me: false
			}
		}
	},
	mounted() {
		console.log(this.$store.auth)
	},
	methods: {
		handleSubmit: async function () {
			try {
				const { data } = await this.$axios.post('/authentication/login', this.form)
				console.log(data)
				if (data.is_confirmed) {
					this.$store.commit('auth/login', { user: data.id, logged: true })
					this.$toast.success(`Bienvenue ${data.firstname}`)
					this.$router.replace('/')
				} else {
					this.$toast.info('Veuillez confirmer votre adresse email')
					this.$store.commit('auth/logout')
				}
			} catch (error) {
				console.log(error)
				this.$toast.error(``)
			}
		}
	},
	components: {}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
