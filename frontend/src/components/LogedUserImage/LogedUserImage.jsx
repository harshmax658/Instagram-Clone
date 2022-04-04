import React from "react";
import ImageComponent from "../IMG/ImageComponent";

const LogedUserImage = ({ style, ...props }) => {
  console.log(props);
  return (
    <ImageComponent
      style={{ borderRadius: "50%", ...style }}
      {...props}
      image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    />
  );
};

export default LogedUserImage;
