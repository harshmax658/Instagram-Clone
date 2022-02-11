import React, { createContext, useState } from "react";
import { MainPage } from "./RouterHandlerStyle";
import Header from "../../components/header/Header";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import ProfilePage from "../Profile page/ProfilePage";
import Inbox from "../Inbox/Inbox";

import NotFoundPage from "../Notfound Page/NotFoundPage";

import PostPage from "../Post Page/PostPage";
const PostCalling = createContext();
const RouterHandler = () => {
  const navigate = useNavigate();
  const [directCallPostPage, setDirectCallPostPage] = useState({
    useBtn: false,
    direct: false,
  });

  const closeBackDropOfPost = () => {
    setDirectCallPostPage((prev) => {
      return { ...prev, direct: false, useBtn: true };
    });
    navigate(-1);
  };

  return (
    <>
      <Header call={directCallPostPage} />
      <MainPage>
        <Routes>
          <Route
            path="/"
            element={
              <PostCalling.Provider
                value={{
                  directCallPostPage,
                  setDirectCallPostPage,
                }}
              >
                <HomePage />
              </PostCalling.Provider>
            }
          />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="inbox" element={<Inbox />} />
          {!directCallPostPage.direct && !directCallPostPage.useBtn && (
            <Route
              path="p/:postId"
              element={
                !directCallPostPage.direct && (
                  <PostPage call={directCallPostPage.direct} />
                )
              }
            />
          )}
          {!directCallPostPage.direct && !directCallPostPage.useBtn && (
            <Route path="*" element={<NotFoundPage />} />
          )}
          {directCallPostPage.direct && (
            <Route
              path="*"
              element={
                <PostCalling.Provider
                  value={{
                    directCallPostPage,
                    setDirectCallPostPage,
                    closeBackDropOfPost,
                  }}
                >
                  <HomePage />
                </PostCalling.Provider>
              }
            />
          )}
        </Routes>
      </MainPage>
    </>
  );
};

export default RouterHandler;
export { PostCalling };
// harsh
