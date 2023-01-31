import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

import { languagesList } from './languagesList';

type LanguageProps = {
	language: string;
	changeLanguage: (language: string) => void;
};

export const Language = ({ language, changeLanguage }: LanguageProps) => {
	const [currentLanguage, setCurrentLanguage] = useState(language);

	const handleChangeLanguage = (lang: string) => {
		setCurrentLanguage(lang);
		changeLanguage(lang);
	};

	return (
		<ul className="py-2 dark:text-white">
			{languagesList.map(({ language, key }) => (
				<li
					key={key}
					className="flex cursor-pointer items-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
					onClick={() => handleChangeLanguage(key)}
				>
					<CheckIcon
						className={`mr-4 h-5 w-5 ${
							currentLanguage === key ? 'opacity-100' : 'opacity-0'
						}`}
						aria-label={key}
					/>
					{language}
				</li>
			))}
		</ul>
	);
};
