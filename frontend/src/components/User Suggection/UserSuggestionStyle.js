import styled from "styled-components";

export const UserSuggestion = styled.div`
  width: 22%;
  position: fixed;
`;
export const CurrentUser = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CurrentUserData = styled.div`
  display: flex;
  align-items: center;
  img {
    cursor: pointer;
  }
`;
export const CurrentUserName = styled.div`
  margin-left: 15px;

  & :first-child {
    cursor: pointer;
  }
`;
export const UserSwitchButton = styled.div`
  display: flex;
  align-items: center;
  color: #0095f6;
  cursor: pointer;
`;

export const OtherUserSuggestion = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  color: gray;
  font-weight: 500;
`;
export const SeeAllUser = styled.div`
  display: flex;
  align-items: center;
  color: black;
  cursor: pointer;
`;
//Harshs
