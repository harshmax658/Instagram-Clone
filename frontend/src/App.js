import React from "react";
import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import Header from "./components/header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HeaderDownSpace } from "./components/header/HeaderStyle";
import { AppStyle, GlobalStyleCss } from "./AppStyle";
import RouterHandler from "./pages/InstaHome/RouterHandler";
import ProfilePage from "./pages/Profile page/ProfilePage";
import Inbox from "./pages/Inbox/Inbox";
import HomePage from "./pages/Home Page/HomePage";
import CustomButtonComponent from "./components/custom button/CustomButtonComponent";
import PostPage from "./pages/Post Page/FeedSection";
import SignUpComponent from "./components/signup component/SignUpComponent";
import EmailSignupPage from "./pages/Email Signup Page/EmailSignupPage";

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Routes>
          <Route path="/*" element={<RouterHandler />} />
          <Route path="/emailsignup" element={<EmailSignupPage />} />
          <Route path="/login" element={<LoginSignupPage />} />
        </Routes>
        {/* Style */}
        <GlobalStyleCss />
      </AppStyle>
    </BrowserRouter>
  );
}

export default App;
