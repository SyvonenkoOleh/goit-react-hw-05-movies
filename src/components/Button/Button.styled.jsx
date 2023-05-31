import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0px 12px 8px 4px #cab1b14d;
  margin: 0 0 20px 0;


  border: ${props =>
    props.status === 'search'
      ? 'none'
      : props.status === 'load'
      ? '1px solid rgba(0, 128, 75, 0.7)'
      : 'grey'};

  background-color: ${props =>
    props.status === 'search'
      ? 'rgba(0, 128, 75, 0.7)'
      : props.status === 'load'
      ? 'transparent'
      : 'grey'};

  color: ${props =>
    props.status === 'search'
      ? 'hsla(0, 0%, 100%, 1)'
      : props.status === 'load'
      ? 'black'
      : 'grey'};

  &:hover,
  &:focus {
    color: white;
    background-color: rgba(0, 128, 75, 0.7);
  }

  & > svg {
    margin-right: 8px;
  }
`;
