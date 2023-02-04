import { SidebarItemsProps } from 'hooks/useSidebarOpenItems';

import { ListItem } from 'components/SidebarOpen/ListItem';

type ListItemsProps = {
	items: SidebarItemsProps[];
};

export const ListItems = ({ items }: ListItemsProps) => {
	const currentPage = '/';

	return (
		<ul>
			{items.map(({ IconOutline, IconSolid, link, name }) => (
				<ListItem
					key={link}
					IconOutline={IconOutline}
					IconSolid={IconSolid}
					link={link}
					name={name}
					isCurrentPage={currentPage === link}
				/>
			))}
		</ul>
	);
};
