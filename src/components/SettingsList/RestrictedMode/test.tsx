import { fireEvent, render, screen } from '@testing-library/react';

import { RestrictedMode } from '.';

describe('<RestrictedMode />', () => {
	it('Should renders correctly texts and elements', () => {
		render(<RestrictedMode toggleSwitch={() => {}} />);

		expect(
			screen.getByText(
				/This helps hide potentially mature videos. No filter is 100% accurate./i,
			),
		).toBeInTheDocument();
		expect(
			screen.getByText(/This setting only applies to this browser./i),
		).toBeInTheDocument();
		expect(screen.getByRole('checkbox')).toBeInTheDocument();
	});

	it('Should mark switch checked when checked prop is true', () => {
		render(<RestrictedMode checked toggleSwitch={() => {}} />);

		expect(screen.getByRole('checkbox')).toBeChecked();
	});

	it('Should call toggleSwitch function with correct value', () => {
		const mockToggleSwitch = jest.fn();

		render(<RestrictedMode toggleSwitch={mockToggleSwitch} />);

		expect(mockToggleSwitch).not.toBeCalled();

		fireEvent.click(screen.getByRole('checkbox'));

		expect(mockToggleSwitch).toHaveBeenCalledWith('on');

		fireEvent.click(screen.getByRole('checkbox'));

		expect(mockToggleSwitch).toHaveBeenCalledWith('off');
	});
});
