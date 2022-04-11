import React from "react";
import ImageComponent from "../IMG/ImageComponent";
import { useSelector } from "react-redux";

const LogedUserImage = ({ style, ...props }) => {
  const { avatar } = useSelector(({ userReducer }) => userReducer);
  return (
    <ImageComponent
      style={{ borderRadius: "50%", ...style }}
      {...props}
      image={avatar}
    />
  );
};

export default LogedUserImage;
//Harsh
