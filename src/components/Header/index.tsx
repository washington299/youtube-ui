import { useState } from 'react';
import {
	Bars3Icon,
	MagnifyingGlassIcon,
	ArrowLeftIcon,
} from '@heroicons/react/24/outline';

import { Logo } from 'components/Logo';
import { Search } from 'components/Search';
import { SettingsDropdown } from 'components/SettingsDropdown';
import { SignInButton } from 'components/SignInButton';

type HeaderProps = {
	toggleMenu: () => void;
};

export const Header = ({ toggleMenu }: HeaderProps) => {
	const [showFullSearch, setShowFullSearch] = useState(false);

	const handleSearch = (text: string) => {
		alert(text);
	};

	return (
		<header className="mb-2 flex items-center justify-between bg-white px-6 dark:bg-neutral-900">
			{showFullSearch ? (
				<div className="flex w-full items-center py-2" aria-label="Full search">
					<ArrowLeftIcon
						className="mr-4 h-7 w-7 cursor-pointer text-gray-500 dark:text-white"
						title="Arrow back"
						onClick={() => setShowFullSearch(false)}
					/>
					<Search callback={handleSearch} />
				</div>
			) : (
				<>
					<div className="flex items-center space-x-3">
						<Bars3Icon
							className="h-7 w-7 cursor-pointer text-gray-500 dark:text-white"
							title="Menu hamburguer"
							onClick={toggleMenu}
						/>

						<Logo />
					</div>

					<div className="hidden max-w-2xl flex-1 px-6 md:block">
						<Search callback={handleSearch} />
					</div>

					<div className="flex items-center space-x-2">
						<MagnifyingGlassIcon
							className="h-6 w-6 cursor-pointer text-gray-500 dark:text-white md:hidden"
							title="Search"
							onClick={() => setShowFullSearch(true)}
						/>
						<SettingsDropdown />
						<SignInButton />
					</div>
				</>
			)}
		</header>
	);
};
