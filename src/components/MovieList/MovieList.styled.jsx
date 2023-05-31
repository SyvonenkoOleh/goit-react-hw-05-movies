import styled from 'styled-components';

export const MovieListContainer = styled.ul`
margin-top: 30px;
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(4, 1fr);
grid-column-gap: 15px;
grid-row-gap: 15px;
color: var(--global-black-color);
`;

export const MovieListItem = styled.li`
position: relative;
display: flex;
flex-direction: column;
justify-content: space-around;

  img {
    border-radius: 12px;
    height: 100%;
    width: 100%;
  }
  span {
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba(228, 222, 30, 0.8);
    padding: 6px 10px;
    border-radius: 12px;
    margin: 5px 5px 0 0;
  }
`;

export const MovieName = styled.p`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 500;
  padding: 12px 12px 0 12px;
  height: 100%;
  margin: 0;
`;
