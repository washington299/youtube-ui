import { fireEvent, screen } from '@testing-library/react';

import { renderWithTailwind } from 'utils/tests/helpers';

import { Language } from '.';

describe('<Language />', () => {
	it('Should render languages list correctly', () => {
		renderWithTailwind(
			<Language language="english_us" changeLanguage={() => {}} />,
		);

		expect(screen.getAllByRole('listitem')).toHaveLength(23);
	});

	it('Should render CheckIcon on default language and toggle between languages', () => {
		renderWithTailwind(
			<Language language="english_us" changeLanguage={() => {}} />,
		);

		expect(screen.getByLabelText(/english_us/i)).toBeVisible();
		expect(screen.getByLabelText(/portugues_brasil/i)).not.toBeVisible();

		fireEvent.click(screen.getByText('Português (Brasil)'));

		expect(screen.getByLabelText(/english_us/i)).not.toBeVisible();
		expect(screen.getByLabelText(/portugues_brasil/i)).toBeVisible();
	});

	it('Should call changeLanguage function with correct language', () => {
		const mockChangeLanguage = jest.fn();

		renderWithTailwind(
			<Language language="english_us" changeLanguage={mockChangeLanguage} />,
		);

		expect(mockChangeLanguage).not.toBeCalled();

		fireEvent.click(screen.getByText('Português (Brasil)'));

		expect(mockChangeLanguage).toBeCalledWith('portugues_brasil');
	});
});
