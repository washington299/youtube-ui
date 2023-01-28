import {
	Bars3Icon,
	MagnifyingGlassIcon,
	EllipsisVerticalIcon,
	UserCircleIcon,
} from '@heroicons/react/24/outline';

import { Logo } from 'components/Logo';
import { Search } from 'components/Search';

type HeaderProps = {
	toggleMenu: () => void;
};

export const Header = ({ toggleMenu }: HeaderProps) => {
	return (
		<header className="mb-2 flex items-center justify-between bg-white px-6 dark:bg-neutral-900">
			<div className="flex items-center space-x-3">
				<Bars3Icon
					className="h-7 w-7 cursor-pointer text-gray-500 dark:text-white"
					title="Menu hamburguer"
					onClick={toggleMenu}
				/>

				<Logo />
			</div>

			<div className="hidden flex-1 px-6 md:block">
				<Search callback={() => {}} />
			</div>

			<div className="flex items-center space-x-2">
				<MagnifyingGlassIcon
					className="h-6 w-6 text-gray-500 dark:text-white md:hidden"
					title="Search"
				/>
				<EllipsisVerticalIcon
					className="h-6 w-6 cursor-pointer text-gray-500 dark:text-white"
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
