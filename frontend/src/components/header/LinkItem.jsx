import React from "react";
import { NavLink } from "react-router-dom";
import { IconStyle } from "./HeaderStyle";

const LinkItem = ({ Icon,pathname, setNewPost }) => {
  return (
    // <IconStyle onClick={() => setNewPost(true)}>
    <IconStyle onClick={() => setNewPost && setNewPost(true)}>
        <NavLink
          to={pathname}
          // isActive={changeValue(true)}
        >
          {Icon}
        </NavLink>
    </IconStyle>
  );
};

export default LinkItem;
