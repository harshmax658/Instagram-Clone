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
