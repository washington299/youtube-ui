import { render, screen } from '@testing-library/react';

import { SignInSection } from '.';

describe('<SignInSection />', () => {
	it('Should render elements correctly', () => {
		render(<SignInSection />);

		expect(
			screen.getByText(/Sign in to like videos, comment, and subscribe./i),
		).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});
});
