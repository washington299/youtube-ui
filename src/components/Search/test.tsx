import { render, screen } from '@testing-library/react';

import { Search } from '.';

describe('<Search />', () => {
	it('should render Search elements correctly', () => {
		render(<Search />);

		expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByTitle(/Microphone/i)).toBeInTheDocument();
	});
});
