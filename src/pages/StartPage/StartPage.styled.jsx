import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 20px 60px;
  margin-bottom: 36px;
  background-color: rgb(0, 200, 100, 0.5);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
  > nav {
    max-height: 40px;
    display: flex;
    gap: 24px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 12px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  transform: scale(1);
  box-shadow: none;

  &:hover,
  &:focus {
    border: 1px solid rgba(0, 128, 75, 0.7);
    box-shadow: 0px 12px 8px 4px #0b78474d;
  }

  &.active {
    color: white;
    background-color: rgba(0, 128, 75, 0.7);

    &:hover,
    &:focus {
      border: none;
      color: inherit;
    }
  }
`;
