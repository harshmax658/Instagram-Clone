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

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { BsChat } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
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
          <div>
            <FavoriteBorderIcon />
            <BsChat />
            <FiSend />
          </div>
        </PostReactButton>
      </PostActionButtons>
    </PostComponent>
  );
};

export default PostComponets;
