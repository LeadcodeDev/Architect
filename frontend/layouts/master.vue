<template>
	<div>
		<navbar />
		<Nuxt />
		<cookie />
	</div>
</template>
<script>
import Navbar from '~/components/navbar/navbar.vue'
import Cookie from '~/components/cookie/cookie.vue'

export default {
	name: 'master',
	components: {
		navbar: Navbar,
		cookie: Cookie
	}
}
</script>

<style>
body {
	overflow-x: hidden;
}
.errors-feedback {
	color: red;
	font-size: 14px;
}
</style>
