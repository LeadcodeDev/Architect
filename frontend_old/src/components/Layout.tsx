import React, { Fragment } from 'react'
import Cookies from './Cookies'
import Navbar from './Navbar'

export interface LayoutProps {
	children: any
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
	return (
		<Fragment>
			<Navbar />
			{children}
			<Cookies />
		</Fragment>
	)
}

export default Layout
