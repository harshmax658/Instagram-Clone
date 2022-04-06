import React from "react";
import AddSvg from "../../svg/AddSvg";
import HomeSvg from "../../svg/HomeSvg";
import LoveSvg from "../../svg/LoveSvg";
import ExploreSvg from "../../svg/ExploreSvg";
import MessageSvg from "../../svg/MessageSvg";
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

const Header = ({ call }) => {
  return (
    <>
      <Container call={call}>
        <Left >
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
          {/* <LinkItem Icon={<HomeIcon  to="\" style={{ color: "black" }} />} />
          <LinkItem Icon={<MessageOutlinedIcon style={{ color: "black" }} />} />
          <LinkItem Icon={<AddBoxOutlinedIcon style={{ color: "black" }} />} />
          <LinkItem Icon={<FavoriteBorderIcon style={{ color: "black" }} />} /> */}
          {/* <LinkItem
            Icon={<AccountCircleOutlinedIcon style={{ color: "black" }} />}
          /> */}
           <div>
              <span>
                  <AddSvg />
              </span>
           </div>
           <div>
              <span>
                  <HomeSvg />
              </span>
           </div>
           <div>
              <span>
                  <MessageSvg />
              </span>
           </div>
           <div>
              <span>
                  <ExploreSvg />
              </span>
           </div>           
           <div>
              <span>
                  <LoveSvg />
              </span>
           </div>
        </IconsContainer>
      </Container>
    </>
  );
};

export default Header;
//hem
