import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SettingsList } from '.';

export default {
	title: 'components/SettingsList',
	component: SettingsList,
} as ComponentMeta<typeof SettingsList>;

const Template: ComponentStory<typeof SettingsList> = () => (
	<div className="flex h-screen justify-center bg-white p-4 dark:bg-black">
		<div className="relative">
			<SettingsList />
		</div>
	</div>
);

export const Default = Template.bind({});
Default.args = {};
