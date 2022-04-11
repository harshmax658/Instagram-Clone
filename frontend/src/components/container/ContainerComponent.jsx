import React from "react";

import { Container } from "./ContainerStyle";

const ContainerComponent = ({ children, width }) => {
  return <Container width={width}>{children}</Container>;
};

export default ContainerComponent;
//Harsh
