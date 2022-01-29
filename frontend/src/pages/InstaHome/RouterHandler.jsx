import React from "react";
import { MainPage } from "./RouterHandlerStyle";
import Header from "../../components/header/Header";

import { Routes, Route } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import ProfilePage from "../Profile page/ProfilePage";
import Inbox from "../Inbox/Inbox";
import { useLocation } from "react-router-dom";

const RouterHandler = () => {
  const { pathname } = useLocation();
  console.log(pathname);
  console.log("aya");
  return (
    <>
      {/* <Header /> */}
      <MainPage>
        <Routes>
          <Route path={`${pathname}/profile`} exact element={<ProfilePage />} />
          {/* <Route path="/a" element={<ProfilePage />}>
            <Route path="/inbox" element={<Inbox />} />
          </Route> */}
        </Routes>
      </MainPage>
    </>
  );
};

export default RouterHandler;
