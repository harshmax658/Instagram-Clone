import React from "react";
import { NavLink } from "react-router-dom";
import { IconStyle } from "./HeaderStyle";

const LinkItem = ({ Icon, pathname }) => {
  return (
    // <IconStyle onClick={() => setNewPost(true)}>
    <IconStyle >
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
