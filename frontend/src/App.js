import React from "react";
import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import { Routes, Route } from "react-router-dom";
import { AppStyle, GlobalStyleCss } from "./AppStyle";
import RouterHandler from "./pages/InstaHome/RouterHandler";
import EmailSignupPage from "./pages/Email Signup Page/EmailSignupPage";

function App() {
  return (
    <>
      <AppStyle>
        <Routes>
          <Route path="/*" element={<RouterHandler />} />
          <Route path="/emailsignup" element={<EmailSignupPage />} />
          <Route path="/login" element={<LoginSignupPage />} />
        </Routes>
        {/* Style */}
        <GlobalStyleCss />
      </AppStyle>
    </>
  );
}

export default App;
//Harsh
