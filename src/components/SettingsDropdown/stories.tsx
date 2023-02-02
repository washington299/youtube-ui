import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SettingsDropdown } from '.';

export default {
	title: 'components/SettingsDropdown',
	component: SettingsDropdown,
} as ComponentMeta<typeof SettingsDropdown>;

const Template: ComponentStory<typeof SettingsDropdown> = () => (
	<div className="flex h-screen items-start justify-center bg-white p-4 dark:bg-neutral-900">
		<SettingsDropdown />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
