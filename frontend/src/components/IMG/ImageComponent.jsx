import React from "react";
import { Image } from "./imageStyle";

const ImageComponent = ({ image, alt, width, height, className }) => {
  return (
    <Image
      className={className ? className : ""}
      src={image}
      alt={alt ? { alt } : "image"}
      width={width}
      height={height}
    />
  );
};

export default ImageComponent;
