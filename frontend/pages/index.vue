<template>
	<div>
		<b-carousel
			id="carousel-1"
			v-model="slide"
			:interval="4000"
			controls
			background="#ababab"
			img-width="1080"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<b-carousel-slide img-src="https://via.placeholder.com/1920x1080"> </b-carousel-slide>
			<b-carousel-slide img-src="https://via.placeholder.com/1920x1080"> </b-carousel-slide>
			<b-carousel-slide img-src="https://via.placeholder.com/1920x1080"> </b-carousel-slide>
		</b-carousel>
		<section>
			<sample-text text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, consequatur?" />
		</section>

		<section>
			<category />
			<!-- <news /> -->
		</section>
		<section>
			<banner :items="items" title="Lorem ipsum dolor sit amet."></banner>
		</section>
		<section>
			<reassure height="25vh" items="reassure" />
		</section>
	</div>
</template>

<script>
import Banner from '~/components/banner/banner.vue'
import Reassure from '~/components/reassure/reassure.vue'
import News from '~/components/news/news.vue'
import SampleText from '~/components/sample-text/sample-text.vue'
import Category from '~/components/category/category.vue'

export default {
	layout: 'master',
	data() {
		return {
			slide: 0,
			sliding: null,
			items: [
				{
					title: 'Lorem ipsum dolor sit amet.',
					card: [
						{
							image_src: 'https://via.placeholder.com/1920x1080',
							imgage_alt: 'item',
							card_title: 'Card title 1',
							describe: "Some quick example text to build on the card title and make up the bulk of the card's content."
						},
						{
							image_src: 'https://via.placeholder.com/1920x1080',
							imgage_alt: 'item',
							card_title: 'Card title 1',
							describe: "Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					]
				},
				{
					title: 'Lorem ipsum dolor sit amet.',
					card: [
						{
							image_src: 'https://via.placeholder.com/1920x1080',
							imgage_alt: 'item',
							card_title: 'Card title 1',
							describe: "Some quick example text to build on the card title and make up the bulk of the card's content."
						},
						{
							image_src: 'https://via.placeholder.com/1920x1080',
							imgage_alt: 'item',
							card_title: 'Card title 1',
							describe: "Some quick example text to build on the card title and make up the bulk of the card's content."
						}
					]
				}
			]
		}
	},
	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},
		onSlideEnd(slide) {
			this.sliding = false
		}
	},
	components: {
		baner: Banner,
		reassure: Reassure,
		news: News,
		'sample-text': SampleText,
		category: Category
	}
}
</script>

<style lang="scss">
.carousel {
	height: calc(75vh - 66px);
}
.carousel-inner {
	height: inherit;
}
.carousel-item {
	position: relative;
	height: inherit;
}
.carousel-item img {
	height: inherit;
	object-fit: cover;
}
</style>
