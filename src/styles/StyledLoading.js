import styled from 'styled-components';

export const StyledLoading = styled.div`
  border: 5px solid #ccc;
  border-top: 5px solid #4830f0;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  margin: 20px auto;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
