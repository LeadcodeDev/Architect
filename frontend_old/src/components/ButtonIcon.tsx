import React from 'react'

export interface ButtonIconProps {
	icon: string
}

const ButtonIcon: React.SFC<ButtonIconProps> = ({ icon }) => {
	return (
		<div className='btn btn-icon'>
			<i className={'ti-' + icon}></i>
		</div>
	)
}

export default ButtonIcon
