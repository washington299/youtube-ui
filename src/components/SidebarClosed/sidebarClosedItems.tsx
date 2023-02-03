import {
	HomeIcon as HomeIconOutline,
	FilmIcon as FilmIconOutline,
	PlayCircleIcon as PlayCircleIconOutline,
	ArchiveBoxArrowDownIcon as ArchiveBoxArrowDownIconOutline,
	ArrowPathIcon as ArrowPathIconOutline,
} from '@heroicons/react/24/outline';
import {
	HomeIcon as HomeIconSolid,
	FilmIcon as FilmIconSolid,
	PlayCircleIcon as PlayCircleIconSolid,
	ArchiveBoxArrowDownIcon as ArchiveBoxArrowDownIconSolid,
	ArrowPathIcon as ArrowPathIconSolid,
} from '@heroicons/react/24/solid';

export const sidebarClosedItems = [
	{
		title: 'Home',
		iconOutline: (
			<HomeIconOutline className="h-6 w-6" aria-label="Home icon outline" />
		),
		iconSolid: (
			<HomeIconSolid className="h-6 w-6" aria-label="Home icon solid" />
		),
		link: '/',
	},
	{
		title: 'Shorts',
		iconOutline: (
			<FilmIconOutline className="h-6 w-6" aria-label="Film icon outline" />
		),
		iconSolid: (
			<FilmIconSolid className="h-6 w-6" aria-label="Film icon solid" />
		),
		link: '/shorts',
	},
	{
		title: 'Subscriptions',
		iconOutline: (
			<PlayCircleIconOutline
				className="h-6 w-6"
				aria-label="PlayCircle icon outline"
			/>
		),
		iconSolid: (
			<PlayCircleIconSolid
				className="h-6 w-6"
				aria-label="PlayCircle icon solid"
			/>
		),
		link: '/subscriptions',
	},
	{
		title: 'Library',
		iconOutline: (
			<ArchiveBoxArrowDownIconOutline
				className="h-6 w-6"
				aria-label="ArchiveBox icon outline"
			/>
		),
		iconSolid: (
			<ArchiveBoxArrowDownIconSolid
				className="h-6 w-6"
				aria-label="ArchiveBox icon solid"
			/>
		),
		link: '/library',
	},
	{
		title: 'History',
		iconOutline: (
			<ArrowPathIconOutline
				className="h-6 w-6"
				aria-label="ArrowPath icon outline"
			/>
		),
		iconSolid: (
			<ArrowPathIconSolid
				className="h-6 w-6"
				aria-label="ArrowPath icon solid"
			/>
		),
		link: '/history',
	},
];
