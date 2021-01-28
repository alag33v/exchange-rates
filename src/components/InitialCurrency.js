import { useSelector, useDispatch } from 'react-redux';
import { changeCurrency, favoriteCurrencies } from '../redux/exchangeReducer';
import star from '../images/star.svg';
import { StyledInitialCurrency } from '../styles/StyledInitialCurrency';
import { StyledLoading } from '../styles/StyledLoading';

const InitialCurrency = () => {
  const countries = useSelector(state => state.exchange.countries);
  const base = useSelector(state => state.exchange.base);
  const favorite = useSelector(state => state.exchange.favorite);
  const loading = useSelector(state => state.exchange.loading);
  const dispatch = useDispatch();

  const chooseCountry = country => {
    dispatch(changeCurrency(country));
  };

  const addToFavorite = country => {
    dispatch(favoriteCurrencies(country));
  };

  if (loading) return <StyledLoading />;

  return (
    <StyledInitialCurrency>
      <div className='favorites'>
        <img className='favorites__image' src={star} alt='star' />
        <h3>Избранное:</h3>
        <ul>
          {favorite.map((item, index) => (
            <li className='favorites__item' key={index}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <h2>Текущие курсы валют</h2>
      <ul className='country'>
        {countries.map((country, index) => (
          <li className={base === country ? 'active' : ''} key={index}>
            <span>{country}</span>
            <button onClick={() => chooseCountry(country)} key={index}>
              Выбрать
            </button>
            <img src={star} alt='star' onClick={() => addToFavorite(country)} />
          </li>
        ))}
      </ul>
    </StyledInitialCurrency>
  );
};

export default InitialCurrency;
