import React from "react";
import { MainPage } from "./RouterHandlerStyle";
import Header from "../../components/header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import ProfilePage from "../Profile page/ProfilePage";
import Inbox from "../Inbox/Inbox";

import NotFoundPage from "../Notfound Page/NotFoundPage";

import PostPage from "../Post Page/PostPage";
const RouterHandler = () => {
  return (
    <>
      <Header />
      <MainPage>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="inbox" element={<Inbox />} />
          <Route path="p" element={<PostPage />}>
            <Route path="a" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </MainPage>
    </>
  );
};

export default RouterHandler;
// harsh
