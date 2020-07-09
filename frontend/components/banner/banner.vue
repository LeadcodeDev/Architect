<template>
	<div class="banner">
		<div class="banner-item" v-for="item in items">
			<div class="details-side">
				<sample-text :text="item.title" />
				<div class="details-lasted">
					<div class="card" v-for="card in item.card">
						<h5 class="card-title">{{ card.card_title }}</h5>
						<img class="card-img-top" :src="card.image_src" alt="Card image cap" />
						<div class="card-body">
							<p class="card-text">{{ card.describe }}</p>
							<a href="#" class="btn btn-primary">Go somewhere</a>
						</div>
					</div>
				</div>
			</div>
			<div class="pictures-side">
				<div class="behind">
					<img src="https://homewareshop.co.uk/wp-content/uploads/le-bon-coin-chaise-de-jardin-etonnant-60-frais-special-graphie-de-le-bon-coin-chaises-des-le-bon-coin-chaise-de-jardin.jpg" alt="" />
					<h3>Lorem ipsum.</h3>
				</div>
				<div class="infront">
					<img src="https://homewareshop.co.uk/wp-content/uploads/le-bon-coin-chaise-de-jardin-etonnant-60-frais-special-graphie-de-le-bon-coin-chaises-des-le-bon-coin-chaise-de-jardin.jpg" alt="" />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SampleText from '~/components/sample-text/sample-text.vue'

export default {
	name: 'Banner',
	props: {
		items: Array,
		title: String
	},
	components: {
		'sample-text': SampleText
	}
}
</script>

<style scoped lang="scss" src="./style.scss"></style>
