import React from "react";

import {
  UserSuggestion,
  CurrentUser,
  CurrentUserData,
  CurrentUserName,
  UserSwitchButton,
} from "./UserSuggestionStyle";
import ImageComponent from "../IMG/ImageComponent";

const UserSuggestionComponent = () => {
  return (
    <UserSuggestion>
      <CurrentUser>
        <CurrentUserData>
          <ImageComponent
            style={{ borderRadius: "50%", height: "55px", width: "56px" }}
            image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
          />
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
