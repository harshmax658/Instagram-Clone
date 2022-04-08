import React from "react";
import { Outlet } from "react-router-dom";
import { NotFound, H2, P } from "./NotFoundStyle";
import { Routes, Route } from "react-router-dom";

import PostPage from "../Post Page/PostPage";

const NotFoundPage = () => {
  return (
    <>
      <NotFound>
        <H2>Sorry, this page isn't available.</H2>
        <P>
          The link you followed may be broken, or the page may have been
          removed. Go back to Instagram.
        </P>
      </NotFound>
    </>
  );
};

export default NotFoundPage;
//Harsh
