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
			<li>
				{isCurrentPage ? (
					<IconSolid className="h-6 w-6" aria-label={`${name} icon solid`} />
				) : (
					<IconOutline
						className="h-6 w-6"
						aria-label={`${name} icon outline`}
					/>
				)}
				{name}
			</li>
		</Link>
	);
};
