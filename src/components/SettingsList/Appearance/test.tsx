import { fireEvent, render, screen } from '@testing-library/react';

import { Appearance } from '.';

describe('<Appearance />', () => {
	it('Should render correct items', () => {
		render(<Appearance theme="light" toggleTheme={() => {}} />);

		expect(screen.getByText(/Dark theme/i)).toBeInTheDocument();
		expect(screen.getByText(/Light theme/i)).toBeInTheDocument();
	});

	it('Should render correct selected theme based on active theme', () => {
		render(<Appearance theme="light" toggleTheme={() => {}} />);

		const darkCheckedIcon = screen.getByLabelText(/Dark theme/i);
		const lightCheckedIcon = screen.getByLabelText(/Light theme/i);

		expect(darkCheckedIcon.getAttribute('aria-hidden')).toBe('true');
		expect(lightCheckedIcon.getAttribute('aria-hidden')).toBe('false');

		fireEvent.click(screen.getByText(/Dark theme/i));

		expect(lightCheckedIcon.getAttribute('aria-hidden')).toBe('true');
		expect(darkCheckedIcon.getAttribute('aria-hidden')).toBe('false');
	});

	it('Should call toggleTheme with correct theme value when any theme is selected', () => {
		const mockToggleTheme = jest.fn();

		render(<Appearance theme="light" toggleTheme={mockToggleTheme} />);

		expect(mockToggleTheme).not.toBeCalled();

		fireEvent.click(screen.getByText(/Dark theme/i));

		expect(mockToggleTheme).toHaveBeenCalledWith('dark');

		fireEvent.click(screen.getByText(/Light theme/i));

		expect(mockToggleTheme).toHaveBeenCalledWith('light');
	});
});
