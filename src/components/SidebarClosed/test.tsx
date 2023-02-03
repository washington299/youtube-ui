import { render, screen, fireEvent } from '@testing-library/react';

import { SidebarClosed } from '.';

describe('<SidebarClosed />', () => {
	it('Should render elements items list correctly', () => {
		render(<SidebarClosed />);

		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		expect(screen.getAllByRole('listitem')).toHaveLength(5);
	});
});
