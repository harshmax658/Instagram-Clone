import React from 'react';
import { Container , searchContainer , Image , Input , ImgContainer , IconsContainer} from './HeaderStyle';
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
            <searchContainer>
               <Input placeholder='search'/>
            </searchContainer>
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
};

export default Header;
//hem