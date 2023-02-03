import {
	HomeIcon,
	FilmIcon,
	PlayCircleIcon,
	ArchiveBoxArrowDownIcon,
	ArrowPathIcon,
} from '@heroicons/react/24/outline';

export const sidebarClosedItems = [
	{
		title: 'Home',
		icon: <HomeIcon className="h-6 w-6" />,
		link: '/',
	},
	{
		title: 'Shorts',
		icon: <FilmIcon className="h-6 w-6" />,
		link: '/shorts',
	},
	{
		title: 'Subscriptions',
		icon: <PlayCircleIcon className="h-6 w-6" />,
		link: '/subscriptions',
	},
	{
		title: 'Library',
		icon: <ArchiveBoxArrowDownIcon className="h-6 w-6" />,
		link: '/library',
	},
	{
		title: 'History',
		icon: <ArrowPathIcon className="h-6 w-6" />,
		link: '/history',
	},
];
