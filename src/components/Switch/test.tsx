import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from '.';

describe('<Switch />', () => {
	it('Should render Switch with correct label', () => {
		render(<Switch label="Switch text" toggleSwitch={() => {}} />);

		expect(screen.getByText(/Switch text/i)).toBeInTheDocument();
	});

	it('Should mark checkbox as checked by default', () => {
		render(<Switch label="Switch text" checked toggleSwitch={() => {}} />);

		expect(screen.getByRole('checkbox')).toBeChecked();
	});

	it('Should toggle checkbox', () => {
		render(<Switch label="Switch text" toggleSwitch={() => {}} />);

		const inputCheckbox = screen.getByRole('checkbox');

		expect(inputCheckbox).not.toBeChecked();

		fireEvent.click(inputCheckbox);

		expect(inputCheckbox).toBeChecked();

		fireEvent.click(inputCheckbox);

		expect(inputCheckbox).not.toBeChecked();
	});

	it('Should call toggleSwitch with correct value', () => {
		const mockToggleSwitch = jest.fn();

		render(<Switch label="Switch text" toggleSwitch={mockToggleSwitch} />);

		expect(mockToggleSwitch).not.toBeCalled();

		fireEvent.click(screen.getByRole('checkbox'));

		expect(mockToggleSwitch).toBeCalledWith(true);

		fireEvent.click(screen.getByRole('checkbox'));

		expect(mockToggleSwitch).toBeCalledWith(false);
	});
});
