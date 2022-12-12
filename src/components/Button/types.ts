import {
	MouseEvent,
	FormEvent
} from 'react'

import { TSizes, TTheme } from '@src/types'
import { ECondition, ETheme } from '@src/consts'

export interface IButtonProps {
	text?: string
	theme?: TTheme
	size?: TSizes
	disabled?: boolean
	borderRadius?: number
	onClick?: (e?: FormEvent<HTMLButtonElement> | MouseEvent<HTMLButtonElement> | MouseEvent<HTMLSpanElement>) => void,
	classes?: {
		buttonClasses?: string
		textClasses?: string
	}
}

// export interface IThemeCSSPropertiesArgs {
// 	condition?: TCondition
// 	color?: TColor
// 	background?: TColor
// 	border?: Nullable<TColor>
// }

export type TButtonStyles = Record<ETheme, IConditionStyles>

export interface IConditionStyles {
	[ECondition.COMMON]?: {
		[key: string]: string
	}
	[ECondition.HOVER]?: {
		[key: string]: string
	}
	[ECondition.ACTIVE]?: {
		[key: string]: string
	}
	[ECondition.FOCUS]?: {
		[key: string]: string
	}
	[ECondition.DISABLE]?: {
		[key: string]: string
	}
}
