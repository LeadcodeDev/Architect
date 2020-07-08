<template>
	<div class="reassure" :style="height">
		<div class="reassure-container">
			<div class="reassure-item">
				<b-icon icon="box-seam" font-scale="5"></b-icon>
				<h5>Retrait en magasin</h5>
			</div>
			<div class="reassure-item">
				<b-icon icon="lock" font-scale="5"></b-icon>
				<h5>Sécurisé</h5>
			</div>
			<div class="reassure-item">
				<b-icon icon="lightning-fill" font-scale="5"></b-icon>
				<h5>Rapide</h5>
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
