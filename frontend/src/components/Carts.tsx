import React, { Fragment } from 'react'
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap'

export interface CartComponentProps {
	product: any
}

const CartComponent: React.SFC<CartComponentProps> = ({ product }) => {
	return (
		<Card>
			<CardImg top width='100%' src={product.image} alt='Card image cap' />
			<CardBody>
				<CardTitle>{product.title}</CardTitle>
				<CardSubtitle>
					{Array.apply(1, Array(5)).map(() => (
						<Rate />
					))}
				</CardSubtitle>
				<CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
				<Button>Button</Button>
			</CardBody>
		</Card>
	)
}

export default CartComponent

export const Rate = () => {
	return <i className='ti-star'></i>
}
