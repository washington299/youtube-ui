import {
	HomeIcon as HomeIconOutline,
	FilmIcon as FilmIconOutline,
} from '@heroicons/react/24/outline';
import {
	HomeIcon as HomeIconSolid,
	FilmIcon as FilmIconSolid,
} from '@heroicons/react/24/solid';

export const mockItems = [
	{
		IconOutline: HomeIconOutline,
		IconSolid: HomeIconSolid,
		name: 'Home',
		link: '/',
	},
	{
		IconOutline: FilmIconOutline,
		IconSolid: FilmIconSolid,
		name: 'Shorts',
		link: '/shorts',
	},
];
