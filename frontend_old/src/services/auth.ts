import Axios from 'axios'
import { ARCHITECT_CORE } from '../../config'

export async function setLocalStorage(name, value) {
	await localStorage.setItem(name, value)
}
