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
  PostLinks,
  GlobalStyleCss,
  PostLinksDiv,
} from "./ProfilePageStyle";
import LogedUserImage from "../../components/LogedUserImage/LogedUserImage";
import SettingProfileSvg from "../../svg/SettingProfileSvg";
import GridOnIcon from "@mui/icons-material/GridOn";
import SavedSvg from "../../svg/SavedSvg";
import TagSvg from "../../svg/TagSvg";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

const ProfilePage = () => {
  const nav = useNavigate();
  const location = useLocation();

  return (
    <>
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
              {location.pathname === "/profile" ? (
                <PostLinks to="">
                  <span>
                    <GridOnIcon />
                  </span>
                  POSTs
                </PostLinks>
              ) : (
                <PostLinksDiv onClick={() => nav("")}>
                  <span>
                    <GridOnIcon />
                  </span>
                  POSTs
                </PostLinksDiv>
              )}
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

          <Outlet />
        </UserProfile>
      </UserProfilePage>
      <GlobalStyleCss />
    </>
  );
};

export default ProfilePage;
// harsh
