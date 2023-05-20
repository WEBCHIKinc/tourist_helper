import React from 'react';

export const CityCurrencyConverter = () => {
  return (
    <div className='city-currency-converter'>
      Convert to city currency
      <div className='city-currency-converter__box'>
        <input className='city-currency-converter__input text' />
        <select className='city-currency-converter__select text'>USD</select>
        <button className='city-currency-converter__button text'>convert</button>
      </div>
      Result: 20 UAH
    </div>
  );
};
