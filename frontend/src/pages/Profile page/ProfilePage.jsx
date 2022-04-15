import React, { useContext, useEffect } from "react";
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
  UserPosts,
  PostLinks,
  GlobalStyleCss,
  PostLinksDiv,
} from "./ProfilePageStyle";
import LogedUserImage from "../../components/LogedUserImage/LogedUserImage";
import SettingProfileSvg from "../../svg/SettingProfileSvg";
import GridOnIcon from "@mui/icons-material/GridOn";
import SavedSvg from "../../svg/SavedSvg";
import TagSvg from "../../svg/TagSvg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PostPage from "../Post Page/PostPage";
import { ProfilePageCalling } from "../../pages/InstaHome/RouterHandler";
import UserPost from "../../components/UserPosts/UserPost";
import { useSelector } from "react-redux";

const ProfilePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { post, followers, following, userName, fullName } = useSelector(
    ({ userReducer }) => userReducer
  );

  const postCalling = useContext(ProfilePageCalling);

  useEffect(() => {
    postCalling?.setDirectCallPostPage((prev) => {
      return {
        ...prev,
        profilePage: !postCalling?.directCallPostPage?.profilePage,
      };
    });
  }, []);
  return (
    <>
      <UserProfilePage call={postCalling.directCallPostPage.profilePageDirect}>
        <UserProfile>
          <UserData>
            <UserProfileImage>
              <LogedUserImage height="150px" width="150px" />
            </UserProfileImage>
            <UserInformation>
              <Row>
                <H2>{userName}</H2>
                <EditButton>
                  <EditProfileButton onClick={() => navigate("/accounts/edit")}>
                    Edit Profile
                  </EditProfileButton>
                </EditButton>
                <SettingProfileButton>
                  <SettingProfileSvg />
                </SettingProfileButton>
              </Row>

              <UL>
                <li>
                  <PostCount>
                    <span>{post.length}</span> posts
                  </PostCount>
                </li>
                <li>
                  <FollowersCount>
                    <span>{followers.length}</span> followers
                  </FollowersCount>
                </li>
                <li>
                  <FollowingCount>
                    <span>{following.length}</span> following
                  </FollowingCount>
                </li>
              </UL>
              <UserBioData>
                <P username>{fullName}</P>

                <UserBio>Ram Ram</UserBio>
              </UserBioData>
            </UserInformation>
          </UserData>
          <UserPostsData>
            {/* Conditional Rendering */}
            <UserPosts>
              {location.pathname === "/profile" ? (
                <PostLinks to="">
                  <span>
                    <GridOnIcon />
                  </span>
                  POSTs
                </PostLinks>
              ) : (
                <PostLinksDiv onClick={() => navigate("")}>
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
            </UserPosts>
          </UserPostsData>

          <UserPost />
        </UserProfile>
      </UserProfilePage>
      <GlobalStyleCss />

      {postCalling.directCallPostPage.profilePageDirect && (
        <PostPage
          call={postCalling.directCallPostPage.profilePageDirect}
          closeBtn={postCalling.closeBackDropOfPost}
        />
      )}
    </>
  );
};

export default ProfilePage;
// harsh
