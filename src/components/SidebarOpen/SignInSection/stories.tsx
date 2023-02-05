import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SignInSection } from '.';

export default {
	title: 'components/SidebarOpen/SignInSection',
	component: SignInSection,
} as ComponentMeta<typeof SignInSection>;

const Template: ComponentStory<typeof SignInSection> = () => (
	<div className="h-screen w-64 bg-slate-100 dark:bg-neutral-900">
		<SignInSection />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
