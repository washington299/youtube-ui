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

	it('should show clear input icon when input has some value', () => {
		render(<Search />);

		const input = screen.getByPlaceholderText(/Search/i);

		expect(screen.queryByTitle(/Clear/i)).not.toBeInTheDocument();

		fireEvent.change(input, { target: { value: 'Test' } });

		expect(screen.getByTitle(/Clear/i)).toBeInTheDocument();
	});

	it('should clear input when close icon is clicked', () => {
		render(<Search />);

		const input = screen.getByPlaceholderText(/Search/i);

		fireEvent.change(input, { target: { value: 'Test' } });
		fireEvent.click(screen.getByTitle(/Clear/i));

		expect(input).toHaveValue('');
	});
});
