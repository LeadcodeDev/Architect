<template>
	<div>
		<navbar />
		<Nuxt />
	</div>
</template>
<script>
import Navbar from '~/components/navbar/navbar.vue'

export default {
	name: 'master',
	components: {
		navbar: Navbar
	}
}
</script>
