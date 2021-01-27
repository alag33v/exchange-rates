import styled from 'styled-components';

export const StyledInitialCurrency = styled.div`
  text-align: center;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
  }

  li {
    list-style: none;
    width: 150px;
    padding: 15px;
    margin: 10px 15px;
    border: 1px dashed #000;
  }

  span {
    display: block;
    margin-bottom: 5px;
  }

  .active {
    background-color: lightgreen;
  }
`;
