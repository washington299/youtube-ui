import { render, screen } from '@testing-library/react';

import { Open } from '.';

describe('<Open />', () => {
	it('Should render elements items list correctly', () => {
		render(<Open currentPage="/" />);

		expect(screen.getAllByRole('listitem')).toHaveLength(22);
		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});
});
