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
  Input,
  Left,
  Right,
  Center,
} from "./HeaderStyle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

import ImageComponent from "../IMG/ImageComponent";
import { useLocation } from "react-router-dom";
import LogedUserImage from "../LogedUserImage/LogedUserImage";

const Header = ({ call, setNewPost }) => {
  const [value, setValue] = useState(false);
  const location = useLocation();
  const checkActive = (value) => {
    return location.pathname === value;
  };

  return (
    <>
      <Container call={call}>
        <Center>
          <Left>
            <LinkItem
              Icon={
                <ImageComponent
                  src="/images/instagram.jpg"
                  width="100px"
                  height="30px"
                />
              }
              pathname="/"
            />
          </Left>
          <Right className="right">
            <SearchContainer>
              <SearchIcon style={{ color: "rgb(142, 142, 142)" }} />
              <Input placeholder="search" />
            </SearchContainer>
          </Right>

          <IconsContainer className="icons">
            {/* <div>
              <AddSvg />
            </div>  */}

            <LinkItem
              Icon={<HomeSvg location={checkActive("/")} />}
              pathname="/"
            />
            <LinkItem
              Icon={<MessageSvg location={checkActive("/inbox")} />}
              pathname="/inbox"
              onClick={() => setValue(true)}
            />
            <LinkItem
              Icon={<AddSvg location={checkActive("/")} />}
              pathname="/ss"
              setNewPost={setNewPost}
            />
            <LinkItem
              Icon={<ExploreSvg location={checkActive("/explore")} />}
              pathname="/explore"
            />
            <LinkItem
              Icon={<LoveSvg location={checkActive("/likes")} />}
              pathname="/likes"
            />
            <LinkItem
              Icon={
                <LogedUserImage
                  width="23px"
                  height="23px"
                  location={checkActive("/likes")}
                />
              }
              pathname="profile"
            />
          </IconsContainer>
        </Center>
      </Container>
    </>
  );
};

export default Header;
//hem
