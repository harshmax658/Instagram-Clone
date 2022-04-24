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
  ImageIcon,
} from "./HeaderStyle";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import Dropdown from "./Dropdown/Dropdown";
import ImageComponent from "../IMG/ImageComponent";
import { useLocation } from "react-router-dom";
import LogedUserImage from "../LogedUserImage/LogedUserImage";

const Header = ({ call, renderWithMain ,setNewPost , render , renderDropDown }) => {

  const [renderProfileDrop, setRenderProfileDrop] = useState(false);
  const [renderLikeDrop, setRenderLikeDrop] = useState(false);
  const [renderList , setRenderList] = useState(true);


  React.useEffect(() => {
       setRenderLikeDrop(false)
       setRenderProfileDrop(false)
  },[renderWithMain])


  const location = useLocation();
  const checkActive = (value) => {
    return location.pathname === value;
  };

  const RenderLikeDropdown = () => {
    setRenderList(true)
    let value = !renderLikeDrop;
    setRenderLikeDrop(value);
    setRenderProfileDrop(false);
  };

  const RenderProfileDropdown = () => {
    let value = !renderProfileDrop; //true
    console.log("renderProfile",value);
    console.log("render", render)
    setRenderList(false)
    if(render === false && value === true){
      setRenderProfileDrop(true);
      setRenderLikeDrop(false);
    }else if(render === false && value === false){
      setRenderProfileDrop(false);
      setRenderLikeDrop(false);
    }
};

  //if click in image than like icon is false
  // if click in like icon than image render is false
  const renderProfileList = [
      {
      svg: <svg aria-label="Profile"  color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12.004" cy="12.004" fill="none" r="10.5" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle><path d="M18.793 20.014a6.08 6.08 0 00-1.778-2.447 3.991 3.991 0 00-2.386-.791H9.38a3.994 3.994 0 00-2.386.791 6.09 6.09 0 00-1.779 2.447" fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></path><circle cx="12.006" cy="9.718" fill="none" r="4.109" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="2"></circle></svg>,
      detail:"Profile",
      navigate:"profile",
      },
      {
      svg:<svg aria-label="Saved"  color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><polygon fill="none" points="20 21 12 13.44 4 21 4 3 20 3 20 21" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></polygon></svg>,
      detail:"Saved"
      },
      {
      svg: <svg aria-label="Settings"  color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><circle cx="12" cy="12" fill="none" r="8.635" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"></circle><path d="M14.232 3.656a1.269 1.269 0 01-.796-.66L12.93 2h-1.86l-.505.996a1.269 1.269 0 01-.796.66m-.001 16.688a1.269 1.269 0 01.796.66l.505.996h1.862l.505-.996a1.269 1.269 0 01.796-.66M3.656 9.768a1.269 1.269 0 01-.66.796L2 11.07v1.862l.996.505a1.269 1.269 0 01.66.796m16.688-.001a1.269 1.269 0 01.66-.796L22 12.93v-1.86l-.996-.505a1.269 1.269 0 01-.66-.796M7.678 4.522a1.269 1.269 0 01-1.03.096l-1.06-.348L4.27 5.587l.348 1.062a1.269 1.269 0 01-.096 1.03m11.8 11.799a1.269 1.269 0 011.03-.096l1.06.348 1.318-1.317-.348-1.062a1.269 1.269 0 01.096-1.03m-14.956.001a1.269 1.269 0 01.096 1.03l-.348 1.06 1.317 1.318 1.062-.348a1.269 1.269 0 011.03.096m11.799-11.8a1.269 1.269 0 01-.096-1.03l.348-1.06-1.317-1.318-1.062.348a1.269 1.269 0 01-1.03-.096" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"></path></svg>,
      detail:"Settings"
      },
      {
       svg: <svg aria-label="Switch Accounts"  color="#262626" fill="#262626" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M8 8.363a1 1 0 00-1-1H4.31a8.977 8.977 0 0114.054-1.727 1 1 0 101.414-1.414A11.003 11.003 0 003 5.672V3.363a1 1 0 10-2 0v5a1 1 0 001 1h5a1 1 0 001-1zm14 6.274h-5a1 1 0 000 2h2.69a8.977 8.977 0 01-14.054 1.727 1 1 0 00-1.414 1.414A11.004 11.004 0 0021 18.33v2.307a1 1 0 002 0v-5a1 1 0 00-1-1z"></path></svg>,
       detail:"Switch Accounts"     
      },
      { 
        borderTop:"1px solid black",
        detail:"Log Out"
      }
  ]


  const renderLikeList = [
    { 
      userProfileImage:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      img:"https://hemsingh780.github.io/hosted-assest/image1.jpeg",
      username:"jessaca",
      notificationDetail:"starting following you.",
      time:"1 day"
    }
  ]
  
  return (
    <>

      <Container call={call}  
       onClick={() => renderDropDown(RenderProfileDropdown , renderProfileDrop)}
      >
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
            <div style={{ position: "relative" }} onClick={RenderLikeDropdown}>
              <LinkItem
                Icon={<LoveSvg location={checkActive("/likes")} />}
                pathname="/likes"
                Dropdown={<Dropdown />}
              />
              {renderLikeDrop ? (
                <Dropdown width="500px" minheight="240px" right="-189%" justifyContent="space-between" renderLikeList={renderLikeList} renderList ={renderList }/>
              ) : null}
            </div>
            <div
              style={{ position: "relative" }}
              onClick={RenderProfileDropdown}
            >

              <ImageDiv>
                {/* <ImageIcon src="https://hemsingh780.github.io/hosted-assest/image1.jpeg" /> */}
                <LogedUserImage
                  width="23px"
                  height="23px"
                  location={checkActive("/likes")}
                />
              </ImageDiv>
              {renderProfileDrop ? (
                <Dropdown width="230px"  right="-83%"  render={renderProfileList} renderList ={renderList } renderLikeList={renderLikeList}/>
              ) : null}{" "}      
                    </div>
          </IconsContainer>
        </Center>
      </Container>
    </>
  );
};

export default Header;
//hem
