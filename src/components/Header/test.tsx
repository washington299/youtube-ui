import { render, screen } from '@testing-library/react';

import { Header } from '.';

describe('<Header />', () => {
	it('Should render elements correctly', () => {
		render(<Header />);

		expect(screen.getByTitle(/Youtube Logo/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Menu hamburguer/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Search/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Settings/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});
});
