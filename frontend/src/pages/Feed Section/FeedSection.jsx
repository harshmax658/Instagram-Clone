import React, { useContext } from "react";
import {
  UserPost,
  FeedSectionDiv,
  AllPost,
  CurrentUser,
} from "./FeedSectionStyle";
import PostComponets from "../../components/Posts/PostComponets";
import UserSuggestionComponent from "../../components/User Suggection/UserSuggestionComponent";

import { PostCalling } from "../InstaHome/RouterHandler";
import PostPage from "../Post Page/PostPage";
const FeedSection = () => {
  const postCalling = useContext(PostCalling);
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
      {postCalling.directCallPostPage && (
        <PostPage call={postCalling.directCallPostPage} />
      )}
    </>
  );
};

export default FeedSection;
// Harsh
