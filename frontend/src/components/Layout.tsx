import React, { Fragment } from 'react'
import { ARCHITECT_CORE } from './../../config'
import Axios from 'axios'

export interface LayoutProps {
	children: any
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
	async function handleChangeCookies(event) {
		event.preventDefault()
		const { data } = await Axios.get('https://ipapi.co/json/')
		await Axios.post(`${ARCHITECT_CORE}/api/cookie`, { ip: data.ip })
	}

	return (
		<Fragment>
			{children}
			<button onClick={() => handleChangeCookies(event)}>click</button>
		</Fragment>
	)
}

export default Layout
