import { TColor } from '@src/types'

export const getColor = (color: TColor): string =>
	`var(--gbx-color-${color})`

export const getBorder = (color: TColor, size: number = 1) =>
	`${size}px solid var(--gbx-color-${color})`
