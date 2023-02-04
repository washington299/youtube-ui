import { useRouter } from 'next/router';

import { SidebarItemsProps } from 'hooks/useSidebarOpenItems';

import { ListItem } from 'components/SidebarOpen/ListItem';

type ListItemsProps = {
	items: SidebarItemsProps[];
};

export const ListItems = ({ items }: ListItemsProps) => {
	const { pathname } = useRouter();

	return (
		<ul>
			{items.map(({ IconOutline, IconSolid, link, name }) => (
				<ListItem
					key={link}
					IconOutline={IconOutline}
					IconSolid={IconSolid}
					link={link}
					name={name}
					isCurrentPage={pathname === link}
				/>
			))}
		</ul>
	);
};
