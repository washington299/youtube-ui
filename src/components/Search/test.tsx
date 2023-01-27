import { render, screen, fireEvent } from '@testing-library/react';

import { Search } from '.';

describe('<Search />', () => {
	it('should render Search elements correctly', () => {
		render(<Search />);

		expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByTitle(/Microphone/i)).toBeInTheDocument();
	});

	it('should change input value correctly', () => {
		render(<Search />);

		const input = screen.getByPlaceholderText(/Search/i);

		expect(input).toHaveValue('');

		fireEvent.change(input, { target: { value: 'Test' } });

		expect(input).toHaveValue('Test');
	});
});
