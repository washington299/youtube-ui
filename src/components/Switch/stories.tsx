import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Switch } from '.';

export default {
	title: 'components/Switch',
	component: Switch,
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = () => (
	<div className="h-screen bg-white p-4 dark:bg-black">
		<Switch />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
