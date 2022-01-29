import LoginSignupPage from "./pages/LoginSignup/LoginSignupPage";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppStyle, GlobalStyleCss } from "./AppStyle";

import RouterHandler from "./pages/InstaHome/RouterHandler";
import ProfilePage from "./pages/Profile page/ProfilePage";
import Inbox from "./pages/Inbox/Inbox";

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Header />
        <Routes>
          {/* Add Component inside App Block */}
          {/* <Route path="/" element={<RouterHandler />}>
            <Route path="/h" exact element={<ProfilePage />} />
            <Route path="/inbox" element={<Inbox />} />
          </Route>
          <Route path="/login" element={<LoginSignupPage />} /> */}
          {/* <Route path="*" element={<LoginSignupPage />} /> */}
        </Routes>
      </AppStyle>
      {/* Style  */}
      <GlobalStyleCss />
    </BrowserRouter>
  );
}

export default App;
