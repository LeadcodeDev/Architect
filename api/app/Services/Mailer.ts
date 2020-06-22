import Env from '@ioc:Adonis/Core/Env'
import Nodemailer from 'nodemailer'

export default async function Mail({ from, to, subject, html }) {
	transporter.sendMail({ from, to, subject, html })
}

const transporter = Nodemailer.createTransport({
	host: Env.get('MAILER_HOST') as string,
	port: Env.get('MAILER_PORT', 587) as any,
	secure: Env.get('MAILER_SECURE', false) as string,
	auth: {
		user: Env.get('MAILER_USER') as string,
		pass: Env.get('MAILER_PASSWORD') as string
	},
	tls: {
		rejectUnauthorized: false
	}
})
