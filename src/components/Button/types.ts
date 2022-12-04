import { DetailedHTMLProps, ButtonHTMLAttributes, HTMLAttributes } from 'react'
import { TSizes, TTheme } from '@src/types'

export interface IButtonProps  {
	text?: string
	theme?: TTheme
	size?: TSizes
	borderRadius?: number
	buttonProps?: DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
	textProps?: DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>
}
