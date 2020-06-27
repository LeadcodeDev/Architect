import React, { useState } from 'react'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText, Button } from 'reactstrap'
import ButtonIcon from './ButtonIcon'
import Searchbar from './Searchbar'

export interface NavbarProps {}

const NavbarComponent: React.SFC<NavbarProps> = () => {
	const [isOpen, setIsOpen] = useState(false)
	const toggle = () => setIsOpen(!isOpen)

	return (
		<Navbar light expand='md'>
			<NavbarBrand href='/'>
				<img src='https://colorlib.com/preview/theme/estore/assets/img/logo/logo.png' />
			</NavbarBrand>
			<NavbarToggler onClick={toggle} />
			<Collapse isOpen={isOpen} navbar>
				<Nav navbar>
					<NavItem>
						<NavLink href='/components/'>Accueil</NavLink>
					</NavItem>
					<UncontrolledDropdown nav inNavbar>
						<DropdownToggle nav caret>
							Catégories
						</DropdownToggle>
						<DropdownMenu right>
							<DropdownItem>T-shirt</DropdownItem>
							<DropdownItem>Pantalon</DropdownItem>
							<DropdownItem divider />
							<DropdownItem>Reset</DropdownItem>
						</DropdownMenu>
					</UncontrolledDropdown>
					<NavItem>
						<NavLink href='/components/'>Nouveautées</NavLink>
					</NavItem>
					<NavItem className='ml-auto'>
						<Searchbar />
						<ButtonIcon icon={'heart'} />
						<ButtonIcon icon={'shopping-cart'} />
						<Button color='primary' size='md'>
							Sign In
						</Button>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	)
}

export default NavbarComponent
