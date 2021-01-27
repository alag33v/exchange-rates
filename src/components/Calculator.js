import { useState } from 'react';
import { useSelector } from 'react-redux';
import { StyledCalculator } from '../styles/StyledCalculator';

const Calculator = () => {
  const [result, setResult] = useState(0);

  const date = useSelector(state => state.exchange.date);
  const rates = useSelector(state => state.exchange.rates);
  const countries = useSelector(state => state.exchange.countries);
  const base = useSelector(state => state.exchange.base);

  const calculateRate = e => {
    e.preventDefault();
    const countCurrency = e.target.elements['count-currency'].value;
    const typeCurrency = e.target.elements['type-currency'].value;
    const toCurrency = countCurrency * rates[base];
    const fromCurrency = 1 * rates[typeCurrency];
    setResult(toCurrency / fromCurrency);
  };

  return (
    <StyledCalculator>
      <h3>Калькулятор обмена на {date}</h3>
      <div className='active'>Я хочу обменять {base}</div>
      <div>Я хочу</div>
      <div className='block'>
        <form onSubmit={calculateRate}>
          <input type='number' name='count-currency' min='0' step='any' />
          <select name='type-currency'>
            {countries.map((country, index) => (
              <option value={country} key={index}>
                {country}
              </option>
            ))}
          </select>
          <button type='submit'>Calculate</button>
        </form>
        <div>
          <h4>Мне необходимо {result.toFixed(2)}</h4>
          <p></p>
        </div>
      </div>
    </StyledCalculator>
  );
};

export default Calculator;
