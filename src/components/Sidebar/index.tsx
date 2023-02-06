import { SidebarOpen } from 'components/SidebarOpen';
import { SidebarClosed } from 'components/SidebarClosed';

type SidebarProps = {
	isOpen: boolean;
};

export const Sidebar = ({ isOpen }: SidebarProps) => {
	const currentPage = '/';

	return (
		<>
			{isOpen ? (
				<SidebarOpen currentPage={currentPage} />
			) : (
				<SidebarClosed currentPage={currentPage} />
			)}
		</>
	);
};
