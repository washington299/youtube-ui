import { fireEvent, render, screen } from '@testing-library/react';

import { Appearance } from '.';

describe('<Appearance />', () => {
	it('Should render correct items', () => {
		render(<Appearance toggleTheme={() => {}} />);

		expect(screen.getByText(/Dark theme/i)).toBeInTheDocument();
		expect(screen.getByText(/Light theme/i)).toBeInTheDocument();
	});

	it('Should call toggleTheme with correct theme value when any theme is selected', () => {
		const mockToggleTheme = jest.fn();

		render(<Appearance toggleTheme={mockToggleTheme} />);

		expect(mockToggleTheme).not.toBeCalled();

		fireEvent.click(screen.getByText(/Dark theme/i));

		expect(mockToggleTheme).toHaveBeenCalledWith('dark');
	});
});
