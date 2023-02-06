import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Sidebar } from '.';

export default {
	title: 'components/Sidebar',
	component: Sidebar,
	args: { isOpen: false },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = args => (
	<div className="bg-slate-100 dark:bg-neutral-900">
		<Sidebar {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
