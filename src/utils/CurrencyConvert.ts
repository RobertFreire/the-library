export function convertCentsToCurrency(amount: number) {
	const currencyCode = 'BRL';

	const currencySymbol = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: currencyCode,
		currencyDisplay: 'symbol',
	});

	return currencySymbol.format(amount / 100);
}
