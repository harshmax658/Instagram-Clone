import React from "react";

import {
  UserSuggestion,
  CurrentUser,
  CurrentUserData,
  CurrentUserName,
  UserSwitchButton,
  OtherUserSuggestion,
  SeeAllUser,
  Others,
} from "./UserSuggestionStyle";

import LogedUserImage from "../LogedUserImage/LogedUserImage";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PeopleSuggestion from "../People Suggestion/PeopleSuggestion";

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
      <OtherUserSuggestion>
        <div className="topHead">
          Suggestions For You{" "}
          <SeeAllUser onClick={() => navigate("explore/people")}>
            See All
          </SeeAllUser>
        </div>
        <Others>
          <PeopleSuggestion fromUserSuggestion={true} />
        </Others>
      </OtherUserSuggestion>
    </UserSuggestion>
  );
};

export default UserSuggestionComponent;
// harsh
