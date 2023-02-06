import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Open } from '.';

export default {
	title: 'components/Sidebar/Open',
	component: Open,
	args: { currentPage: '/' },
} as ComponentMeta<typeof Open>;

const Template: ComponentStory<typeof Open> = args => (
	<div className="bg-slate-100 dark:bg-neutral-900">
		<Open {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
