import React, { useEffect } from "react";
import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { AppStyle, GlobalStyleCss } from "./AppStyle";
import RouterHandler from "./pages/InstaHome/RouterHandler";
import EmailSignupPage from "./pages/Email Signup Page/EmailSignupPage";
import { useDispatch, useSelector } from "react-redux";
import { checkAuthorization } from "./redux/user/action";

function App() {
  const navigate = useNavigate();
  const { token } = useSelector(({ userReducer }) => userReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkAuthorization(navigate));
  }, []);
  return (
    <>
      <AppStyle>
        <Routes>
          {!token && <Route path="/" element={<LoginSignupPage />} />}
          <Route path="/*" element={<RouterHandler />} />
          <Route path="/emailsignup" element={<EmailSignupPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
        {/* Style */}
        <GlobalStyleCss />
      </AppStyle>
    </>
  );
}

export default App;
//Harsh
