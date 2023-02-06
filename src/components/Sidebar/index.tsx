import { useRouter } from 'next/router';

import { Open } from './Open';
import { Closed } from './Closed';

type SidebarProps = {
	isOpen: boolean;
};

export type SidebarChildProps = {
	currentPage: string;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
	const { pathname } = useRouter();

	return (
		<>
			{isOpen ? (
				<Open currentPage={pathname} />
			) : (
				<Closed currentPage={pathname} />
			)}
		</>
	);
};
