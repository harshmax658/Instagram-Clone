import React from "react";
import { MainPage } from "./RouterHandlerStyle";
import Header from "../../components/header/Header";

import { Routes, Route } from "react-router-dom";
import HomePage from "../Home Page/HomePage";
import ProfilePage from "../Profile page/ProfilePage";
import Inbox from "../Inbox/Inbox";

import { Outlet } from "react-router-dom";

const RouterHandler = () => {
  console.log("router Handler");
  return (
    <>
      <Header />
      <MainPage>
        <Routes>
          <Route path="/" index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/inbox" element={<Inbox />}>
            {/* <Route path="*" element={<p> Found</p>} /> */}
          </Route>
        </Routes>

        <Outlet />
      </MainPage>
    </>
  );
};

export default RouterHandler;
