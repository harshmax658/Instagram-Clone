import React from "react";
import { Button } from "./CustomeButtonStyle";

const CustomButtonComponent = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>;
};

export default CustomButtonComponent;
// Harsh
