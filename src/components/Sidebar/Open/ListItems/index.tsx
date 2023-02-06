import { SidebarItemsProps } from 'hooks/useSidebarOpenItems';

import { ListItem } from 'components/Sidebar/Open/ListItem';

type ListItemsProps = {
	items: SidebarItemsProps[];
	currentPage: string;
};

export const ListItems = ({ items, currentPage }: ListItemsProps) => {
	return (
		<ul>
			{items.map(({ IconOutline, IconSolid, icon, link, name }) => (
				<ListItem
					key={link}
					IconOutline={IconOutline}
					IconSolid={IconSolid}
					icon={icon}
					link={link}
					name={name}
					isCurrentPage={currentPage === link}
				/>
			))}
		</ul>
	);
};
