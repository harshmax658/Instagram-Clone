import React from "react";
import { Image } from "./imageStyle";

const ImageComponent = ({ image, alt, width, height, className, style }) => {
  return (
    <Image
      style={style}
      className={className ? className : ""}
      src={image}
      alt={alt ? { alt } : "image"}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
// harsh
