import React from "react";
import { Post } from "./backDropStyle";
const OverLay = ({ children, call, createNewPost, forProfilePhoto }) => {
  return (
    <Post
      className="ll"
      call={call}
      createNewPost={createNewPost}
      forProfilePhoto={forProfilePhoto}
    >
      {children}
    </Post>
  );
};

export default OverLay;
//Harsh
