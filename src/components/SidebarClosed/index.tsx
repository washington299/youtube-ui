import Link from 'next/link';

import { sidebarClosedItems } from './sidebarClosedItems';

export const SidebarClosed = () => {
	return (
		<nav>
			<ul>
				{sidebarClosedItems.map(({ icon, title, link }) => (
					<Link key={title} href={link}>
						<li>
							{icon}
							{title}
						</li>
					</Link>
				))}
			</ul>
		</nav>
	);
};
