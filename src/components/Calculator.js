import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledCalculator } from '../styles/StyledCalculator';
import { StyledLoading } from '../styles/StyledLoading';

const Calculator = () => {
  const [result, setResult] = useState(0);
  const rates = useSelector(state => state.exchange.rates);
  const countries = useSelector(state => state.exchange.countries);
  const date = useSelector(state => state.exchange.date);
  const base = useSelector(state => state.exchange.base);
  const loading = useSelector(state => state.exchange.loading);

  const calculateRate = e => {
    e.preventDefault();
    const countCurrency = e.target.elements['count-currency'].value;
    const typeCurrency = e.target.elements['type-currency'].value;
    const toCurrency = countCurrency * rates[base];
    const fromCurrency = 1 * rates[typeCurrency];
    setResult(toCurrency / fromCurrency);
  };

  if (loading) return <StyledLoading />;

  return (
    <StyledCalculator>
      <h2>Калькулятор обмена на {date}</h2>
      <div className='base-currency'>
        Я хочу обменять валюту <span>{base}</span>
      </div>
      <div className='get'>Я хочу получить</div>
      <form onSubmit={calculateRate}>
        <div className='currency-selection'>
          <input type='number' name='count-currency' min='0' step='any' />
          <select name='type-currency'>
            {countries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
        </div>
        <button type='submit'>Вычислить</button>
      </form>
      <h4>
        Необходимо оплатить {result.toFixed(2)} {base}
      </h4>
    </StyledCalculator>
  );
};

export default Calculator;
