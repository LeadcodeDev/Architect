<template>
	<b-navbar toggleable="lg" sticky>
		<b-navbar-brand href="#">Navbar</b-navbar-brand>

		<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

		<b-collapse id="nav-collapse" is-nav>
			<b-navbar-nav>
				<b-nav-item href="#">Link</b-nav-item>
				<b-nav-item href="#" disabled>Disabled</b-nav-item>
			</b-navbar-nav>

			<!-- Right aligned nav items -->
			<b-navbar-nav class="ml-auto">
				<b-nav-item-dropdown right v-if="auth" class="with-avatar">
					<template v-slot:button-content> <b-avatar></b-avatar> {{ identity }} </template>
					<nuxt-link to="/" class="dropdown-item">Mon compte</nuxt-link>
					<nuxt-link to="/authentication/login" class="dropdown-item" v-if="admin">Dashboard</nuxt-link>
					<b-dropdown-item @click.prevent="handleLogout" href="#">Déconnexion</b-dropdown-item>
				</b-nav-item-dropdown>
				<nuxt-link v-else to="/authentication/login" class="btn btn-primary">Connexion</nuxt-link>
			</b-navbar-nav>
		</b-collapse>
	</b-navbar>
</template>
<script>
export default {
	name: 'Navbar',
	computed: {
		auth() {
			return this.$store.state.auth.member.logged
		},
		identity() {
			return this.$store.state.auth.member.user.identity
		},
		admin() {
			return this.$store.state.auth.member.user.permission == 'ROLE_ADMIN'
		}
	},
	methods: {
		handleLogout: async function () {
			try {
				await this.$axios.get('/authentication/logout')
				this.$store.commit('auth/logout')
			} catch (error) {}
		}
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
