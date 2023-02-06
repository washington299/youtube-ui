import Link from 'next/link';
import Image from 'next/image';

import { SidebarItemsProps } from 'hooks/useSidebarOpenItems';

type ListItemProps = SidebarItemsProps & {
	isCurrentPage: boolean;
};

export const ListItem = ({
	IconOutline,
	IconSolid,
	icon,
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
				{!!icon ? (
					<Image src={icon} alt={name} width={30} height={30} />
				) : (
					<>
						{isCurrentPage && IconSolid && (
							<IconSolid
								className="h-6 w-6"
								aria-label={`${name} icon solid`}
							/>
						)}
						{!isCurrentPage && IconOutline && (
							<IconOutline
								className="h-6 w-6"
								aria-label={`${name} icon outline`}
							/>
						)}
					</>
				)}
				<span className={`ml-2 ${isCurrentPage && 'font-semibold'}`}>
					{name}
				</span>
			</li>
		</Link>
	);
};
