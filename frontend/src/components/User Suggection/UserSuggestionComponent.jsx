import React from "react";

import {
  UserSuggestion,
  CurrentUser,
  CurrentUserData,
  CurrentUserName,
  UserSwitchButton,
} from "./UserSuggestionStyle";

import LogedUserImage from "../LogedUserImage/LogedUserImage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserSuggestionComponent = () => {
  const { userName, fullName } = useSelector(({ userReducer }) => userReducer);
  const navigate = useNavigate();
  return (
    <UserSuggestion>
      <CurrentUser>
        <CurrentUserData>
          <LogedUserImage
            onClick={() => navigate("profile")}
            height="55px"
            width="56px"
          />
          <CurrentUserName>
            <p onClick={() => navigate("profile")}>{userName && userName}</p>
            <p>{fullName?.substring(0, fullName.indexOf(" "))}</p>
          </CurrentUserName>
        </CurrentUserData>
        <UserSwitchButton>Switch</UserSwitchButton>
      </CurrentUser>
    </UserSuggestion>
  );
};

export default UserSuggestionComponent;
// harsh
