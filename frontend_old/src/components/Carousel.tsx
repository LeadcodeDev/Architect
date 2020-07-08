import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

export interface CarouselComponentProps {
	pictures: any
}

const CarouselComponent: React.SFC<CarouselComponentProps> = ({ pictures }) => {
	const [activeIndex, setActiveIndex] = useState(0)
	const [animating, setAnimating] = useState(false)

	const next = () => {
		if (animating) return
		const nextIndex = activeIndex === pictures.length - 1 ? 0 : activeIndex + 1
		setActiveIndex(nextIndex)
	}

	const previous = () => {
		if (animating) return
		const nextIndex = activeIndex === 0 ? pictures.length - 1 : activeIndex - 1
		setActiveIndex(nextIndex)
	}

	const goToIndex = (newIndex) => {
		if (animating) return
		setActiveIndex(newIndex)
	}
	const slides = pictures.map((item, key) => {
		return (
			<CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={key}>
				<img src={item.src} alt={item.altText} />
			</CarouselItem>
		)
	})
	return (
		<Carousel activeIndex={activeIndex} next={next} previous={previous}>
			{slides}
			<CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
			<CarouselControl direction='next' directionText='Next' onClickHandler={next} />
		</Carousel>
	)
}

export default CarouselComponent
