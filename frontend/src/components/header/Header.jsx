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
  ImageDiv,
  ImageIcon
} from "./HeaderStyle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Dropdown from './Dropdown/Dropdown';
import ImageComponent from "../IMG/ImageComponent";
import { useLocation } from "react-router-dom";
const Header = ({ call, setNewPost }) => {
  const [renderProfileDrop , setRenderProfileDrop] = useState(false);
  const [renderLikeDrop , setRenderLikeDrop] = useState(false);
  const location = useLocation();
  const checkActive = (value) => {
    return location.pathname === value;
  };

  const RenderLikeDropdown  = () => {
    let value = !renderLikeDrop
     setRenderLikeDrop(value)
     setRenderProfileDrop(false)     
  }
  const RenderProfileDropdown  = () => {
    let value = !renderProfileDrop //true    
    setRenderLikeDrop(false)
    setRenderProfileDrop(value)
 }
  //if click in image than like icon is false 
  // if click in like icon than image render is false 
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
      <div>

              <LinkItem
                Icon={<HomeSvg location={checkActive("/")} />}
                pathname="/"
              />

      </div>

      <div>

              <LinkItem
                Icon={<MessageSvg location={checkActive("/inbox")} />}
                pathname="/inbox"
              />

      </div>

      <div>

              <LinkItem
                Icon={<AddSvg location={checkActive("/")} />}
                pathname="/ss"
                setNewPost={setNewPost}
              />

      </div>

      <div>

              <LinkItem
                Icon={<ExploreSvg location={checkActive("/explore")} />}
                pathname="/explore"
              />
                  
      </div>
      <div style={{position:"relative"}} onClick={RenderLikeDropdown}>

              <LinkItem
                Icon={<LoveSvg location={checkActive("/likes")} />}
                pathname="/likes"
                Dropdown={<Dropdown />}
              />
{  renderLikeDrop ?      <Dropdown 
          width="500px"
          minheight="240px"
          right="-189%"
      /> : null
}              
      </div>
      <div style={{position:"relative"}} onClick={RenderProfileDropdown}>
              <ImageDiv>
                  <ImageIcon src="https://hemsingh780.github.io/hosted-assest/image1.jpeg"/>
              </ImageDiv>
{ renderProfileDrop ?       <Dropdown 
          width="230px"
          minheight="194px"
          right="-83%"
        /> : null
}      </div>

          </IconsContainer>
        </Center>
      </Container>
    </>
  );
};

export default Header;
//hem
