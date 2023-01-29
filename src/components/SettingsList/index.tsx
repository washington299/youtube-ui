import { ChevronRightIcon } from '@heroicons/react/24/outline';

import { useSettingsItems } from './useSettingsItems';

export const SettingsList = () => {
	const settingsItems = useSettingsItems();

	return (
		<div className="w-80 divide-y border border-gray-200 bg-white">
			{settingsItems.map((list, index) => (
				<ul key={index} className="py-2">
					{list.map(item => (
						<li
							key={item.text}
							className="flex cursor-pointer items-center justify-between px-5 py-2 hover:bg-gray-50"
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
