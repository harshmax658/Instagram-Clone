import React from "react";
import {
  Container,
  SearchContainer,
  IconsContainer,
  Image,
  Input,
  Left,
  Right,
} from "./HeaderStyle";
import LinkItem from "./LinkItem";
import HomeIcon from "@mui/icons-material/Home";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Header = ({ call, setNewPost }) => {
  return (
    <>
      <Container call={call}>
        <Left>
          <Image src="https://hemsingh780.github.io/hosted-assest/instagram.png" />
        </Left>
        <Right>
          <SearchContainer>
            <SearchIcon style={{ color: "rgb(142, 142, 142)" }} />
            <Input placeholder="search" />
          </SearchContainer>
        </Right>
        <IconsContainer>
          <LinkItem Icon={<HomeIcon style={{ color: "black" }} />} />
          <LinkItem Icon={<MessageOutlinedIcon style={{ color: "black" }} />} />
          <LinkItem
            setNewPost={setNewPost}
            Icon={<AddBoxOutlinedIcon style={{ color: "black" }} />}
          />
          <LinkItem Icon={<FavoriteBorderIcon style={{ color: "black" }} />} />
          <LinkItem
            Icon={<AccountCircleOutlinedIcon style={{ color: "black" }} />}
          />
        </IconsContainer>
      </Container>
    </>
  );
};

export default Header;
//hem
