import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '.';

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
});
