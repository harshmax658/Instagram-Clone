import { NavLink } from "react-router-dom";
import styled, { createGlobalStyle, css } from "styled-components";
import CustomButtonComponent from "../../components/custom button/CustomButtonComponent";

export const GlobalStyleCss = createGlobalStyle`
  .acti{
    color: yellow !important;
  }
`;
const dFJCAc = `display: flex;
justify-content: center;
align-items: center;`;
export const UserProfilePage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
`;

export const UserProfile = styled.div`
  /* border: 2px solid; */
  height: 100%;
  width: 75%;
  margin: 10px 0;
  display: flex;
  flex-direction: column;
`;
export const UserData = styled.div`
  display: flex;
  margin-bottom: 40px;
  /* border: 2px solid; */
`;

export const UserProfileImage = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  margin-right: 40px;
`;
export const UserInformation = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;

  justify-content: space-around;
`;

export const EditProfileButton = styled(CustomButtonComponent)`
  color: black;
  background: white;
  border: 1px solid lightgrey;
  padding: 0 8px;
  font-size: 12.5px;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 0.3px;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-end;
  margin-bottom: 20px;
`;

export const H2 = styled.h2`
  font-weight: 200;
  color: black;
  font-size: 1.8rem;
`;
export const EditButton = styled.h2`
  margin-left: 13px;
`;
export const SettingProfileButton = styled.div`
  margin-left: 15px;
  cursor: pointer;
`;
export const PostCount = styled.div``;
export const FollowersCount = styled.div``;
export const FollowingCount = styled.div``;
export const UserBioData = styled.div``;
export const UserBio = styled.div``;
export const UL = styled.ul`
  font-size: 1.2rem;
  display: flex;
  list-style: none;
  margin-bottom: 22px;

  & li {
    margin-right: 35px;

    & span {
      font-weight: bold;
    }
  }
`;
export const P = styled.p`
  ${({ username }) => username && "font-weight:bold"}
`;

export const UserPostsData = styled.div`
  border-top: 1px solid lightgray;
`;

const commanProperty = `
font-size: .89rem;
cursor:pointer;
 & span {
   
    display: flex;
    
    & svg {
      transform: scale(0.55);
    }
  }`;

export const UserPost = styled.div`
  display: flex;
  text-transform: uppercase;
  justify-content: center;
  margin-top: 16px;
  position: relative;
  top: -16px;
`;
export const SavedPost = styled.div`
  margin-right: 50px;
  ${commanProperty}
  ${dFJCAc}
`;
export const Tagged = styled.div`
  /* margin-right: 50px; */
  ${dFJCAc}
  ${commanProperty}
`;
export const Post = styled.div`
  margin-right: 50px;
  ${dFJCAc}
  ${commanProperty}
`;
export const PostLinks = styled(NavLink)`
  margin-right: 50px;
  color: #8e8e8e;
  text-decoration: none;
  ${dFJCAc}
  ${commanProperty}
  height: 55px;

  &.active {
    color: black !important;
    border-top: 1px solid;
    margin-top: 0px;
    border-spacing: 1cm 2em;
  }
`;
export const PostLinksDiv = styled.div`
  margin-right: 50px;
  color: #8e8e8e;
  text-decoration: none;
  ${dFJCAc}
  ${commanProperty}
`;
