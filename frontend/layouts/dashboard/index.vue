<template>
	<div class="dashboard">
		<div class="sidebar">
			<div class="header">
				<div class="logo">
					<h1>Dashboard</h1>
				</div>
			</div>
			<b-nav vertical>
				<b-nav-item active>
					<div class="icon">
						<b-icon icon="grid1x2" font-scale="2"></b-icon>
					</div>
					<div class="link">
						Dashboard
					</div>
				</b-nav-item>
				<b-nav-item>
					<b-icon icon="camera" font-scale="2"></b-icon>
					Link
				</b-nav-item>
				<b-nav-item>Another Link</b-nav-item>
			</b-nav>
		</div>
		<div class="components">
			<div class="navbar"></div>
			<Nuxt />
		</div>
		<cookie />
	</div>
</template>
<script>
import Cookie from '~/components/cookie/cookie.vue'

export default {
	name: 'dashboard',
	components: {
		cookie: Cookie
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
