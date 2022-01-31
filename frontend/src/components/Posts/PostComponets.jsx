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
} from "./PostStyle";

import SavedSvg from "../../svg/SavedSvg";
import LoveSvg from "../../svg/LoveSvg";
import CommentsSvg from "../../svg/CommentsSvg";
import SendSvg from "../../svg/SendSvd";
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
      {/* sas */}
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
    </PostComponent>
  );
};

export default PostComponets;
