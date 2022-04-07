import React from "react";
import { Post } from "./backDropStyle";
const OverLay = ({ children, call, createNewPost }) => {
  return (
    <Post call={call} createNewPost={createNewPost}>
      {children}
    </Post>
  );
};

export default OverLay;
//Harsh
