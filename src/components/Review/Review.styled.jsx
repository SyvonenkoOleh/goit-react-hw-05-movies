import styled from 'styled-components';

export const ReviewsList = styled.ul`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  padding: 36px;
`;

export const ReviewItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  gap: 36px;
`;
export const Author = styled.p`
  color: #3939d7;
  font-weight: 600;
  font-size: 18px;
  font-style: italic;
  /* display: flex;
  width: max-content; */
`;

export const Content = styled.p`
  font-size: 16px;
  text-indent: 5%;
  text-align: justify;
`;

export const NoReviewsText = styled.p`
  margin-top: 24px;
  margin-bottom: 24px;
  text-align: center;
`;
