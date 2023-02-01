import { fireEvent, render, screen } from '@testing-library/react';

import { Switch } from '.';

describe('<Switch />', () => {
	it('Should render Switch with correct label', () => {
		render(<Switch label="Switch text" />);

		expect(screen.getByText(/Switch text/i)).toBeInTheDocument();
	});
});
