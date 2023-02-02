import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { EllipsisVerticalIcon } from '@heroicons/react/24/outline';

import { SettingsList } from 'components/SettingsList';

export const SettingsDropdown = () => {
	return (
		<Menu as="div" className="relative flex items-center">
			<Menu.Button>
				<EllipsisVerticalIcon
					className="h-6 w-6 cursor-pointer text-gray-500 dark:text-white"
					title="Settings"
				/>
			</Menu.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items>
					<SettingsList />
				</Menu.Items>
			</Transition>
		</Menu>
	);
};
