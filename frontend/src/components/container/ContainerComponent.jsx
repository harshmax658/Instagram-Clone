import React from "react";

import { Container } from "./ContainerStyle";

const ContainerComponent = ({ children }) => {
  return <Container>{children}</Container>;
};

export default ContainerComponent;
