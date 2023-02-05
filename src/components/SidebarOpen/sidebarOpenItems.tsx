import { ForwardRefExoticComponent, SVGProps } from 'react';

import {
	HomeIcon as HomeIconOutline,
	FilmIcon as FilmIconOutline,
	PlayCircleIcon as PlayCircleIconOutline,
	ArchiveBoxArrowDownIcon as ArchiveBoxArrowDownIconOutline,
	ArrowPathIcon as ArrowPathIconOutline,
	FireIcon as FireIconOutline,
	MusicalNoteIcon as MusicNoteIconOutline,
	VideoCameraIcon as VideoCameraIconOutline,
	SignalIcon as SignalIconOutline,
	PuzzlePieceIcon as PuzzlePieceIconOutline,
	NewspaperIcon as NewspaperIconOutline,
	TrophyIcon as TrophyIconOutline,
	LightBulbIcon as LightBulbIconOutline,
	PlusCircleIcon as PlusCircleIconOutline,
	Cog6ToothIcon as Cog6ToothIconOutline,
	FlagIcon as FlagIconOutline,
	QuestionMarkCircleIcon as QuestionMarkCircleIconOutline,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconOutline,
} from '@heroicons/react/24/outline';

import {
	HomeIcon as HomeIconSolid,
	FilmIcon as FilmIconSolid,
	PlayCircleIcon as PlayCircleIconSolid,
	ArchiveBoxArrowDownIcon as ArchiveBoxArrowDownIconSolid,
	ArrowPathIcon as ArrowPathIconSolid,
	FireIcon as FireIconSolid,
	MusicalNoteIcon as MusicNoteIconSolid,
	VideoCameraIcon as VideoCameraIconSolid,
	SignalIcon as SignalIconSolid,
	PuzzlePieceIcon as PuzzlePieceIconSolid,
	NewspaperIcon as NewspaperIconSolid,
	TrophyIcon as TrophyIconSolid,
	LightBulbIcon as LightBulbIconSolid,
	PlusCircleIcon as PlusCircleIconSolid,
	Cog6ToothIcon as Cog6ToothIconSolid,
	FlagIcon as FlagIconSolid,
	QuestionMarkCircleIcon as QuestionMarkCircleIconSolid,
	ChatBubbleBottomCenterTextIcon as ChatBubbleBottomCenterTextIconSolid,
} from '@heroicons/react/24/solid';

import { ListItems } from 'components/SidebarOpen/ListItems';
import { SignInSection } from 'components/SidebarOpen/SignInSection';

export type SidebarItemsProps = {
	IconOutline?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
	IconSolid?: ForwardRefExoticComponent<SVGProps<SVGSVGElement>>;
	icon?: string;
	name: string;
	link: string;
};

const initialItems: SidebarItemsProps[] = [
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
	{
		IconOutline: PlayCircleIconOutline,
		IconSolid: PlayCircleIconSolid,
		name: 'Subscriptions',
		link: '/subscriptions',
	},
];

const storageVideoItems: SidebarItemsProps[] = [
	{
		IconOutline: ArchiveBoxArrowDownIconOutline,
		IconSolid: ArchiveBoxArrowDownIconSolid,
		name: 'Library',
		link: '/library',
	},
	{
		IconOutline: ArrowPathIconOutline,
		IconSolid: ArrowPathIconSolid,
		name: 'History',
		link: '/history',
	},
];

const exporeItems: SidebarItemsProps[] = [
	{
		IconOutline: FireIconOutline,
		IconSolid: FireIconSolid,
		name: 'Trending',
		link: '/trending',
	},
	{
		IconOutline: MusicNoteIconOutline,
		IconSolid: MusicNoteIconSolid,
		name: 'Music',
		link: '/music',
	},
	{
		IconOutline: VideoCameraIconOutline,
		IconSolid: VideoCameraIconSolid,
		name: 'Movies',
		link: '/movies',
	},
	{
		IconOutline: SignalIconOutline,
		IconSolid: SignalIconSolid,
		name: 'Live',
		link: '/live',
	},
	{
		IconOutline: PuzzlePieceIconOutline,
		IconSolid: PuzzlePieceIconSolid,
		name: 'Gaming',
		link: '/gaming',
	},
	{
		IconOutline: NewspaperIconOutline,
		IconSolid: NewspaperIconSolid,
		name: 'News',
		link: '/news',
	},
	{
		IconOutline: TrophyIconOutline,
		IconSolid: TrophyIconSolid,
		name: 'Sports',
		link: '/sports',
	},
	{
		IconOutline: LightBulbIconOutline,
		IconSolid: LightBulbIconSolid,
		name: 'Learning',
		link: '/learning',
	},
];

const browseChannelsItems: SidebarItemsProps[] = [
	{
		IconOutline: PlusCircleIconOutline,
		IconSolid: PlusCircleIconSolid,
		name: 'Browse channels',
		link: '/browse-channels',
	},
];

const youtubeItems: SidebarItemsProps[] = [
	{
		icon: '/logo.svg',
		name: 'Youtube Premium',
		link: '/youtube-premium',
	},
	{
		icon: '/logo.svg',
		name: 'Youtube Music',
		link: '/youtube-music',
	},
	{
		icon: '/logo.svg',
		name: 'Youtube Kids',
		link: '/youtube-kids',
	},
	{
		icon: '/logo.svg',
		name: 'Youtube TV',
		link: '/youtube-tv',
	},
];

const contactItems: SidebarItemsProps[] = [
	{
		IconOutline: Cog6ToothIconOutline,
		IconSolid: Cog6ToothIconSolid,
		name: 'Settings',
		link: '/settings',
	},
	{
		IconOutline: FlagIconOutline,
		IconSolid: FlagIconSolid,
		name: 'Report history',
		link: '/report-history',
	},
	{
		IconOutline: QuestionMarkCircleIconOutline,
		IconSolid: QuestionMarkCircleIconSolid,
		name: 'Help',
		link: '/help',
	},
	{
		IconOutline: ChatBubbleBottomCenterTextIconOutline,
		IconSolid: ChatBubbleBottomCenterTextIconSolid,
		name: 'Send feedback',
		link: '/send-feedback',
	},
];

export const sidebarOpenItems = [
	{
		component: <ListItems items={initialItems} />,
	},
	{
		component: <ListItems items={storageVideoItems} />,
	},
	{
		component: <SignInSection />,
	},
	{
		title: 'EXPLORE',
		component: <ListItems items={exporeItems} />,
	},
	{
		component: <ListItems items={browseChannelsItems} />,
	},
	{
		component: <ListItems items={youtubeItems} />,
	},
	{
		title: 'MORE FROM YOUTUBE',
		component: <ListItems items={contactItems} />,
	},
];
