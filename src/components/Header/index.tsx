import {
	Bars3Icon,
	MagnifyingGlassIcon,
	EllipsisVerticalIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';

import { Logo } from 'components/Logo';

export const Header = () => {
	return (
		<header className="mb-2 flex justify-between bg-white px-6 dark:bg-neutral-900">
			<div className="flex items-center space-x-3">
				<Bars3Icon
					className="h-7 w-7 text-gray-500 dark:text-white"
					title="Menu hamburguer"
				/>

				<Logo />
			</div>

			<div className="flex items-center  space-x-2">
				<MagnifyingGlassIcon
					className="h-6 w-6 text-gray-500 dark:text-white"
					title="Search"
				/>
				<EllipsisVerticalIcon
					className="h-6 w-6 text-gray-500 dark:text-white"
					title="Settings"
				/>
				<button className="flex items-center border border-blue-500 py-1 px-2 text-sm font-bold text-blue-500 dark:border-blue-400 dark:text-blue-400">
					<UserCircleIcon className="mr-1 h-6 w-6 text-blue-500 dark:text-blue-400" />
					SIGN IN
				</button>
			</div>
		</header>
	);
};
