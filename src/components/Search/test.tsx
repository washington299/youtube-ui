import { render, screen, fireEvent } from '@testing-library/react';

import { Search } from '.';

describe('<Search />', () => {
	it('should render Search elements correctly', () => {
		render(<Search callback={() => {}} />);

		expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
		expect(screen.getByRole('button')).toBeInTheDocument();
		expect(screen.getByTitle(/Microphone/i)).toBeInTheDocument();
	});

	it('should change input value correctly', () => {
		render(<Search callback={() => {}} />);

		const input = screen.getByPlaceholderText(/Search/i);

		expect(input).toHaveValue('');

		fireEvent.change(input, { target: { value: 'Test' } });

		expect(input).toHaveValue('Test');
	});

	it('should show clear input icon when input has some value', () => {
		render(<Search callback={() => {}} />);

		const input = screen.getByPlaceholderText(/Search/i);

		expect(screen.queryByTitle(/Clear/i)).not.toBeInTheDocument();

		fireEvent.change(input, { target: { value: 'Test' } });

		expect(screen.getByTitle(/Clear/i)).toBeInTheDocument();
	});

	it('should clear input when close icon is clicked', () => {
		render(<Search callback={() => {}} />);

		const input = screen.getByPlaceholderText(/Search/i);

		fireEvent.change(input, { target: { value: 'Test' } });
		fireEvent.click(screen.getByTitle(/Clear/i));

		expect(input).toHaveValue('');
	});

	it('should call callback function with correct value on button is click', () => {
		const mockCallback = jest.fn();

		render(<Search callback={mockCallback} />);

		fireEvent.change(screen.getByPlaceholderText(/Search/i), {
			target: { value: 'Test' },
		});
		fireEvent.click(screen.getByRole('button'));

		expect(mockCallback).toHaveBeenCalledWith('Test');
	});

	it('should call callback function with correct value when enter is clicked', () => {
		const mockCallback = jest.fn();

		render(<Search callback={mockCallback} />);

		const input = screen.getByPlaceholderText(/Search/i);

		fireEvent.change(input, { target: { value: 'Test' } });
		fireEvent.submit(input);

		expect(mockCallback).toHaveBeenCalledWith('Test');
	});
});
