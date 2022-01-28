import LoginSignupPage from "./pages/LoginSignupPage";
import Header from "./components/header/Header";

import { AppStyle, GlobalStyleCss } from "./AppStyle";

function App() {
  return (
    <>
      {/* Add Component inside App Block */}
      <AppStyle>
        <Header />
        {/* <LoginSignupPage /> */}
      </AppStyle>
      {/* Style  */}
      <GlobalStyleCss />
    </>
  );
}

export default App;
