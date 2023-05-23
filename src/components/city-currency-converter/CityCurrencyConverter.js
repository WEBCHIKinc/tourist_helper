import React, { useState } from 'react';
import { exchangeRateApi } from '../../services/ExchangeRateService';

const LOADING = 'Loading...';

function getCurrencyData(currency, selectedCurrency, amount) {
  const { data, isSuccess } = exchangeRateApi.useGetCurrencyDataQuery(currency);

  return isSuccess ? {
    currencies: Object.keys(data.conversion_rates),
    result: `Result: ${(amount * data.conversion_rates[selectedCurrency]).toFixed(2)} ${currency}`
  } : {};
}

export const CityCurrencyConverter = ({ currency }) => {
  const [selectedCurrency, setSelectedCurrency] = useState('UAH');
  const [amount, setAmount] = useState(0);
  const data = getCurrencyData(currency, selectedCurrency, amount);

  function handleChangeCurrency(e) {
    setSelectedCurrency(e.target.value);
  }
  function handleChangeAmount(e) {
    setAmount(e.target.value);
  }

  return (
    <div className='city-currency-converter'>
      Convert to city currency
      <div className='city-currency-converter__box'>
        <input
          className='city-currency-converter__input text'
          value={amount}
          type="number"
          onChange={handleChangeAmount} />
        <select
          className='city-currency-converter__select text'
          value={selectedCurrency}
          onChange={handleChangeCurrency}>
          {data.currencies &&
            data.currencies.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
        </select>
      </div>
      {data.result || LOADING}
    </div>
  );
};
