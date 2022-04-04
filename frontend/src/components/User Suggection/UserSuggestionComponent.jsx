import React from "react";

import {
  UserSuggestion,
  CurrentUser,
  CurrentUserData,
  CurrentUserName,
  UserSwitchButton,
} from "./UserSuggestionStyle";

import LogedUserImage from "../LogedUserImage/LogedUserImage";

const UserSuggestionComponent = () => {
  return (
    <UserSuggestion>
      <CurrentUser>
        <CurrentUserData>
          <LogedUserImage height="55px" width="56px" />
          <CurrentUserName>
            <p>harshk1611</p>
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
