import { render, screen } from '@testing-library/react';

import { SidebarClosed } from '.';

describe('<SidebarClosed />', () => {
	it('Should render elements items list correctly', () => {
		render(<SidebarClosed currentPage="/" />);

		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		expect(screen.getAllByRole('listitem')).toHaveLength(5);
	});

	it('Should render correct icon when is current page', () => {
		render(<SidebarClosed currentPage="/" />);

		expect(
			screen.queryByLabelText(/Home icon outline/i),
		).not.toBeInTheDocument();
		expect(screen.getByLabelText(/Home icon solid/i)).toBeInTheDocument();
	});
});
