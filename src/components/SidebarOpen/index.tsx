import { useSidebarOpenItems } from 'hooks/useSidebarOpenItems';

import { SidebarProps } from 'components/SidebarClosed';

export const SidebarOpen = ({ currentPage }: SidebarProps) => {
	const sidebarItems = useSidebarOpenItems(currentPage);

	return (
		<nav className="h-screen w-64 divide-y overflow-y-auto bg-white dark:divide-gray-500 dark:bg-neutral-800">
			{sidebarItems.map(({ title, component }, index) => (
				<div key={index} className="py-3">
					{!!title && (
						<h6 className="mb-2 px-5 font-semibold text-gray-400">{title}</h6>
					)}
					{component}
				</div>
			))}
		</nav>
	);
};
