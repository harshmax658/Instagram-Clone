<<<<<<< HEAD
import React from "react";
import {
  Container,
  SearchContainerBox,
  Image,
  Input,
  ImgContainer,
  IconsContainer,
} from "./HeaderStyle";
import LinkItem from "./LinkItem";
import HomeIcon from "@mui/icons-material/Home";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = () => {
  return (
    <>
      <Container>
        <ImgContainer>
          <Image src="https://hemsingh780.github.io/hosted-assest/instagram.png" />
        </ImgContainer>
        <SearchContainerBox>
          <Input placeholder="search" />
        </SearchContainerBox>
        <IconsContainer>
          <LinkItem Icon={<HomeIcon />} />
          <LinkItem Icon={<MessageOutlinedIcon />} />
          <LinkItem Icon={<AddBoxOutlinedIcon />} />
          <LinkItem Icon={<FavoriteBorderIcon />} />
          <LinkItem Icon={<AccountCircleOutlinedIcon />} />
        </IconsContainer>
      </Container>
    </>
  );
=======
import React from 'react';
import { Container , SearchContainer , Image , Input , ImgContainer , IconsContainer} from './HeaderStyle';
import LinkItem from './LinkItem';
import HomeIcon from '@mui/icons-material/Home';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const Header = () => {
  return (
      <>
        <Container>
            <ImgContainer>
                <Image src='https://hemsingh780.github.io/hosted-assest/instagram.png' />
            </ImgContainer>
            <SearchContainer>
               <Input placeholder='search'/>
            </SearchContainer>
            <IconsContainer>
                <LinkItem Icon = {<HomeIcon />} />
                <LinkItem Icon = {<MessageOutlinedIcon /> } />
                <LinkItem Icon = {<AddBoxOutlinedIcon /> } />
                <LinkItem Icon = {<FavoriteBorderIcon /> } />
                <LinkItem Icon = {<AccountCircleOutlinedIcon /> } /> 
            </IconsContainer>
        </Container>
      </>
    );
>>>>>>> 08dfcd1bdb4a96756e8a6f1d02293e1b9ebb3a46
};

export default Header;
//hem
