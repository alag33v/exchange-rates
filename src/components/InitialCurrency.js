import { useSelector, useDispatch } from 'react-redux';
import { changeCurrency, favoriteCurrencies } from '../redux/exchangeReducer';
import { StyledInitialCurrency } from '../styles/StyledInitialCurrency';

const InitialCurrency = () => {
  const date = useSelector(state => state.exchange.date);
  const countries = useSelector(state => state.exchange.countries);
  const base = useSelector(state => state.exchange.base);
  const favorite = useSelector(state => state.exchange.favorite);
  const dispatch = useDispatch();

  const chooseCountry = country => {
    dispatch(changeCurrency(country));
  };

  const addToFavorite = country => {
    dispatch(favoriteCurrencies(country));
  };

  return (
    <StyledInitialCurrency>
      <h3>Избранное</h3>
      <ul>
        {favorite.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h1>Текущие курсы валют на {date}</h1>
      <ul>
        {countries.map((country, index) => (
          <li className={base === country ? 'active' : ''} key={index}>
            <span>{country}</span>
            <button onClick={() => chooseCountry(country)} key={index}>
              Выбрать {index}
            </button>
            <button onClick={() => addToFavorite(country)}>
              Добавить в избранное
            </button>
          </li>
        ))}
      </ul>
    </StyledInitialCurrency>
  );
};

export default InitialCurrency;
