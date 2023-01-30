import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SettingsList } from '.';

export default {
	title: 'components/SettingsList',
	component: SettingsList,
} as ComponentMeta<typeof SettingsList>;

const Template: ComponentStory<typeof SettingsList> = () => (
	<div className="h-screen bg-white p-4 dark:bg-black">
		<SettingsList />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
