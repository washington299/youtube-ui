import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Location } from '.';

export default {
	title: 'components/SettingsList/Location',
	component: Location,
	args: {
		location: 'brazil',
	},
	argTypes: {
		changeLocation: { action: 'clicked' },
	},
} as ComponentMeta<typeof Location>;

const Template: ComponentStory<typeof Location> = args => (
	<div className="bg-white p-4 dark:bg-black">
		<Location {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
