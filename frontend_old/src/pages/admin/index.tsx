import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from '../../components/Layout'
import { Nav, NavItem, NavLink } from 'reactstrap'

export interface IndexProps {}

const Index: React.SFC<IndexProps> = () => {
	return (
		<Layout>
			<Router>
				<Switch>
					<Route path='/' component={index} />
				</Switch>
			</Router>
			<div className='admin'>
				<div className='sidebar'>
					<p>List Based</p>
					<Nav vertical>
						<NavItem>
							<NavLink href='#'>Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#'>Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink href='#'>Another Link</NavLink>
						</NavItem>
						<NavItem>
							<NavLink disabled href='#'>
								Disabled Link
							</NavLink>
						</NavItem>
					</Nav>
				</div>
				<div className='container'></div>
			</div>
		</Layout>
	)
}

export default Index
