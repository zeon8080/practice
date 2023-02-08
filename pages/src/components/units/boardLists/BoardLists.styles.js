import styled from "@emotion/styled";

// export const ListsContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// `;

export const ListsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #ffffff;
  width: 764px;
  height: 50px;
  border-radius: 10px;
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.05));
  margin-bottom: 16px;
  align-items: center;
  padding-left: 30px;
  padding-right: 32px;
`;

export const TitleSpan = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #333333;
`;

export const DateSpan = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #999999;
`;
