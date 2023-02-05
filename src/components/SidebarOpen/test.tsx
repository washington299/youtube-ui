import { render, screen } from '@testing-library/react';

import { SidebarOpen } from '.';

describe('<SidebarOpen />', () => {
	it('Should render elements items list correctly', () => {
		render(<SidebarOpen currentPage="/" />);

		expect(screen.getAllByRole('listitem')).toHaveLength(22);
		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});
});
