import React from "react";
import { Image } from "./imageStyle";

const ImageComponent = ({ image, alt, className, style, ...otherProps }) => {
  return (
    <Image
      style={style}
      className={className ? className : ""}
      src={image}
      alt={alt ? alt : "image"}
      {...otherProps}
    />
  );
};

export default ImageComponent;
// harsh
