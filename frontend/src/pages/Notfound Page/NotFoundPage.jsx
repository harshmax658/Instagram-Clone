import React from "react";
import { NotFound, H2, P } from "./NotFoundStyle";

const NotFoundPage = () => {
  return (
    <NotFound>
      <H2>Sorry, this page isn't available.</H2>
      <P>
        The link you followed may be broken, or the page may have been removed.
        Go back to Instagram.
      </P>
    </NotFound>
  );
};

export default NotFoundPage;
