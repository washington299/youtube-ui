import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Closed } from '.';

export default {
	title: 'components/Sidebar/Closed',
	component: Closed,
	args: { currentPage: '/' },
} as ComponentMeta<typeof Closed>;

const Template: ComponentStory<typeof Closed> = args => (
	<div className="h-screen bg-slate-100 dark:bg-neutral-600">
		<Closed {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
