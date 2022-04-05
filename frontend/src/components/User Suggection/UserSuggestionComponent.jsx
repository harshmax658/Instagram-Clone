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

const UserSuggestionComponent = () => {
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
            <p onClick={() => navigate("profile")}>harshk1611</p>
            <p>Harsh</p>
          </CurrentUserName>
        </CurrentUserData>
        <UserSwitchButton>Switch</UserSwitchButton>
      </CurrentUser>
    </UserSuggestion>
  );
};

export default UserSuggestionComponent;
// harsh
