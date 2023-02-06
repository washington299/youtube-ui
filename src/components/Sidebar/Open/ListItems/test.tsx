import { render, screen } from '@testing-library/react';

import { ListItems } from '.';
import { mockItems } from './mock';

describe('<ListItems />', () => {
	it('Should render elements list of items correctly', () => {
		render(<ListItems items={mockItems} currentPage="/" />);

		expect(screen.getAllByRole('listitem')).toHaveLength(2);
		expect(screen.getByText(/Home/i)).toBeInTheDocument();
		expect(screen.getByText(/Shorts/i)).toBeInTheDocument();
	});

	it('Should render correct current icon based on pathname', () => {
		render(<ListItems items={mockItems} currentPage="/shorts" />);

		expect(screen.getByLabelText(/Shorts icon solid/i)).toBeInTheDocument();
	});
});
