import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from '.';

describe('<Switch />', () => {
	it('Should render Switch with correct label', () => {
		render(<Switch label="Switch text" />);

		expect(screen.getByText(/Switch text/i)).toBeInTheDocument();
	});

	it('Should mark checkbox as checked by default', () => {
		render(<Switch label="Switch text" checked />);

		expect(screen.getByRole('checkbox')).toBeChecked();
	});

	it('Should toggle checkbox', () => {
		render(<Switch label="Switch text" />);

		const inputCheckbox = screen.getByRole('checkbox');

		expect(inputCheckbox).not.toBeChecked();

		fireEvent.click(inputCheckbox);

		expect(inputCheckbox).toBeChecked();

		fireEvent.click(inputCheckbox);

		expect(inputCheckbox).not.toBeChecked();
	});
});
