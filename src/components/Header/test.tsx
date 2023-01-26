import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
	it('Should render elements correctly', () => {
		render(<Header />);

		expect(screen.getByText(/Header/i)).toBeInTheDocument();
	});
});
