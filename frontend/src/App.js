import LoginSignupPage from "./pages/LoginSignupPage";
import { AppStyle, GlobalStyleCss } from "./AppStyle";

function App() {
  return (
    <>
      {/* Add Component inside App Block */}
      <AppStyle>
        <LoginSignupPage />
      </AppStyle>
      {/* Style  */}
      <GlobalStyleCss />
    </>
  );
}

export default App;
