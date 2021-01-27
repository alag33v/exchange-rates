import styled from 'styled-components';

export const StyledInitialCurrency = styled.div`
  .favorites {
    display: flex;
    align-items: center;
    margin: 25px 0;

    h3 {
      font-size: 20px;
      margin: 0 10px;
    }

    &__image {
      width: 18px;
      display: inline-block;
    }

    ul {
      display: flex;
      flex-wrap: wrap;
      padding: 0;
    }

    &__item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;

      width: 80px;
      margin: 5px;
      padding: 5px;
      border: 1px solid #ccc;
      border-radius: 5px;
    }
  }

  h2 {
    font-size: 28px;
    text-align: center;
  }

  .country {
    display: flex;
    flex-wrap: wrap;
    padding: 0;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 20px;
      font-weight: 700;
      list-style: none;
      width: 180px;
      padding: 15px;
      margin: 10px 15px;
      border: 1px solid #ccc;
      border-radius: 10px;
      position: relative;
    }

    span {
      display: block;
      margin: 5px 0;
    }

    button {
      font-size: 16px;
      text-decoration: none;
      color: #000;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 8px;
      padding: 10px 30px;
      margin: 10px 20px;
      position: relative;
      overflow: hidden;
      transition: 0.2s ease-in-out;
      cursor: pointer;
      outline: none;

      &::before {
        content: '';
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0.1),
          rgba(255, 255, 255, 0.5)
        );
        height: 50px;
        width: 50px;
        position: absolute;
        top: -8px;
        left: -75px;
        transform: skewX(-45deg);
      }

      &:hover {
        color: #fff;
        background: #4830f0;
      }

      &:hover:before {
        left: 150px;
        transition: 0.5s ease-in-out;
      }
    }

    img {
      width: 20px;
      display: inline-block;
      top: 10px;
      right: 10px;
      position: absolute;
      cursor: pointer;
    }

    .active {
      background-color: #00fa9a;

      button {
        color: #fff;
        background: #4830f0;
        border: 1px solid #000;
      }
    }
  }
`;
