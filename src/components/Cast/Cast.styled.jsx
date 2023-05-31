import styled from 'styled-components';

export const CastConteiner = styled.div`
  padding: 36px;
  display: flex;
  justify-content: center;
  text-align: center;
`;

export const CastList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 9px;
  padding: 0;
`;

export const CastItem = styled.li`
  padding: 8px;
  width: calc((100%-90px) / 10);
  display: flex;
  flex-wrap: wrap;
  gap: 18px;
  justify-content: space-between;
  text-align: space-between;
  font-size: 12px;
  min-height: 200px;
  font-weight: 700;
`;

export const ActorImg = styled.img`
  height: 70px;
`;

export const ActorImgWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`;

export const ActorDataWrapper = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  > h4 {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
}
  > p {
    margin: 0;
    font-size: 12px;
    font-weight: 500;
    color: #2b9901;
}
`;

export const NoCastText = styled.p``;
