export const formatMoney = (amount = 0, currency = 'USD', locale = 'en-US') => {
    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    });

    return formatter.format(amount)
}