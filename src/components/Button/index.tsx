import React, { FC } from 'react'
import './styles.css'
import { IButtonProps } from './types'

const Button: FC<IButtonProps> = ({ children, ...props }) => {
	return (
		<button
			className='button'
			{ ...props }
		>
			{ children }
		</button>
	)
}

export default Button
