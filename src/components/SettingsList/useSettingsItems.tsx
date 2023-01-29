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

export const useSettingsItems = () => {
	const iconStyles = 'mr-4 h-6 w-6';

	return [
		[
			{
				icon: <LockClosedIcon className={iconStyles} />,
				text: 'Your data in YouTube',
			},
		],
		[
			{
				icon: <MoonIcon className={iconStyles} />,
				text: 'Appearance: Light',
				children: <div>Appearance</div>,
			},
			{
				icon: <LanguageIcon className={iconStyles} />,
				text: 'Language: English',
				children: <div>Language</div>,
			},
			{
				icon: <ShieldExclamationIcon className={iconStyles} />,
				text: 'Restricted Mode: Off',
				children: <div>Restricted Mode</div>,
			},
			{
				icon: <GlobeAltIcon className={iconStyles} />,
				text: 'Location: Brazil',
				children: <div>Location</div>,
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
};
