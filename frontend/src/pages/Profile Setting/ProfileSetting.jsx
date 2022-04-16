import React from "react";
import ContainerComponent from "../../components/container/ContainerComponent";
import { Center, Left, Right, Dinline } from "./ProfileSettingStyle";

import { NavLink, Outlet } from "react-router-dom";
const EditProfile = () => {
  return (
    <Center id="profileSetting">
      <ContainerComponent width="70%">
        <Dinline>
          <Left>
            <NavLink
              to="edit"
              className={(navData) => (navData.isActive ? "active" : "")}
            >
              EditProfile
            </NavLink>
            <NavLink activeclassname="active" to="password/change">
              Change Password
            </NavLink>
            <NavLink activeclassname="active" to="account2">
              Apps and Websites
            </NavLink>
            <NavLink to="account3">Email and SMS</NavLink>
            <NavLink to="account4">Push Notifications</NavLink>
            <NavLink to="account5">Manage Contacts</NavLink>
            <NavLink to="account6">Privacy and Security</NavLink>
            <NavLink to="account7">Login Activity</NavLink>
            <NavLink to="account8">Emails from Instagram</NavLink>
            <NavLink to="account9">Help</NavLink>
          </Left>
          <Right>
            <Outlet />
          </Right>
        </Dinline>
      </ContainerComponent>
    </Center>
  );
};

export default EditProfile;
