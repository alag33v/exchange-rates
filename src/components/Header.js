import { Link } from 'react-router-dom';
import { StyledHeader } from '../styles/StyledHeader';

const Header = () => {
  return (
    <StyledHeader>
      <h1>React Lite Level</h1>
      <ul>
        <Link to='/'>
          <li>Текущие курсы валют</li>
        </Link>
        <Link to='/calculator'>
          <li>Конвертирования валют</li>
        </Link>
      </ul>
    </StyledHeader>
  );
};

export default Header;
