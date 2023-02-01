import { fireEvent, render, screen } from '@testing-library/react';

import { RestrictedMode } from '.';

describe('<RestrictedMode />', () => {
	it('Should renders correctly texts and elements', () => {
		render(<RestrictedMode />);

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
});
