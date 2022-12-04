import React, { CSSProperties, FC } from 'react'

import { IButtonProps } from './types'

import './Button.scss'

const Button: FC<IButtonProps> = (props) => {
	const {
		theme,
		size,
		text,
		borderRadius,
		buttonProps,
		textProps
	} = props

	const buttonStyles = (): CSSProperties => {
		const style: CSSProperties = {}

		borderRadius && (style.borderRadius = borderRadius)

	  return style
	}


	return (
		<button
			className='button'
			style={ buttonStyles() }
			{ ...buttonProps }
		>
			<span
				{ ...textProps }
			>
				{ text }
			</span>
		</button>
	)
}

export default Button
