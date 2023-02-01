import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '.';

export default {
	title: 'components/Switch',
	component: Switch,
	argTypes: { toggleSwitch: { action: 'clicked' } },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = args => (
	<div className="h-screen bg-white p-4 dark:bg-black">
		<Switch {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	label: 'Click here to toggle',
};
