import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './Button'
import { ETheme } from '@src/consts'

export default {
	title: 'Components/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
	<Button {...args}>Click Me!</Button>;

export const Primary = Template.bind({});
Primary.args = {
	text: 'Click Me',
	theme: ETheme.BRAND,
	borderRadius: 10,
	disabled: false,
	// buttonProps: {
	// 	onClick: () => console.log('Click!'),
	// }
	onClick: () => console.log('Click!')
}
