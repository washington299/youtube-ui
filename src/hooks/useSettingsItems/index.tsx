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

import { Appearance } from 'components/SettingsList/Appearance';
import { Language } from 'components/SettingsList/Language';
import { languagesList } from 'components/SettingsList/Language/languagesList';
import { RestrictedMode } from 'components/SettingsList/RestrictedMode';
import { Location } from 'components/SettingsList/Location';
import { locationsList } from 'components/SettingsList/Location/locationsList';

export type ThemeType = 'light' | 'dark';

export const useSettingsItems = () => {
	const [theme, setTheme] = useState<ThemeType>('light');
	const [language, setLanguage] = useState('english_us');
	const [restrictedMode, setRestrictedMode] = useState('off');
	const [location, setLocation] = useState('brazil');

	const iconStyles = 'mr-4 h-6 w-6';

	const currentLanguageIndex = languagesList.findIndex(
		item => item.key === language,
	);
	const currentLocationIndex = locationsList.findIndex(
		item => item.key === location,
	);

	const changeTheme = (newTheme: ThemeType) => setTheme(newTheme);
	const changeLanguage = (newLanguage: string) => setLanguage(newLanguage);
	const toggleRestrictedMode = (value: 'off' | 'on') =>
		setRestrictedMode(value);
	const changeLocation = (newLocation: string) => setLocation(newLocation);

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
				text: `Language: ${languagesList[currentLanguageIndex].language}`,
				children: {
					title: 'Choose your language',
					element: (
						<Language language={language} changeLanguage={changeLanguage} />
					),
				},
			},
			{
				icon: <ShieldExclamationIcon className={iconStyles} />,
				text: `Restricted Mode: ${restrictedMode}`,
				children: {
					title: 'Restricted Mode',
					element: (
						<RestrictedMode
							checked={restrictedMode === 'on'}
							toggleSwitch={toggleRestrictedMode}
						/>
					),
				},
			},
			{
				icon: <GlobeAltIcon className={iconStyles} />,
				text: `Location: ${locationsList[currentLocationIndex].location}`,
				children: {
					title: 'Choose your location',
					element: (
						<Location location={location} changeLocation={changeLocation} />
					),
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

	return {
		items,
		theme,
		changeTheme,
		language,
		changeLanguage,
		restrictedMode,
		toggleRestrictedMode,
		location,
		changeLocation,
	};
};
