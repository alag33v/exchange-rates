import styled from 'styled-components';

export const StyledCalculator = styled.header`
  h2 {
    font-size: 28px;
    text-align: center;
    margin-top: 50px;

    @media (max-width: 900px) {
      font-size: 26px;
    }
  }

  .base-currency,
  .get {
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    list-style: none;
    width: 400px;
    max-width: 100%;
    padding: 15px 20px;
    margin: 15px auto;
    border: 1px solid #ccc;
    border-radius: 10px;

    span {
      font-weight: 700;
    }

    @media (max-width: 900px) {
      font-size: 16px;
    }
  }

  form {
    text-align: center;
  }

  .currency-selection {
    display: flex;
    justify-content: center;

    @media (max-width: 400px) {
      flex-direction: column-reverse;
      align-items: center;
    }

    input {
      font-size: 20px;
      text-align: center;
      display: block;
      width: 240px;
      max-width: 100%;
      border: 1px solid #ccc;
      padding: 10px 20px;

      @media (max-width: 900px) {
        font-size: 16px;
        width: 240px;
      }
    }

    select {
      width: 60px;
      max-width: 100%;
      border: 1px solid #ccc;
      border-left: none;

      @media (max-width: 400px) {
        width: 240px;
        height: 40px;
        border-left: 1px solid #ccc;
        border-bottom: none;
      }
    }
  }

  button {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    color: #000;
    display: inline-block;
    width: 300px;
    max-width: 100%;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 10px 30px;
    margin: 15px 20px;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    outline: none;

    &:hover {
      color: #fff;
      background: #4830f0;
    }

    &:active {
      background-color: #2e10f0;
    }

    @media (max-width: 900px) {
      width: 240px;
    }
  }

  h4 {
    font-size: 20px;
    text-align: center;
  }
`;
