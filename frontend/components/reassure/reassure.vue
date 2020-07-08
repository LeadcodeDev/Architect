<template>
	<div class="reassure" :style="height">
		<div class="reassure-container">
			<div class="reassure-item">
				<b-icon icon="alarm-fill" font-scale="5"></b-icon>
				<h5>Title</h5>
			</div>
			<div class="reassure-item">
				<b-icon icon="alarm-fill" font-scale="5"></b-icon>
				<h5>Title</h5>
			</div>
			<div class="reassure-item">
				<b-icon icon="alarm-fill" font-scale="5"></b-icon>
				<h5>Title</h5>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Reassure',
	props: {
		height: String
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
