import { fireEvent, render, screen } from '@testing-library/react';

import { Location } from '.';

describe('<Location />', () => {
	it('Should render locations list correctly', () => {
		render(<Location location="brazil" />);

		expect(screen.getAllByRole('listitem')).toHaveLength(27);
	});

	it('Should render CheckIcon on default language and toggle between languages', () => {
		render(<Location location="brazil" />);

		expect(screen.getByLabelText(/brazil/i).getAttribute('aria-hidden')).toBe(
			'false',
		);
		expect(screen.getByLabelText(/portugal/i).getAttribute('aria-hidden')).toBe(
			'true',
		);

		fireEvent.click(screen.getByText('Portugal'));

		expect(screen.getByLabelText(/brazil/i).getAttribute('aria-hidden')).toBe(
			'true',
		);
		expect(screen.getByLabelText(/portugal/i).getAttribute('aria-hidden')).toBe(
			'false',
		);
	});
});
