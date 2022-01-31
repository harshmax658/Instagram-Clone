import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import Header from "./components/header/Header";
// import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AppStyle, GlobalStyleCss } from "./AppStyle";

import RouterHandler from "./pages/InstaHome/RouterHandler";
import ProfilePage from "./pages/Profile page/ProfilePage";
import Inbox from "./pages/Inbox/Inbox";
import HomePage from "./pages/Home Page/HomePage";
import CustomButtonComponent from "./components/custom button/CustomButtonComponent";

function App() {
  return (
    <>
      {/* // <BrowserRouter> */}
      <AppStyle>
        {/* <Header /> */}
        <Router>
          <Routes>
            {/* Add Component inside App Block */}
            {/* <Route path="*" element={<RouterHandler />}> */}
            <Route path="/" index element={<RouterHandler />} />
            {/* </Route> */}
            {/*
          <Route path="profile" element={<ProfilePage />}> */}
            {/* </Route> */}
            {/* <Route path="harsh" element={<CustomButtonComponent />} />

</Route> */}
            {/* <Route path="/" element={<HomePage />} /> */}
            {/* <Route path="/inbox" element={<Inbox />} /> */}
            <Route path="/login" element={<LoginSignupPage />} />
            <Route path="*" element={<p>Not Found</p>} />
          </Routes>
        </Router>
      </AppStyle>
      {/* Style  */}
      {/* <Outlet />   */}

      {/* <GlobalStyleCss />
      
    </BrowserRouter> */}
    </>
  );
}

export default App;
