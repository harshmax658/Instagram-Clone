import React from "react";

import {
  PostComponent,
  PostOwner,
  PostOwnerData,
  PostOwnerName,
  PostAction,
  PostImage,
  PostActionButtons,
  PostReactButton,
  PostDescription,
  LikesCount,
  CommnetCount,
  PostTimeDate,
  AddCommentOnPost,
  TextArea,
  PostDetails,
  GlobaLCss,
  PostSummary,
} from "./PostStyle";

import ImageComponent from "../../components/IMG/ImageComponent";

import SavedSvg from "../../svg/SavedSvg";
import LoveSvg from "../../svg/LoveSvg";
import CommentsSvg from "../../svg/CommentsSvg";
import SendSvg from "../../svg/SendSvg";
import SmilyEmojiSvg from "../../svg/SmilyEmojiSvg";

const PostComponets = () => {
  return (
    <PostComponent>
      <PostOwner>
        <PostOwnerData>
          <ImageComponent
            image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            height="32px"
            width="32px"
          />
          <PostOwnerName>RVCJ</PostOwnerName>
        </PostOwnerData>
        <div className="cursorPointer">
          <PostAction>...</PostAction>
        </div>
      </PostOwner>
      <PostImage />
      <PostDetails>
        <PostActionButtons>
          <PostReactButton>
            <div className="btn cursorPointer">
              <LoveSvg />
            </div>
            <div className="btn cursorPointer">
              <CommentsSvg />
            </div>
            <div className="btn cursorPointer">
              <SendSvg />
            </div>
          </PostReactButton>
          <div className="savedBtn cursorPointer ">
            <SavedSvg />
          </div>
        </PostActionButtons>
        <PostSummary>
          <LikesCount>44,801 likes</LikesCount>
          <PostDescription>
            <span>rvcjinsta</span> In Hindi Belt... more
          </PostDescription>
          <CommnetCount>View all 194 comments</CommnetCount>
          <PostTimeDate>11 MINUTES AGO</PostTimeDate>
        </PostSummary>
      </PostDetails>
      <AddCommentOnPost>
        <div className="emoji">
          <SmilyEmojiSvg />
        </div>
        <div className="commentText">
          <TextArea placeholder="Add a comment…"></TextArea>
          <div className="post">Post</div>
        </div>
      </AddCommentOnPost>
      <GlobaLCss />
    </PostComponent>
  );
};

export default PostComponets;
// harsh