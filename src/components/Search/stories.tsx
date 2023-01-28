import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Search } from '.';

export default {
	title: 'components/Search',
	component: Search,
	argTypes: {
		callback: { action: 'clicked' },
	},
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = args => (
	<div className="h-screen bg-white p-4 dark:bg-neutral-900">
		<Search {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
