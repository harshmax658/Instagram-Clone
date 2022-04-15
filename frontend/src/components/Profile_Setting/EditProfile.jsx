import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import LogedUserImage from "../LogedUserImage/LogedUserImage";
import FormmInputComponent from "../Form Input/FormInputComponent";

import CustomButtonComponent from "../custom button/CustomButtonComponent";
import useLoginSignup from "../../Custom Hooks/useLoginSignup";
import {
  ChangeProfilePhoto,
  ChangeButton,
  Container,
  Form,
  Center,
  Input,
  Notice,
  UserImg,
  PersonalInformation,
  PersonalInformationNotice,
  SubmitButton,
} from "./ProfileSettingStyle";

import { userDataUpdateStart } from "../../redux/user/action";

const EditProfile = () => {
  const dispatch = useDispatch();
  const [isPhotoSelected, setIsPhotoSelected] = useState(false);
  const [profilePhoto, setprofilePhoto] = useState("");
  const { userName, fullName, emailOrMobile, token, userData } = useSelector(
    ({ userReducer }) => userReducer
  );
  const [formData, setFormData] = useLoginSignup({
    name: fullName,
    username: userName,
    bio: "",
    website: "",
    email: emailOrMobile,
    phone: emailOrMobile,
    gender: userData.gender,
  });
  const { name, username, email, bio, website, phone, gender } = formData;

  const updateProfile = (event) => {
    event.preventDefault();

    dispatch(userDataUpdateStart({ formData, token }));
  };
  useEffect(() => {
    if (isPhotoSelected && profilePhoto) {
      console.log("execute");
      const form = new FormData();

      form.append("avatar", profilePhoto);

      // dispatch(userDataUpdateStart({ form, token }));
      const a = async () => {
        const response = await fetch("/api/user/update-user-profile", {
          method: "Post",
          headers: {
            Authorization: token,
          },
          body: form,
        });
      };
      a();
    }
  }, [isPhotoSelected, profilePhoto]);
  const setProfilePhoto = (event) => {
    setIsPhotoSelected(true);

    setprofilePhoto(event.target.files[0]);
  };
  return (
    <Center>
      <Container>
        <ChangeProfilePhoto>
          <UserImg className="l30p">
            <LogedUserImage style={{ width: "32px", height: "32px" }} />
          </UserImg>
          <ChangeButton>
            <h2>{userName}</h2>
            <label htmlFor="profilePhoto">Change Profile Photo</label>
            <input
              onChange={setProfilePhoto}
              type="file"
              name="profilePhoto"
              id="profilePhoto"
            />
          </ChangeButton>
        </ChangeProfilePhoto>
        <Form onSubmit={updateProfile}>
          <Input>
            <label htmlFor="name" className="l30p">
              Name
            </label>
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
            <label htmlFor="username" className="l30p">
              Username
            </label>
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
            <label htmlFor="website" className="l30p">
              Website
            </label>
            <Notice>
              <FormmInputComponent
                name="website"
                value={website}
                onChange={setFormData}
                id="website"
                placeholder="Website"
              />
            </Notice>
          </Input>
          <Input>
            <label htmlFor="bio" className="l30p">
              Bio
            </label>
            <Notice>
              <textarea
                type="textarea"
                name="bio"
                value={bio}
                onChange={setFormData}
                id="bio"
              />
              <PersonalInformationNotice>
                <h2>Personal Information</h2>
                <p>
                  Provide your personal information, even if the account is used
                  for a business, a pet or something else. This won't be a part
                  of your public profile.
                </p>
              </PersonalInformationNotice>
            </Notice>
          </Input>
          <PersonalInformation>
            <Input>
              <label htmlFor="email" className="l30p">
                Email
              </label>
              <Notice>
                <FormmInputComponent
                  name="email"
                  value={email}
                  onChange={setFormData}
                  id="email"
                  placeholder="email"
                />
              </Notice>
            </Input>
            <Input>
              <label htmlFor="phone" className="l30p">
                Phone Number
              </label>
              <Notice>
                <FormmInputComponent
                  name="phone"
                  value={phone}
                  onChange={setFormData}
                  id="phone"
                  placeholder="phone"
                />
              </Notice>
            </Input>
            <Input>
              <label htmlFor="gender" className="l30p">
                Gender
              </label>
              <Notice>
                <FormmInputComponent
                  name="gender"
                  value={gender}
                  onChange={setFormData}
                  id="gender"
                  placeholder="gender"
                />
              </Notice>
            </Input>
          </PersonalInformation>
          <SubmitButton>
            <CustomButtonComponent>Submit</CustomButtonComponent>
          </SubmitButton>
        </Form>
      </Container>
    </Center>
  );
};

export default EditProfile;
