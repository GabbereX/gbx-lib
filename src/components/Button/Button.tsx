import React, { FC } from 'react'
import styled from 'styled-components'

import { IButtonProps } from './types'

import './Button.scss'
import { ECondition } from '@src/consts'
import { getButtonThemeStyles } from '@src/components/Button/utils'

const Button: FC<IButtonProps> = (props) => {
	const {
		size,
		text,
		classes,
		disabled = false,
		onClick
	} = props

	return (
		<StyledButton
			disabled={disabled}
			className={ classes?.buttonClasses }
			onClick={ onClick }
			{ ...props }
		>
			<span>
				{ text }
			</span>
		</StyledButton>
	)
}

const StyledButton = styled.button<IButtonProps>`
  ${ ({ theme }) => getButtonThemeStyles(theme) };
  transition: all 0.3s ease;
	
	&:hover:not([disabled]) {
    ${ ({ theme }) => getButtonThemeStyles(theme, ECondition.HOVER) };
	}

  &:active:not([disabled]) {
    ${ ({ theme }) => getButtonThemeStyles(theme, ECondition.ACTIVE) };
  }

  &:focus {
	  position: relative;
    outline: none;
    transition: border 10.3s ease;
	  
	  &::after {
		  content: '';
		  position: absolute;
		  left: 50%;
		  top: 50%;
		  width: 100%;
		  height: 100%;
		  transform: translate(-50%, -50%);
      ${ ({ theme }) => getButtonThemeStyles(theme, ECondition.FOCUS) };
	  }
  }
	
	&:disabled {
		cursor: default;
		opacity: 0.5;
	}
`

export default Button
