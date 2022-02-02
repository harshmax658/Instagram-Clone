import React from "react";
import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderDownSpace } from "./components/header/HeaderStyle";
import { AppStyle, GlobalStyleCss } from "./AppStyle";
// import RouterHandler from "./pages/InstaHome/RouterHandler";
import ProfilePage from "./pages/Profile page/ProfilePage";
import Inbox from "./pages/Inbox/Inbox";
import HomePage from "./pages/Home Page/HomePage";
import CustomButtonComponent from "./components/custom button/CustomButtonComponent";

import PostPage from "./pages/Post Page/FeedSection";
function App() {
  return (
    // <BrowserRouter>
    <React.StrictMode>
      <AppStyle>
        <Header />
        <HeaderDownSpace />
        <PostPage />
        {/* <Routes>
          {/* Add Component inside App Block */}
        {/* <Route path="/" element={<RouterHandler />}>
            <Route path="/h" exact element={<ProfilePage />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route> */}
        {/* <Route path="*" element={<LoginSignupPage />} />
          <Route path="/login" element={<LoginSignupPage />} /> */}{" "}
        {/* </Routes> */}
        <GlobalStyleCss />
        {/* Style */}
      </AppStyle>
    </React.StrictMode>

    // </BrowserRouter>
  );
}

export default App;
