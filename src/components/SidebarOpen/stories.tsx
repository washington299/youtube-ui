import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarOpen } from '.';

export default {
	title: 'components/SidebarOpen',
	component: SidebarOpen,
	args: { currentPage: '/' },
} as ComponentMeta<typeof SidebarOpen>;

const Template: ComponentStory<typeof SidebarOpen> = args => (
	<div className="bg-slate-100 dark:bg-neutral-900">
		<SidebarOpen {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
