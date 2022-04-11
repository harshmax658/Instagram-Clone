import React, { createContext, useEffect, useState } from "react";
import { MainPage } from "./RouterHandlerStyle";
import Header from "../../components/header/Header";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import ProfilePage from "../Profile page/ProfilePage";
// import Inbox from "../Inbox/Inbox";

import NotFoundPage from "../Notfound Page/NotFoundPage";

import PostPage from "../Post Page/PostPage";
import CreateNewPost from "../../components/Create new Post/CreateNewPost";
import Message from "../Message/Message";
import { useDispatch, useSelector } from "react-redux";
import { userDataFetchStart } from "../../redux/user/action";
import EditProfile from "../Edit profile/EditProfile";

const PostCalling = createContext();
const ProfilePageCalling = createContext();

const RouterHandler = () => {
  const dispatch = useDispatch();
  const { token } = useSelector(({ userReducer }) => userReducer);

  useEffect(() => {
    if (token) {
      console.log("enter");
      dispatch(userDataFetchStart(token));
    }
  }, [token]);
  const navigate = useNavigate();
  const [newPost, setNewPost] = useState(false);
  const [directCallPostPage, setDirectCallPostPage] = useState({
    profilePage: false,
    profilePageDirect: false,
    direct: false,
  });

  const closeBackDropOfPost = () => {
    setDirectCallPostPage((prev) => {
      return {
        ...prev,
        direct: false,
        profilePageDirect: false,
        profilePage: false,
      };
    });
    navigate(-1);
  };
  const closeCreateNewPostPopUp = () => {
    setNewPost(false);
  };

  return (
    <>
      {newPost && <CreateNewPost close={closeCreateNewPostPopUp} />}
      <Header call={directCallPostPage} setNewPost={setNewPost} />
      {token && (
        <MainPage newPost={newPost}>
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

            <Route path="inbox" element={<Message />} />

            <Route path="account" element={<EditProfile />}>
              {/* <Route path="edit" element={null} />
              <Route path="password/change" element={null} /> */}
            </Route>

            <Route
              path="profile"
              element={
                <ProfilePageCalling.Provider
                  value={{
                    directCallPostPage,
                    setDirectCallPostPage,
                  }}
                >
                  <ProfilePage />
                </ProfilePageCalling.Provider>
              }
            >
              <Route path="" element={null} />
              <Route path="tagged" element={null} />
              <Route path="saved" element={null} />
            </Route>
            {/* <Route path="inbox" element={<Inbox />} /> */}

            {!directCallPostPage.direct && !directCallPostPage.profilePage && (
              <Route
                path="p/:postId"
                element={<PostPage call={directCallPostPage.direct} />}
              />
            )}
            {!directCallPostPage.direct &&
              (!directCallPostPage.profilePage ||
                !directCallPostPage.profilePageDirect) && (
                <Route path="*" element={<NotFoundPage />} />
              )}
            {/* <Route /> */}
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
            {(directCallPostPage.profilePage ||
              directCallPostPage.profilePageDirect) && (
              <Route
                path="*"
                element={
                  <ProfilePageCalling.Provider
                    value={{
                      directCallPostPage,
                      setDirectCallPostPage,
                      closeBackDropOfPost,
                    }}
                  >
                    <ProfilePage />
                  </ProfilePageCalling.Provider>
                }
              />
            )}
          </Routes>
        </MainPage>
      )}
    </>
  );
};

export default RouterHandler;
export { PostCalling, ProfilePageCalling };
// harsh
