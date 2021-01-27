// Actions
const GET_RATES = 'exchange/GET_RATES';
const GET_COUNTRIES = 'exchange/GET_COUNTRIES';
const GET_DATE = 'exchange/GET_DATE';
const CHANGE_CURRENCY = 'exchange/CHANGE_CURRENCY';
const FAVORITE_CURRENCIES = 'exchange/FAVORITE_CURRENCIES';

// Reducer
const initialState = {
  rates: {},
  countries: [],
  base: 'CAD',
  date: '',
  favorite: []
};

export const exchangeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RATES:
      return { ...state, rates: action.payload };
    case GET_COUNTRIES:
      return { ...state, countries: [...action.payload] };
    case GET_DATE:
      return { ...state, date: action.payload };
    case CHANGE_CURRENCY:
      return { ...state, base: action.payload };
    case FAVORITE_CURRENCIES:
      return { ...state, favorite: [...state.favorite, action.payload] };
    default:
      return state;
  }
};

// Action Creators
const getRates = rates => ({
  type: GET_RATES,
  payload: rates
});

const getCountries = countries => ({
  type: GET_COUNTRIES,
  payload: countries
});

const getDate = date => ({
  type: GET_DATE,
  payload: date
});

export const changeCurrency = country => ({
  type: CHANGE_CURRENCY,
  payload: country
});

export const favoriteCurrencies = country => ({
  type: FAVORITE_CURRENCIES,
  payload: country
});

// Thunk Creators
export const fetchCurrencies = () => async dispatch => {
  const response = await fetch('https://api.exchangeratesapi.io/latest');
  const data = await response.json();
  dispatch(getRates(data.rates));
  dispatch(getCountries(Object.keys(data.rates)));
  dispatch(getDate(data.date));
};
