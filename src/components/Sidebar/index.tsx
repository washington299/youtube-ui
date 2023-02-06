import { useRouter } from 'next/router';

import { SidebarOpen } from 'components/SidebarOpen';
import { SidebarClosed } from 'components/SidebarClosed';

type SidebarProps = {
	isOpen: boolean;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
	const { pathname } = useRouter();

	return (
		<>
			{isOpen ? (
				<SidebarOpen currentPage={pathname} />
			) : (
				<SidebarClosed currentPage={pathname} />
			)}
		</>
	);
};
