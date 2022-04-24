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
import EditProfile from "../../components/Profile_Setting/EditProfile";
import ChangePassword from "../../components/Profile_Setting/ChangePassword";
import ProfileSetting from "../Profile Setting/ProfileSetting";
<<<<<<< HEAD
import { red } from "@mui/material/colors";
=======
import Explore from "../Explore Page/Explore";
>>>>>>> e20caf1853bdc86d0a25fc32ac5a1b11db9b720a

const PostCalling = createContext();
const ProfilePageCalling = createContext();

const RouterHandler = () => {
  const [render,SetRender] = React.useState(false);
  const [renderWithMain, SetRenderWithMain] = React.useState(false);
  const dispatch = useDispatch();
  const { token, userPresent } = useSelector(({ userReducer }) => userReducer);

  useEffect(() => {
    if (token) {
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

  const renderDropDown = (renderProfileDrop ,ProfileDrop) => {
      console.log("prfiledrop",ProfileDrop);
      SetRender(false)
      console.log("renderRouter",render);
      if(ProfileDrop === true){
        renderProfileDrop();
      }
  }

  return (
    <>
      {newPost && <CreateNewPost close={closeCreateNewPostPopUp} />}
      <Header 
      renderWithMain={renderWithMain}
      render = {render}
      renderDropDown = {renderDropDown}
      call={directCallPostPage} setNewPost={setNewPost} />
      {token && userPresent && (
        <MainPage newPost={newPost}
         onClick={() => SetRenderWithMain(renderWithMain ? false : true)} 
        >
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
            <Route path="explore" element={<Explore />}>
              <Route path="people" element={<Explore />} />
            </Route>

            <Route path="accounts" element={<ProfileSetting />}>
              <Route path="edit" element={<EditProfile />} />
              <Route path="password/change" element={<ChangePassword />} />
              <Route path="account3" element={null} />
              <Route path="account4" element={null} />
              <Route path="account5" element={null} />
              <Route path="account6" element={null} />
              <Route path="account7" element={null} />
              <Route path="account8" element={null} />
              <Route path="account9" element={null} />

              <Route path="password/change" element={null} />
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
