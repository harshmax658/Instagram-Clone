import LoginSignupPage from "./pages/LoginSignupPage";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AppStyle, GlobalStyleCss } from "./AppStyle";

function App() {
  return (
    <BrowserRouter>
      <AppStyle>
        <Routes>
          {/* Add Component inside App Block */}
          <Route path="/" exact element={<Header />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="*" element={<LoginSignupPage />} />
        </Routes>
      </AppStyle>
      {/* Style  */}
      <GlobalStyleCss />
    </BrowserRouter>
  );
}

export default App;
