import React from "react";
import {
  UserProfilePage,
  UserProfile,
  UserData,
  UserInformation,
  EditProfileButton,
  UserProfileImage,
  Row,
  H2,
  EditButton,
  SettingProfileButton,
  UL,
  PostCount,
  FollowersCount,
  FollowingCount,
  UserBio,
  P,
  UserBioData,
  UserPostsData,
  UserPost,
  Post,
  SavedPost,
  Tagged,
  PostLinks,
} from "./ProfilePageStyle";
import LogedUserImage from "../../components/LogedUserImage/LogedUserImage";
import SettingProfileSvg from "../../svg/SettingProfileSvg";
import GridOnIcon from "@mui/icons-material/GridOn";
import SavedSvg from "../../svg/SavedSvg";
import TagSvg from "../../svg/TagSvg";
import { Outlet, useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
  const nav = useNavigate();
  const { saved, tagged } = useParams();
  console.log(saved, tagged);

  return (
    <UserProfilePage>
      <UserProfile>
        <UserData>
          <UserProfileImage>
            <LogedUserImage height="150px" width="150px" />
          </UserProfileImage>
          <UserInformation>
            <Row>
              <H2>harshk1611</H2>
              <EditButton>
                <EditProfileButton>Edit Profile</EditProfileButton>
              </EditButton>
              <SettingProfileButton>
                <SettingProfileSvg />
              </SettingProfileButton>
            </Row>

            <UL>
              <li>
                <PostCount>
                  <span>3</span> posts
                </PostCount>
              </li>
              <li>
                <FollowersCount>
                  <span>70</span> followers
                </FollowersCount>
              </li>
              <li>
                <FollowingCount>
                  <span>66</span> following
                </FollowingCount>
              </li>
            </UL>
            <UserBioData>
              <P username>Harsh</P>

              <UserBio>Ram Ram</UserBio>
            </UserBioData>
          </UserInformation>
        </UserData>
        <UserPostsData>
          {/* Conditional Rendering */}
          <UserPost>
            <PostLinks to="">
              <span>
                <GridOnIcon />
              </span>
              POSTs
            </PostLinks>
            <PostLinks to="saved">
              <span>
                <SavedSvg />
              </span>
              Saved
            </PostLinks>
            <PostLinks to="tagged">
              <span>
                <TagSvg />
              </span>
              Tagged
            </PostLinks>
          </UserPost>
        </UserPostsData>
        outlet
        <Outlet />
      </UserProfile>
    </UserProfilePage>
  );
};

export default ProfilePage;
// harsh
