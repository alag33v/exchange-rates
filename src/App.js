import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { fetchCurrencies } from './redux/exchangeReducer';
import Header from './components/Header';
import InitialCurrency from './components/InitialCurrency';
import Calculator from './components/Calculator';
import { GlobalStyle } from './styles/GlobalStyle';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrencies());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path='/' component={InitialCurrency} />
        <Route exact path='/calculator' component={Calculator} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
