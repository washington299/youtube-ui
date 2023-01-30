import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

type AppearanceProps = {
	theme: 'light' | 'dark';
	toggleTheme: (theme: string) => void;
};

export const Appearance = ({ theme, toggleTheme }: AppearanceProps) => {
	const [currentTheme, setCurrentTheme] = useState(theme);

	const handleToggleTheme = (newTheme: 'light' | 'dark') => {
		setCurrentTheme(newTheme);
		toggleTheme(newTheme);
	};

	return (
		<div className="dark:text-white">
			<p className="pl-5 text-sm text-gray-500 dark:text-gray-400">
				Setting applies to this browser only
			</p>

			<ul className="py-2">
				<li
					className="flex cursor-pointer items-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
					onClick={() => handleToggleTheme('dark')}
				>
					<CheckIcon
						className={`mr-4 h-5 w-5 ${
							currentTheme === 'dark' ? 'opacity-100' : 'opacity-0'
						}`}
						aria-label="dark theme"
					/>
					Dark theme
				</li>
				<li
					className="flex cursor-pointer items-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
					onClick={() => handleToggleTheme('light')}
				>
					<CheckIcon
						className={`mr-4 h-5 w-5 ${
							currentTheme === 'light' ? 'opacity-100' : 'opacity-0'
						}`}
						aria-label="light theme"
					/>
					Light theme
				</li>
			</ul>
		</div>
	);
};
