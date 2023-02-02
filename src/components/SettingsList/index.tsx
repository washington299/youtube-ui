import { useState } from 'react';
import { ChevronRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

import { useSettingsItems } from 'hooks/useSettingsItems';

type ActiveChildrenProps = {
	title: string;
	element: JSX.Element;
};

export const SettingsList = () => {
	const [activeChildren, setActiveChildren] = useState<
		ActiveChildrenProps | undefined
	>();
	const { items } = useSettingsItems();

	return (
		<div className="absolute -left-52 top-6 z-50 w-80 divide-y border border-gray-200 bg-white dark:divide-gray-600 dark:border-gray-600 dark:bg-neutral-900 dark:text-white">
			{activeChildren ? (
				<div className="divide-y dark:divide-gray-600">
					<div className="flex items-center py-3 px-4">
						<ArrowLeftIcon
							aria-label="Arrow back"
							className="mr-4 h-6 w-6 cursor-pointer"
							onClick={() => setActiveChildren(undefined)}
						/>
						<span className="text-lg">{activeChildren.title}</span>
					</div>
					<div className="py-2">{activeChildren.element}</div>
				</div>
			) : (
				<>
					{items.map((list, index) => (
						<ul key={index} className="py-2">
							{list.map(item => (
								<li
									key={item.text}
									className="flex cursor-pointer items-center justify-between px-5 py-2 hover:bg-gray-50 dark:hover:bg-neutral-700"
									onClick={() => setActiveChildren(item.children)}
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
				</>
			)}
		</div>
	);
};
