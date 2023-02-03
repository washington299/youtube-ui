import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarClosed } from '.';

export default {
	title: 'components/SidebarClosed',
	component: SidebarClosed,
	args: { currentPage: '/' },
} as ComponentMeta<typeof SidebarClosed>;

const Template: ComponentStory<typeof SidebarClosed> = args => (
	<div className="h-screen bg-slate-100 dark:bg-neutral-600">
		<SidebarClosed {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
