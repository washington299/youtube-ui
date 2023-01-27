import { Bars3Icon } from '@heroicons/react/24/outline';

import { Logo } from 'components/Logo';

export const Header = () => {
	return (
		<header className="mb-2 bg-white px-6 dark:bg-neutral-900">
			<div className="flex items-center space-x-3">
				<Bars3Icon
					className="h-7 w-7 text-gray-500 dark:text-white"
					title="Menu hamburguer"
				/>
				<Logo />
			</div>
		</header>
	);
};
