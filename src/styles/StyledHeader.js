import styled from 'styled-components';

export const StyledHeader = styled.header`
  h1 {
    font-size: 36px;
    text-align: center;
  }

  ul {
    display: flex;
    justify-content: space-around;
    padding: 0;
  }

  li {
    list-style: none;
  }

  a {
    font-size: 20px;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    color: #000;
    padding: 20px 30px;
    margin: 10px 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    letter-spacing: 2px;

    background-size: 200% auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    transition: 0.5s;

    &:hover {
      color: #fff;
      background-color: #4830f0;
    }

    &:active {
      background-color: #2e10f0;
    }
  }

  .active {
    color: #fff;
    background-color: #4830f0;
  }
`;
