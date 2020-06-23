import React from 'react'
import Layout from '../components/Layout'

export interface HomeProps {}

const Home: React.SFC<HomeProps> = () => {
	return (
		<Layout>
			<h1>Hello World</h1>
		</Layout>
	)
}

export default Home
