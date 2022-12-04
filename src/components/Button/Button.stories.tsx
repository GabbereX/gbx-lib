import React from 'react'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import Button from './'
import { ETheme } from '@src/consts'

export default {
	title: 'Example/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) =>
	<Button {...args}>Click Me!</Button>;

export const Primary = Template.bind({});
Primary.args = {
	text: 'Click Me',
	theme: ETheme.BRAND,
	borderRadius: 10,
	buttonProps: {
		onClick: () => console.log('Click!'),
	}
}
