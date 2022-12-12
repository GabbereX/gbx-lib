// export const CSSProperties = {
// 	original: {
// 		color: '',
// 		background: '',
// 		border: ''
// 	},
// 	hover: {
// 		color: '',
// 		background: '',
// 		border: ''
// 	},
// 	active: {
// 		color: '',
// 		background: '',
// 		border: ''
// 	},
// 	focus: {
// 		color: '',
// 		background: '',
// 		border: ''
// 	},
// 	disable: {
// 		color: '',
// 		background: '',
// 		border: ''
// 	}
// }

import { EColor, ECondition, ETheme } from '@src/consts'
import { getBorder, getColor } from '@src/utils'
import { TButtonStyles } from '@src/components/Button/types'

export const ButtonTheme: TButtonStyles = {
	[ETheme.DEFAULT]: {
		[ECondition.COMMON]: {
			color: getColor(EColor.NEUTRAL_800),
			background: getColor(EColor.WHITE),
			border: getBorder(EColor.NEUTRAL_200),
		},
		[ECondition.HOVER]: {
			background: getColor(EColor.NEUTRAL_200),
		},
		[ECondition.ACTIVE]: {
			background: getColor(EColor.NEUTRAL_300)
		},
		[ECondition.FOCUS]: {
			border: getBorder(EColor.NEUTRAL_800, 2)
		}
	},

	[ETheme.PRIMARY]: {},
	[ETheme.SUCCESS]: {},
	[ETheme.INFO]: {},
	[ETheme.WARNING]: {},
	[ETheme.DANGER]: {},
	[ETheme.BRAND]: {},
	[ETheme.LINK]: {},
	[ETheme.TEXT]: {},
}
