import { fireEvent, render, screen } from '@testing-library/react';

import { Language } from '.';

describe('<Language />', () => {
	it('Should render languages list correctly', () => {
		render(<Language language="english_us" changeLanguage={() => {}} />);

		expect(screen.getAllByRole('listitem')).toHaveLength(23);
	});

	it('Should render CheckIcon on default language and toggle between languages', () => {
		render(<Language language="english_us" changeLanguage={() => {}} />);

		expect(
			screen.getByLabelText(/english_us/i).getAttribute('aria-hidden'),
		).toBe('false');
		expect(
			screen.getByLabelText(/portugues_brasil/i).getAttribute('aria-hidden'),
		).toBe('true');

		fireEvent.click(screen.getByText('Português (Brasil)'));

		expect(
			screen.getByLabelText(/english_us/i).getAttribute('aria-hidden'),
		).toBe('true');
		expect(
			screen.getByLabelText(/portugues_brasil/i).getAttribute('aria-hidden'),
		).toBe('false');
	});

	it('Should call changeLanguage function with correct language', () => {
		const mockChangeLanguage = jest.fn();

		render(
			<Language language="english_us" changeLanguage={mockChangeLanguage} />,
		);

		expect(mockChangeLanguage).not.toBeCalled();

		fireEvent.click(screen.getByText('Português (Brasil)'));

		expect(mockChangeLanguage).toBeCalledWith('portugues_brasil');
	});
});
