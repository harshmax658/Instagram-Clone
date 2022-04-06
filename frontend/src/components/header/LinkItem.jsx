import React from "react";
import { Link } from "@mui/material";
import { IconStyle } from "./HeaderStyle";

const LinkItem = ({ Icon, setNewPost }) => {
  return (
    <IconStyle onClick={() => setNewPost(true)}>
      <Link>{Icon}</Link>
    </IconStyle>
  );
};

export default LinkItem;
