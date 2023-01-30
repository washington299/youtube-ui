import { fireEvent, render, screen } from '@testing-library/react';

import { SettingsList } from '.';

describe('<SettingsList />', () => {
	it('Should render correct items', () => {
		render(<SettingsList />);

		expect(screen.getAllByRole('list')).toHaveLength(4);
		expect(screen.getAllByRole('listitem')).toHaveLength(9);
		expect(screen.getByText(/Your data in Youtube/i)).toBeInTheDocument();
	});

	it('Should render correct children element based on item click', () => {
		render(<SettingsList />);

		fireEvent.click(screen.getByText(/Appearance/i));

		expect(screen.getByText(/Dark theme/i)).toBeInTheDocument();
		expect(screen.getByText(/Light theme/i)).toBeInTheDocument();

		fireEvent.click(screen.getByLabelText(/Arrow back/i));

		expect(screen.getAllByRole('list')).toHaveLength(4);
		expect(screen.getAllByRole('listitem')).toHaveLength(9);
	});
});
