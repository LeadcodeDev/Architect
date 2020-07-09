export default function ({ store, redirect }) {
	if (!store.state.auth.member.logged) {
		redirect('/authentication/login')
	}
}
