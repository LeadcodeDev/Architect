<template>
	<div>
		<div style="height: 25vh; background-color: rgb(0, 118, 214);"></div>
		<div class="login-page">
			<div class="container">
				<div class="login-info">
					<div class="content">
						<h1>Nouveau compte</h1>
						<p class="lead">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perferendis. Iste doloremque sunt, odio perferendis dolor asperiores culpa quam ad.</p>
						<nuxt-link to="/authentication/login" class="btn btn-primary">Connexion</nuxt-link>
					</div>
				</div>
				<div class="login-form">
					<div class="container">
						<b-form @submit="handleSubmit">
							<b-row>
								<b-col sm="12" md="6">
									<b-form-group label="Nom" label-for="lastname">
										<b-form-input id="lastname" v-model="form.lastname" required placeholder="Entrez votre nom de famille"></b-form-input>
										<div class="errors-feedback">{{ errors.lastname }}</div>
									</b-form-group>
								</b-col>
								<b-col sm="12" md="6">
									<b-form-group label="Prénom" label-for="firstname">
										<b-form-input id="firstname" v-model="form.firstname" required placeholder="Entrez votre prénom"></b-form-input>
										<div class="errors-feedback">{{ errors.firstname }}</div>
									</b-form-group>
								</b-col>
							</b-row>

							<b-form-group label="Adresse email :" label-for="email">
								<b-form-input id="email" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
								<div class="errors-feedback">{{ errors.email }}</div>
							</b-form-group>

							<b-form-group label="Mot de passe :" label-for="password">
								<b-form-input id="password" type="password" v-model="form.password" required placeholder="Enter name"></b-form-input>
								<div class="errors-feedback">{{ errors.password }}</div>
							</b-form-group>

							<b-form-group label="Confirmez le mot de passe :" label-for="password_confirmation">
								<b-form-input id="password_confirmation" type="password" v-model="form.password_confirmation" required placeholder="Enter name"></b-form-input>
								<div class="errors-feedback">{{ errors.password_confirmation }}</div>
							</b-form-group>

							<hr />

							<b-row>
								<b-col sm="12" md="6">
									<b-form-group label="Adresse" label-for="address">
										<b-form-input id="address" v-model="form.address" required placeholder="Adresse postale"></b-form-input>
										<div class="errors-feedback">{{ errors.address }}</div>
									</b-form-group>
								</b-col>
								<b-col sm="12" md="6">
									<b-form-group label="Code postal" label-for="postalcode">
										<b-form-input id="postalcode" @change="searchPostal" v-model="form.postalcode" required placeholder="Code postal"></b-form-input>
										<div class="errors-feedback">{{ errors.postalcode }}</div>
									</b-form-group>
								</b-col>
							</b-row>

							<b-form-group label="Ville" label-for="city" v-if="city">
								<b-form-select v-model="form.city" :options="city" required></b-form-select>
								<div class="errors-feedback">{{ errors.city }}</div>
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
	layout: 'master/index',
	middleware: 'unauthenticated',
	data() {
		return {
			form: {
				firstname: '',
				lastname: '',
				email: '',
				password: '',
				password_confirmation: '',
				address: '',
				postalcode: '',
				city: ''
			},
			errors: {},
			city: '',
			searchcode: {
				nom: '',
				codesPostaux: []
			}
		}
	},
	methods: {
		searchPostal: async function () {
			try {
				const { data } = await this.$axios.get(`https://apicarto.ign.fr/api/codes-postaux/communes/${this.form.postalcode}`)
				this.city = []
				data.map((item) => {
					this.city.push(item.nomCommune)
				})
				this.searchcode = data
			} catch (error) {
				this.city = ''
			}
		},
		handleSubmit: async function () {
			try {
				const { status, data } = await this.$axios.post('/users', this.form)
				if (data.errors) {
					this.errors = {}
					data.errors.map((error) => {
						this.errors = { ...this.errors, [error.field]: error.message }
					})
				} else {
					this.$toast.success('Votre compte a été créé ! Un email vous a été envoyé')
					this.$router.replace('/authentication/login')
				}
			} catch (err) {
				console.log(err)
			}
		}
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
