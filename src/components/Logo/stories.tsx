import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Logo } from '.';

export default {
	title: 'components/Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = () => (
	<div className="h-screen bg-white dark:bg-black">
		<Logo />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
