import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from '.';

export default {
	title: 'components/Search',
	component: Search,
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = () => (
	<div className="h-screen bg-white p-4 dark:bg-neutral-900">
		<Search />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
