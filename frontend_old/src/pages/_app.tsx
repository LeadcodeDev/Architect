import React, { Fragment, useEffect, useState } from 'react'
import { NextPage } from 'next'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../public/css/app.css'
import '../../public/themify-icons/themify-icons.css'

export interface ApplicationProps {
	Component?: any
	pageProps?: any
}

const Application: NextPage<ApplicationProps> = ({ Component, pageProps }) => {
	return <Component {...pageProps} />
}

export default Application
