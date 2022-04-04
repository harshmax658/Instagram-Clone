import React from "react";
import {
  UserProfilePage,
  UserProfile,
  UserData,
  UserInformation,
  EditProfileButton,
} from "./ProfilePageStyle";
import LogedUserImage from "../../components/LogedUserImage/LogedUserImage";
import SettingProfileSvg from "../../svg/SettingProfileSvg";

const ProfilePage = () => {
  return (
    <UserProfilePage>
      <UserProfile>
        <UserData>
          <LogedUserImage height="140px" width="140px" />
          <UserInformation>
            harshk1611
            <EditProfileButton>Edit Profile</EditProfileButton>
            <SettingProfileSvg />
          </UserInformation>
        </UserData>
      </UserProfile>
    </UserProfilePage>
  );
};

export default ProfilePage;
// harsh
