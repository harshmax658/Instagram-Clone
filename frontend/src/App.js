import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import Header from "./components/header/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import { AppStyle, GlobalStyleCss } from "./AppStyle";
// import RouterHandler from "./pages/InstaHome/RouterHandler";
import ProfilePage from "./pages/Profile page/ProfilePage";
import Inbox from "./pages/Inbox/Inbox";
import HomePage from "./pages/Home Page/HomePage";
import CustomButtonComponent from "./components/custom button/CustomButtonComponent";

function App() {
  return (
    // <BrowserRouter>
    <AppStyle>
      <Header />
      {/* <Routes> */}
      {/* Add Component inside App Block */}
      {/* <Route path="/" element={<RouterHandler />}>
            <Route path="/h" exact element={<ProfilePage />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
          <Route path="/login" element={<LoginSignupPage />} /> */}
      {/* <Route path="*" element={<LoginSignupPage />} /> */}
      {/* </Routes> */}
      <GlobalStyleCss />
    </AppStyle>
    // {/* Style  */}
    // </BrowserRouter>
  );
}

export default App;
