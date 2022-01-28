import LoginSignupPage from "./pages/LoginSignupPage";
<<<<<<< HEAD
import "./App_style.css";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="app">
      {/* <LoginSignupPage /> */}
      <Header />
    </div>
=======
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
>>>>>>> 077243f1584602af69097daa1f11cd5c8cc7e760
  );
}

export default App;
