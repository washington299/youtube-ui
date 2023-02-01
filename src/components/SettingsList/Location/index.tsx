import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/24/outline';

import { LocationsList } from './locationsList';

type LocationProps = {
	location: string;
	changeLocation: (location: string) => void;
};

export const Location = ({ location, changeLocation }: LocationProps) => {
	const [currentLocation, setCurrentLocation] = useState(location);

	const handleChangeLocation = (key: string) => {
		setCurrentLocation(key);
		changeLocation(key);
	};

	return (
		<ul className="py-2 dark:text-white">
			{LocationsList.map(({ location, key }) => (
				<li
					key={key}
					className="flex cursor-pointer items-center px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
					onClick={() => handleChangeLocation(key)}
				>
					<CheckIcon
						className={`mr-4 h-5 w-5 ${
							currentLocation === key ? 'opacity-100' : 'opacity-0'
						}`}
						aria-label={key}
						aria-hidden={currentLocation !== key}
					/>
					{location}
				</li>
			))}
		</ul>
	);
};
