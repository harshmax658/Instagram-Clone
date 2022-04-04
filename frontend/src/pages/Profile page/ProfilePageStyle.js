import styled from "styled-components";
import CustomButtonComponent from "../../components/custom button/CustomButtonComponent";

export const UserProfilePage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const UserProfile = styled.div`
  border: 2px solid;
  height: 100%;
  width: 70%;
`;
export const UserData = styled.div`
  display: flex;
`;
export const UserInformation = styled.div`
  display: flex;
`;

export const EditProfileButton = styled(CustomButtonComponent)`
  color: black;
  background-color: white;
  border: 1px solid;
`;
