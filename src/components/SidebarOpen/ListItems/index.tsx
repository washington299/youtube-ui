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
			{items.map(({ IconOutline, IconSolid, icon, link, name }) => (
				<ListItem
					key={link}
					IconOutline={IconOutline}
					IconSolid={IconSolid}
					icon={icon}
					link={link}
					name={name}
					isCurrentPage={pathname === link}
				/>
			))}
		</ul>
	);
};
