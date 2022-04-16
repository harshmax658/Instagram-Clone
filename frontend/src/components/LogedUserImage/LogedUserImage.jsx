import React from "react";
import ImageComponent from "../IMG/ImageComponent";
import { useSelector } from "react-redux";

const LogedUserImage = ({ style, ...props }) => {
  const { avatar } = useSelector(({ userReducer }) => userReducer);
  console.log(avatar);
  const defaultImg = "/uploads/default_images/defaultProfileImage.jpg";
  return (
    <ImageComponent
      style={{ borderRadius: "50%", ...style }}
      {...props}
      image={avatar ? avatar : defaultImg}
    />
  );
};

export default LogedUserImage;
//Harsh
