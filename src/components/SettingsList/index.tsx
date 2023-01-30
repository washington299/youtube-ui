import { ChevronRightIcon } from '@heroicons/react/24/outline';

import { useSettingsItems } from './useSettingsItems';

export const SettingsList = () => {
	const settingsItems = useSettingsItems();

	return (
		<div className="w-80 divide-y border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-neutral-900">
			{settingsItems.map((list, index) => (
				<ul key={index} className="py-2 dark:text-white">
					{list.map(item => (
						<li
							key={item.text}
							className="flex cursor-pointer items-center justify-between px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
						>
							<div className="flex items-center">
								{item.icon}
								{item.text}
							</div>
							{!!item.children && <ChevronRightIcon className="h-5 w-5" />}
						</li>
					))}
				</ul>
			))}
		</div>
	);
};
