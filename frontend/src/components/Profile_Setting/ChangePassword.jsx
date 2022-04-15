import React from "react";
import {
  Center,
  Container,
  ChangeProfilePhoto,
  UserImg,
  ChangeButton,
  Form,
  Notice,
  Input,
  SubmitButton,
} from "./ProfileSettingStyle";

import CustomButtonComponent from "../custom button/CustomButtonComponent";
import FormInputComponent from "../Form Input/FormInputComponent";
import LogedUserImage from "../LogedUserImage/LogedUserImage";
import useLoginSignup from "../../Custom Hooks/useLoginSignup";
import { useSelector } from "react-redux";
const ChangePassword = () => {
  const { userName, fullName, emailOrMobile } = useSelector(
    ({ userReducer }) => userReducer
  );
  const [formData, setFormData] = useLoginSignup({
    old_password: "",
    new_password: "",
    cNewPassword: "",
  });
  const { old_password, new_password, cNewPassword } = formData;

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

        <Form>
          <Input cngp={true}>
            <label htmlFor="old_password" className="l30p">
              Old Password
            </label>
            <Notice>
              <FormInputComponent
                name="old_password"
                id="old_password"
                value={old_password}
                onChange={setFormData}
              />
            </Notice>
          </Input>
          <Input cngp={true}>
            <label htmlFor="new_Password" className="l30p">
              New Password
            </label>
            <Notice>
              <FormInputComponent
                name="new_Password"
                id="new_Password"
                value={new_password}
                onChange={setFormData}
              />
            </Notice>
          </Input>
          <Input cngp={true}>
            <label htmlFor="cNewPassword" className="l30p">
              Confirm New Password
            </label>
            <Notice>
              <FormInputComponent
                name="cNewPassword"
                id="cNewPassword"
                value={cNewPassword}
                onChange={setFormData}
              />
            </Notice>
          </Input>
          <SubmitButton>
            <CustomButtonComponent>Change Password</CustomButtonComponent>
            <div
              className="
forgotPassword"
            >
              Forgot Password?
            </div>
          </SubmitButton>
        </Form>
      </Container>
    </Center>
  );
};

export default ChangePassword;
