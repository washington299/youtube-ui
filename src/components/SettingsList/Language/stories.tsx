import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Language } from '.';

export default {
	title: 'components/SettingsList/Language',
	component: Language,
	args: {
		language: 'english_us',
	},
	argTypes: {
		changeLanguage: { action: 'clicked' },
	},
} as ComponentMeta<typeof Language>;

const Template: ComponentStory<typeof Language> = args => (
	<div className="bg-white p-4 dark:bg-black">
		<Language {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
