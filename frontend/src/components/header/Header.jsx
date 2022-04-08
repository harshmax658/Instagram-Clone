import React from "react";
import AddSvg from "../../svg/AddSvg";
import HomeSvg from "../../svg/HomeSvg";
import LoveSvg from "../../svg/LoveSvg";
import ExploreSvg from "../../svg/ExploreSvg";
import MessageSvg from "../../svg/MessageSvg";
import LinkItem from "./LinkItem";
import {
  Container,
  SearchContainer,
  IconsContainer,
  Image,
  Input,
  Left,
  Right,
} from "./HeaderStyle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

const Header = ({ call, setNewPost }) => {
  const [value, setValue] = useState(false);
  console.log(value);
  return (
    <>
      <Container call={call}>
        <Left>
          <a href="\">
            <Image src="https://hemsingh780.github.io/hosted-assest/instagram.png" />
          </a>
        </Left>
        <Right>
          <SearchContainer>
            <SearchIcon style={{ color: "rgb(142, 142, 142)" }} />
            <Input placeholder="search" />
          </SearchContainer>
        </Right>
        <IconsContainer>
          {/* <div>
              <AddSvg />
            </div>  */}
          <LinkItem Icon={<HomeSvg />} pathname="/" />
          <LinkItem
            Icon={<MessageSvg />}
            pathname="/"
            
          />
          <LinkItem Icon={<AddSvg />} pathname="/" setNewPost={setNewPost} />
          <LinkItem Icon={<ExploreSvg />} pathname="/" />
          <LinkItem Icon={<LoveSvg />} pathname="/" />
        </IconsContainer>
      </Container>
    </>
  );
};

export default Header;
//hem
