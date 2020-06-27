import React, { Fragment, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/app.css'
import '../../public/themify-icons/themify-icons.css'

export interface ApplicationProps {
	Component: any
	pageProps: any
}

const Application: React.SFC<ApplicationProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}
export default Application
