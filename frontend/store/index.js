export const state = () => ({
	data: null
})

export const actions = {
	async nuxtServerInit({ commit, dispatch }) {
		await dispatch('storeDispatchFunc')
	},

	async storeDispatchFunc({ commit }) {
		try {
			const { data } = await this.$axios.get('/authentication/auth')
			commit('auth/reload', {
				user: {
					id: data.id,
					identity: data.firstname + ' ' + data.lastname,
					permission: data.permission
				},
				logged: true
			})
		} catch (error) {
			commit('auth/reload', { user: {}, logged: false })
		}
	}
}
