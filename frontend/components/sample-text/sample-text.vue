<template>
	<div class="sample-text">
		<h2>{{ text }}</h2>
	</div>
</template>

<script>
export default {
	name: 'Sample-text',
	props: {
		text: ''
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
