import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ListItem } from '.';
import { mockItem } from './mock';

export default {
	title: 'components/SidebarOpen/ListItem',
	component: ListItem,
	args: { ...mockItem, isCurrentPage: false },
	argTypes: {
		IconOutline: { control: { type: '' } },
		IconSolid: { control: { type: '' } },
		icon: { control: { type: '' } },
	},
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = args => (
	<div className="h-screen bg-white dark:bg-neutral-900">
		<ListItem {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};

export const WithIconImage = Template.bind({});
WithIconImage.args = {
	icon: '/logo.svg',
	name: 'Youtube',
};
