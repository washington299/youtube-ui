import Link from 'next/link';

import { sidebarClosedItems } from './sidebarClosedItems';

export const SidebarClosed = () => {
	return (
		<nav className="h-screen w-20 bg-white">
			<ul className="py-2">
				{sidebarClosedItems.map(({ icon, title, link }) => (
					<Link key={title} href={link}>
						<li className="flex flex-col items-center py-3 hover:bg-gray-100">
							{icon}
							<span className="text-[10px]">{title}</span>
						</li>
					</Link>
				))}
			</ul>
		</nav>
	);
};
