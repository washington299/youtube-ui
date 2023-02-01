import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RestrictedMode } from '.';

export default {
	title: 'components/SettingsList/RestrictedMode',
	component: RestrictedMode,
	argTypes: {
		toggleSwitch: { action: 'clicked' },
	},
} as ComponentMeta<typeof RestrictedMode>;

const Template: ComponentStory<typeof RestrictedMode> = args => (
	<div className="h-screen bg-white p-4 dark:bg-black">
		<RestrictedMode {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
