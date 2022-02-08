import React from "react";
import {
  UserPost,
  FeedSectionDiv,
  AllPost,
  CurrentUser,
} from "./FeedSectionStyle";
import PostComponets from "../../components/Posts/PostComponets";
import UserSuggestionComponent from "../../components/User Suggection/UserSuggestionComponent";
const FeedSection = () => {
  const a = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <FeedSectionDiv>
        <UserPost>
          <AllPost>
            {a.map((props) => (
              <PostComponets key={props} id={props} />
            ))}
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
