import Link from 'next/link';

import { sidebarClosedItems } from './sidebarClosedItems';

export type SidebarProps = {
	currentPage: string;
};

export const SidebarClosed = ({ currentPage }: SidebarProps) => {
	return (
		<nav className="h-screen w-20 bg-white">
			<ul className="py-2">
				{sidebarClosedItems.map(({ iconOutline, iconSolid, title, link }) => {
					const isCurrentPage = currentPage === link;

					return (
						<Link key={title} href={link}>
							<li
								className={`flex flex-col items-center py-3 hover:bg-gray-100 ${
									isCurrentPage && 'bg-gray-100'
								}`}
							>
								{isCurrentPage ? iconSolid : iconOutline}
								<span className={`text-[10px] ${isCurrentPage && 'font-bold'}`}>
									{title}
								</span>
							</li>
						</Link>
					);
				})}
			</ul>
		</nav>
	);
};
