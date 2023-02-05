import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItems } from '.';
import { mockItems } from './mock';

export default {
	title: 'components/SidebarOpen/ListItems',
	component: ListItems,
	args: { items: mockItems },
} as ComponentMeta<typeof ListItems>;

const Template: ComponentStory<typeof ListItems> = args => (
	<div className="h-screen bg-white dark:bg-neutral-900">
		<ListItems {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
