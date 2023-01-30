import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Appearance } from '.';

export default {
	title: 'components/SettingsList/Appearance',
	component: Appearance,
	argTypes: {
		toggleTheme: { action: 'clicked' },
	},
} as ComponentMeta<typeof Appearance>;

const Template: ComponentStory<typeof Appearance> = args => (
	<div className="h-screen bg-white p-4 dark:bg-black">
		<Appearance {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
