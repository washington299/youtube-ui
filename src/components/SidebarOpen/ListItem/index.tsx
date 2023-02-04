import Link from 'next/link';

import { SidebarItemsProps } from 'hooks/useSidebarOpenItems';

type ListItemProps = SidebarItemsProps & {
	isCurrentPage: boolean;
};

export const ListItem = ({
	IconOutline,
	IconSolid,
	link,
	name,
	isCurrentPage,
}: ListItemProps) => {
	return (
		<Link key={link} href={link}>
			<li
				className={`flex items-center py-2 px-5 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-600 ${
					isCurrentPage && 'bg-gray-100 dark:bg-neutral-600'
				}`}
			>
				{isCurrentPage ? (
					<IconSolid className="h-6 w-6" aria-label={`${name} icon solid`} />
				) : (
					<IconOutline
						className="h-6 w-6"
						aria-label={`${name} icon outline`}
					/>
				)}
				<span className={`ml-2 ${isCurrentPage && 'font-semibold'}`}>
					{name}
				</span>
			</li>
		</Link>
	);
};
