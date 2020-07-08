import React, { useState, useContext } from 'react'
import Layout from '../components/Layout'
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import Axios from 'axios'
import { ARCHITECT_CORE } from '../../config'
import { useRouter } from 'next/router'

export interface LoginProps {}

const Login: React.SFC<LoginProps> = () => {
	const [credentials, setCredentials] = useState({})
	const router = useRouter()

	async function handleSubmit(event) {
		event.preventDefault()
		try {
			const { status, data } = await Axios.post(`${ARCHITECT_CORE}/api/authentication/login`, credentials, { withCredentials: true })
			if (status == 200) {
				if (data.error === 403) {
					console.log('problem')
				} else {
					router.replace('/')
				}
			}
		} catch (error) {
			console.log(error)
		}
	}

	async function handleCredentials({ target }) {
		const { name, value } = target
		setCredentials({ ...credentials, [name]: value })
	}

	async function handleRememberMe({ srcElement }) {
		const { name, checked } = srcElement
		setCredentials({ ...credentials, [name]: checked })
	}

	return (
		<Layout>
			<div className='separator'></div>
			<div className='container form-loginout py-5'>
				<Form onSubmit={() => handleSubmit(event)}>
					<FormGroup>
						<Label for='email'>Email</Label>
						<Input type='email' name='email' id='email' placeholder='with a placeholder' onChange={() => handleCredentials(event)} />
					</FormGroup>
					<FormGroup>
						<Label for='password'>Password</Label>
						<Input type='password' name='password' id='password' placeholder='password placeholder' onChange={() => handleCredentials(event)} />
					</FormGroup>

					<FormGroup>
						<Label check>
							<Input type='checkbox' name='remember_me' id='remember_me' onChange={() => handleRememberMe(event)} />
							Se souvenir de moi
						</Label>
					</FormGroup>

					<button className='btn btn-primary'>Connexion</button>
				</Form>
			</div>
		</Layout>
	)
}

export default Login
