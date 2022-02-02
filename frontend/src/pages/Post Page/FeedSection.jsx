import React, { useEffect } from "react";
import {
  UserPost,
  FeedSectionDiv,
  AllPost,
  CurrentUser,
} from "./FeedSectionStyle";
import PostComponets from "../../components/Posts/PostComponets";
import UserSuggestionComponent from "../../components/User Suggection/UserSuggestionComponent";
const FeedSection = () => {
  return (
    <>
      <FeedSectionDiv>
        <UserPost>
          <AllPost>
            <PostComponets />
            <PostComponets />
            <PostComponets />
            <PostComponets />
            <PostComponets />
            <PostComponets />
          </AllPost>
          <CurrentUser>
            <UserSuggestionComponent />
          </CurrentUser>
        </UserPost>
      </FeedSectionDiv>
    </>
  );
};

export default FeedSection;
// Harsh
