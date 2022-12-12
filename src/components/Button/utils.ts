import { ButtonTheme } from '@src/components/Button/consts'
import { ECondition, ETheme } from '@src/consts'
import { TCondition, TTheme } from '@src/types'

export const getButtonThemeStyles =
	(theme: TTheme = ETheme.DEFAULT, condition: TCondition = ECondition.COMMON) =>
		ButtonTheme[theme][condition]
