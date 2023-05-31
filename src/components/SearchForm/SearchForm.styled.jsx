import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: stretch;
  justify-content: center;
  position: relative;
  margin-bottom: 30px;
  text-transform: uppercase;
`;

export const Input = styled.input`
  padding: 12px 16px;
  margin-right: 36px;
  border-radius: 12px;
  border: 1px solid black;
  width: 30vw;
  border: 1px solid rgba(0, 128, 75, 0.7);
  box-shadow: 0px 12px 8px 4px #cab1b14d;

  &:focus,
  &:hover {
    box-shadow: 0px 12px 8px 4px #0b78474d;
  }
`;
