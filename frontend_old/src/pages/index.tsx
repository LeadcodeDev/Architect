import React, { useContext } from 'react'
import Layout from '../components/Layout'
import CarouselComponent from '../components/Carousel'
import CartComponent from '../components/Carts'
import Axios from 'axios'
import { ARCHITECT_CORE } from '../../config'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	async function handleLogout(event) {
		event.preventDefault()
		await Axios.get(`${ARCHITECT_CORE}/api/authentication/logout`, { withCredentials: true })
	}
	return (
		<Layout>
			<CarouselComponent pictures={items} />
			<section className='jumbotron-fluid main-area text-center'>
				<h2 className=' display-4 py-5'>Shop by Category</h2>
				<div className='row'>
					<div className='col-sm-12 col-md-12 col-lg-4'>
						<div className='main-image'>
							<img src='https://colorlib.com/preview/theme/estore/assets/img/categori/cat1.jpg' alt='' />
							<div className='content'>
								<h4>Title</h4>
								<button className='btn btn-primary action'>Best new collection</button>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-12 col-lg-4'>
						<div className='main-image'>
							<img src='https://colorlib.com/preview/theme/estore/assets/img/categori/cat2.jpg' alt='' />
							<div className='content'>
								<h4>Title</h4>
								<button className='btn btn-primary action'>Best new collection</button>
							</div>
						</div>
					</div>
					<div className='col-sm-12 col-md-12 col-lg-4'>
						<div className='main-image'>
							<img src='https://colorlib.com/preview/theme/estore/assets/img/categori/cat3.jpg' alt='' />
							<div className='content'>
								<h4>Title</h4>
								<button className='btn btn-primary action'>Best new collection</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='jumbotron products-area' style={{ background: 'white' }}>
				<h2 className=' display-4 py-5'>Shop by Category</h2>
				<div className='row'>
					{products.map((product, key) => (
						<div className='col-sm-12 col-md-12 col-lg-4' key={key}>
							<CartComponent product={product} />
						</div>
					))}
				</div>
			</section>
			<button className='btn btn-primary' onClick={() => handleLogout(event)}>
				logout
			</button>
		</Layout>
	)
}

export default Home

const items = [
	{
		src:
			'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
		altText: 'Slide 1'
	},
	{
		src:
			'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
		altText: 'Slide 2'
	},
	{
		src:
			'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
		altText: 'Slide 3'
	}
]

const products = [
	{
		image: 'https://via.placeholder.com/1000x1000',
		title: 'Titre',
		altText: 'Slide 1'
	},
	{
		image: 'https://via.placeholder.com/1000x1000',
		title: 'Titre',
		altText: 'Slide 2'
	},
	{
		image: 'https://via.placeholder.com/1000x1000',
		title: 'Titre',
		altText: 'Slide 3'
	},
	{
		image: 'https://via.placeholder.com/1000x1000',
		title: 'Titre',
		altText: 'Slide 1'
	},
	{
		image: 'https://via.placeholder.com/1000x1000',
		title: 'Titre',
		altText: 'Slide 2'
	},
	{
		image: 'https://via.placeholder.com/1000x1000',
		title: 'Titre',
		altText: 'Slide 3'
	}
]
