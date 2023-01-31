import { useState } from 'react';
import {
	LockClosedIcon,
	MoonIcon,
	LanguageIcon,
	ShieldExclamationIcon,
	GlobeAltIcon,
	ComputerDesktopIcon,
	Cog6ToothIcon,
	QuestionMarkCircleIcon,
	ChatBubbleBottomCenterTextIcon,
} from '@heroicons/react/24/outline';

import { Appearance } from '../../components/SettingsList/Appearance';

export type ThemeType = 'light' | 'dark';

export const useSettingsItems = () => {
	const [theme, setTheme] = useState<ThemeType>('light');

	const iconStyles = 'mr-4 h-6 w-6';

	const changeTheme = (newTheme: ThemeType) => setTheme(newTheme);

	const items = [
		[
			{
				icon: <LockClosedIcon className={iconStyles} />,
				text: 'Your data in YouTube',
			},
		],
		[
			{
				icon: <MoonIcon className={iconStyles} />,
				text: `Appearance: ${theme}`,
				children: {
					title: 'Appearance',
					element: <Appearance theme={theme} toggleTheme={changeTheme} />,
				},
			},
			{
				icon: <LanguageIcon className={iconStyles} />,
				text: 'Language: English',
				children: {
					title: 'Language',
					element: <div>Language</div>,
				},
			},
			{
				icon: <ShieldExclamationIcon className={iconStyles} />,
				text: 'Restricted Mode: Off',
				children: {
					title: 'Restricted Mode',
					element: <div>Restricted Mode</div>,
				},
			},
			{
				icon: <GlobeAltIcon className={iconStyles} />,
				text: 'Location: Brazil',
				children: {
					title: 'Location',
					element: <div>Location</div>,
				},
			},
			{
				icon: <ComputerDesktopIcon className={iconStyles} />,
				text: 'Keyboard shortcuts',
			},
		],
		[
			{
				icon: <Cog6ToothIcon className={iconStyles} />,
				text: 'Settings',
			},
		],
		[
			{
				icon: <QuestionMarkCircleIcon className={iconStyles} />,
				text: 'Help',
			},
			{
				icon: <ChatBubbleBottomCenterTextIcon className={iconStyles} />,
				text: 'Send feedback',
			},
		],
	];

	return { items, theme, changeTheme };
};