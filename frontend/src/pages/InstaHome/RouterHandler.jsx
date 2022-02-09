import React, { createContext, useState } from "react";
import { MainPage } from "./RouterHandlerStyle";
import Header from "../../components/header/Header";
import { Routes, Route } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import ProfilePage from "../Profile page/ProfilePage";
import Inbox from "../Inbox/Inbox";

import NotFoundPage from "../Notfound Page/NotFoundPage";

import PostPage from "../Post Page/PostPage";
const PostCalling = createContext();
const RouterHandler = () => {
  const [directCallPostPage, setDirectCallPostPage] = useState(false);

  return (
    <>
      <Header />
      <MainPage>
        <Routes>
          <Route
            path="/"
            element={
              <PostCalling.Provider
                value={{ directCallPostPage, setDirectCallPostPage }}
              >
                <HomePage />
              </PostCalling.Provider>
            }
          />

          <Route path="profile" element={<ProfilePage />} />
          <Route path="inbox" element={<Inbox />} />
          <Route
            path="p/:postId"
            element={<PostPage call={directCallPostPage} />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </MainPage>
    </>
  );
};

export default RouterHandler;
export { PostCalling };
// harsh
