import { NavLink } from 'react-router-dom';
import { StyledHeader } from '../styles/StyledHeader';

const Header = () => (
  <StyledHeader>
    <h1>Exchange Rates</h1>
    <ul>
      <NavLink to='/exchange-rates'>
        <li>Текущие курсы валют</li>
      </NavLink>
      <NavLink to='/calculator'>
        <li>Конвертирования валют</li>
      </NavLink>
    </ul>
  </StyledHeader>
);

export default Header;
