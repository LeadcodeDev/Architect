import React from 'react'
import { useRouter } from 'next/router'

export interface LinkRouterProps {
	children: any
	href: string
	className: string
}

const LinkRouter: React.SFC<LinkRouterProps> = ({ children, href, className }) => {
	const router = useRouter()

	async function handleClick(e) {
		e.preventDefault()
		router.push(href)
	}

	return (
		<a href={href} className={className} onClick={() => handleClick(event)}>
			{children}
		</a>
	)
}

export default LinkRouter
