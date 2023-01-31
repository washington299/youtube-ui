import { CheckIcon } from '@heroicons/react/24/outline';

import { languagesList } from './languagesList';

export const Language = () => {
	return (
		<ul className="py-2">
			{languagesList.map(({ language, key }) => (
				<li
					key={key}
					className="flex cursor-pointer items-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
				>
					<CheckIcon className={`mr-4 h-5 w-5`} aria-label="dark theme" />
					{language}
				</li>
			))}
		</ul>
	);
};
