import React from "react";
import { useSelector } from "react-redux";
import LogedUserImage from "../LogedUserImage/LogedUserImage";
import FormmInputComponent from "../Form Input/FormInputComponent";

import useLoginSignup from "../../Custom Hooks/useLoginSignup";
import {
  ChangeProfilePhoto,
  ChangeButton,
  Container,
  Form,
  Center,
  Input,
  Notice,
} from "./EditProfileStyle";

const EditProfile = () => {
  const { userName, fullName } = useSelector(({ userReducer }) => userReducer);
  const [formData, setFormData] = useLoginSignup({
    name: fullName,
    username: userName,
    bio: "",
    website: "",
  });
  const { name, username, bio, website } = formData;
  return (
    <Center>
      <Container>
        <ChangeProfilePhoto>
          <LogedUserImage style={{ width: "32px", height: "32px" }} />
          <ChangeButton>
            <div>{userName}</div>
            <div>Change Profile Photo</div>
          </ChangeButton>
        </ChangeProfilePhoto>
        <Form>
          <Input>
            <label htmlFor="name">Name</label>
            <Notice>
              <FormmInputComponent
                name="name"
                id="name"
                value={name}
                onChange={setFormData}
                // label="Name"
              />
              <p>
                Help people discover your account by using the name you're known
                by: either your full name, nickname, or business name.
                <span>You can only change your name twice within 14 days.</span>
              </p>
            </Notice>
          </Input>

          <Input>
            <label htmlFor="username">Username</label>
            <Notice>
              <FormmInputComponent
                name="username"
                value={username}
                onChange={setFormData}
                id="username"
              />
              <p>
                In most cases, you'll be able to change your username back to
                harshk1611 for another 14 days. Learn More
              </p>
            </Notice>
          </Input>

          <Input>
            <label htmlFor="website">Website</label>{" "}
            <Notice>
              <FormmInputComponent
                name="website"
                value={website}
                onChange={setFormData}
                id="website"
              />
            </Notice>
          </Input>
          <Input>
            <label htmlFor="bio">Bio</label>
            <Notice>
              <FormmInputComponent
                name="bio"
                value={bio}
                onChange={setFormData}
                id="bio"
              />{" "}
            </Notice>
          </Input>
        </Form>
      </Container>
    </Center>
  );
};

export default EditProfile;
