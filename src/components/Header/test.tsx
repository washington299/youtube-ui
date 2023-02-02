import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '.';

global.alert = jest.fn();

describe('<Header />', () => {
	it('Should render elements correctly', () => {
		render(<Header toggleMenu={() => {}} />);

		expect(screen.getByTitle(/Youtube Logo/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Menu hamburguer/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Search/i)).toBeInTheDocument();
		expect(screen.getByTitle(/Settings/i)).toBeInTheDocument();
		expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
		expect(
			screen.getByRole('button', { name: /Sign in/i }),
		).toBeInTheDocument();
	});

	it('Should call toggleMenu function when menu hamburguer icon is clicked', () => {
		const mockToggleMenu = jest.fn();

		render(<Header toggleMenu={mockToggleMenu} />);

		expect(mockToggleMenu).not.toBeCalled();

		fireEvent.click(screen.getByTitle(/Menu hamburguer/i));

		expect(mockToggleMenu).toBeCalledTimes(1);
	});

	it('Should show correct text on alert when user search on the form', () => {
		render(<Header toggleMenu={() => {}} />);

		fireEvent.change(screen.getByPlaceholderText(/Search/i), {
			target: { value: 'Test' },
		});
		fireEvent.click(screen.getByRole('button', { name: /Search/i }));

		expect(global.alert).toHaveBeenCalledWith('Test');
	});

	it('Should show full search component when search icon is clicked', () => {
		render(<Header toggleMenu={() => {}} />);

		expect(screen.queryByLabelText(/Full search/i)).not.toBeInTheDocument();

		fireEvent.click(screen.getByTitle(/Search/i));

		expect(screen.getByLabelText(/Full search/i)).toBeInTheDocument();

		fireEvent.click(screen.getByTitle(/Arrow back/i));

		expect(screen.queryByLabelText(/Full search/i)).not.toBeInTheDocument();
	});
});
