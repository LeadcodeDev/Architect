import React, { Fragment, useState } from 'react'
import { ARCHITECT_CORE } from './../../config'
import Axios from 'axios'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap'
import Cookies from './Cookies'

export interface LayoutProps {
	children: any
}

const Layout: React.SFC<LayoutProps> = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<Fragment>
			<div>
				<Navbar color='light' light expand='md'>
					<NavbarBrand href='/'>reactstrap</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='mr-auto' navbar>
							<NavItem>
								<NavLink href='/components/'>Components</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='https://github.com/reactstrap/reactstrap'>GitHub</NavLink>
							</NavItem>
							<UncontrolledDropdown nav inNavbar>
								<DropdownToggle nav caret>
									Options
								</DropdownToggle>
								<DropdownMenu right>
									<DropdownItem>Option 1</DropdownItem>
									<DropdownItem>Option 2</DropdownItem>
									<DropdownItem divider />
									<DropdownItem>Reset</DropdownItem>
								</DropdownMenu>
							</UncontrolledDropdown>
						</Nav>
						<NavbarText>Simple Text</NavbarText>
					</Collapse>
				</Navbar>
			</div>
			{children}
			<Cookies />
		</Fragment>
	)
}

export default Layout
