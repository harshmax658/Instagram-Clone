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
  CommnetCout,
  PostTimeDate,
  AddCommentOnPost,
  TextArea,
  PostDetails,
} from "./PostStyle";

import FormInputComponent from "../../components/Form Input/FormInputComponent";

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
          img
          <PostOwnerName>RVCJ</PostOwnerName>
        </PostOwnerData>
        <PostAction>...</PostAction>
      </PostOwner>
      <PostImage />
      <PostDetails>
        <PostActionButtons>
          <PostReactButton>
            <div className="btn">
              <LoveSvg />
            </div>
            <div className="btn">
              <CommentsSvg />
            </div>
            <div className="btn">
              <SendSvg />
            </div>
          </PostReactButton>
          <div className="savedBtn btn">
            <SavedSvg />
          </div>
        </PostActionButtons>
        <LikesCount>44,801 likes</LikesCount>
        <PostDescription>rvcjinsta In Hindi Belt... more</PostDescription>
        <CommnetCout>View all 194 comments</CommnetCout>
        <PostTimeDate>11 MINUTES AGO</PostTimeDate>
      </PostDetails>
      <AddCommentOnPost>
        <div className="emoji">
          <SmilyEmojiSvg />
        </div>
        <div className="commentText">
          <TextArea cols="30" rows="10" placeholder="Add a comment…"></TextArea>
          <div className="post">Post</div>
        </div>
      </AddCommentOnPost>
    </PostComponent>
  );
};

export default PostComponets;
