import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { ARCHITECT_CORE } from '../../config'
import { Fade } from 'reactstrap'

export interface CookiesProps {}

const Cookies: React.SFC<CookiesProps> = () => {
	const [currentIp, setCurrentIp] = useState()
	const [isAcceptCookies, setIsAcceptCookies] = useState(true)

	async function getIp() {
		const { data } = await Axios.get('https://ipapi.co/json/')
		setCurrentIp(data.ip)
		getCookie(data.ip)
	}

	async function getCookie(ip: string) {
		const { data } = await Axios.get(`${ARCHITECT_CORE}/api/cookie/${ip}`)
		const { cookie } = data
		if (cookie) {
			if (new Date(cookie.expiration) <= new Date()) {
				setIsAcceptCookies(false)
			}
		} else {
			setIsAcceptCookies(false)
		}
	}

	async function handleChangeCookies(event) {
		event.preventDefault()
		await Axios.post(`${ARCHITECT_CORE}/api/cookie`, { ip: currentIp })
		setIsAcceptCookies(true)
	}

	useEffect(() => {
		getIp()
	}, [])

	if (!isAcceptCookies) {
		return (
			<Fade className='cookies-banner'>
				<div className='cookies-container'>Ce site Web utilise des cookies pour vous garantir la meilleure expérience dd'utilisation et de visite sur notre site web</div>
				<button className='btn btn-primary' onClick={() => handleChangeCookies(event)}>
					J'accepte
				</button>
			</Fade>
		)
	} else {
		return <div></div>
	}
}

export default Cookies
