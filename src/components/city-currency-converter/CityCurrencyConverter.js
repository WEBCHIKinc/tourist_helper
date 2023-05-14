import React from 'react';

export const CityCurrencyConverter = () => {
  return (
    <div className='city-currency-converter'>
      Convert to city currency
      <div className='city-currency-converter__box'>
        <input className='city-currency-converter__input' />
        <select className='city-currency-converter__select'>USD</select>
        <button className='city-currency-converter__button'>convert</button>
      </div>
      Result: 20 UAH
    </div>
  );
};
