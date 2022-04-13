import React from "react";
import {
  Center,
  Container,
  ChangeProfilePhoto,
  UserImg,
  ChangeButton,
} from "./ProfileSettingStyle";
import LogedUserImage from "../LogedUserImage/LogedUserImage";

import { useSelector } from "react-redux";
const ChangePassword = () => {
  const { userName, fullName, emailOrMobile } = useSelector(
    ({ userReducer }) => userReducer
  );
  return (
    <Center>
      <Container>
        <ChangeProfilePhoto cngp={true}>
          <UserImg className="l30p">
            <LogedUserImage style={{ width: "32px", height: "32px" }} />
          </UserImg>
          <ChangeButton>
            <h2>{userName}</h2>
          </ChangeButton>
        </ChangeProfilePhoto>
        Change Password
      </Container>
    </Center>
  );
};

export default ChangePassword;
