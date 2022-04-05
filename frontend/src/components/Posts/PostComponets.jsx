import React, { useContext } from "react";

import {
  PostComponent,
  PostOwner,
  PostOwnerData,
  PostOwnerName,
  PostAction,
  PostImage,
  PostActionButtons,
  PostReactButton,
  PostDescription,
  LikesCount,
  CommnetCount,
  PostTimeDate,
  AddCommentOnPost,
  TextArea,
  PostDetails,
  GlobaLCss,
  PostSummary,
  CallByPostPage,
  ShadowOverlay,
  OverlayButtons,
} from "./PostStyle";

import { useNavigate } from "react-router-dom";

import ImageComponent from "../../components/IMG/ImageComponent";

import SavedSvg from "../../svg/SavedSvg";
import LoveSvg from "../../svg/LoveSvg";
import CommentsSvg from "../../svg/CommentsSvg";
import SendSvg from "../../svg/SendSvg";
import SmilyEmojiSvg from "../../svg/SmilyEmojiSvg";

import { PostCalling } from "../../pages/InstaHome/RouterHandler";
import LogedUserImage from "../LogedUserImage/LogedUserImage";
import FavoriteIcon from "@mui/icons-material/Favorite";
const PostComponets = ({ id, callByPostPage, userPost }) => {
  const postCalling = useContext(PostCalling);

  const navigate = useNavigate();

  const ProfilePostRedirect = (id = 1) => {
    postCalling &&
      postCalling.setDirectCallPostPage((prev) => {
        return {
          ...prev,
          direct: !postCalling.directCallPostPage.direct,
        };
      });
    navigate(`/p/${id}`);
  };
  return (
    <>
      <GlobaLCss callByPost={callByPostPage} />
      <PostComponent callByPostPage={callByPostPage} userPost={userPost}>
        {callByPostPage && <PostImage callByPostPage={callByPostPage} />}
        <CallByPostPage callByPostPage={callByPostPage}>
          {!userPost && (
            <PostOwner>
              <PostOwnerData>
                <LogedUserImage
                  image="https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBwcm9maWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
                  height="32px"
                  width="32px"
                />
                <PostOwnerName>RVCJ</PostOwnerName>
              </PostOwnerData>
              <div className="cursorPointer">
                <PostAction>...</PostAction>
              </div>
            </PostOwner>
          )}
          {!callByPostPage && userPost ? (
            <>
              <PostImage userPost={userPost}>
                <ShadowOverlay className="ShadowOverlay" />
                <OverlayButtons className="hiddenBtn">
                  <span onClick={() => ProfilePostRedirect(2)}>
                    <FavoriteIcon /> 23
                  </span>
                  <span onClick={() => ProfilePostRedirect(2)}>
                    <CommentsSvg /> 1
                  </span>
                </OverlayButtons>
              </PostImage>
            </>
          ) : (
            !callByPostPage && <PostImage userPost={userPost} />
          )}
          {!userPost && (
            <PostDetails>
              <PostActionButtons>
                <PostReactButton>
                  <div className="btn cursorPointer">
                    <LoveSvg />
                  </div>
                  <div
                    className="btn cursorPointer"
                    onClick={() => {
                      postCalling &&
                        console.log(
                          !postCalling.directCallPostPage.direct,
                          "!postCalling.directCallPostPage.direct"
                        );
                      postCalling.setDirectCallPostPage((prev) => {
                        return {
                          ...prev,
                          direct: !postCalling.directCallPostPage.direct,
                        };
                      });
                      navigate(`/p/${id}`);
                    }}
                  >
                    <CommentsSvg />
                  </div>
                  <div className="btn cursorPointer">
                    <SendSvg />
                  </div>
                </PostReactButton>
                <div className="savedBtn cursorPointer ">
                  <SavedSvg />
                </div>
              </PostActionButtons>
              <PostSummary>
                <LikesCount>44,801 likes</LikesCount>
                <PostDescription>
                  <span>rvcjinsta</span> In Hindi Belt... more
                </PostDescription>
                <CommnetCount>View all 194 comments</CommnetCount>
                <PostTimeDate>11 MINUTES AGO</PostTimeDate>
              </PostSummary>
            </PostDetails>
          )}
          {!userPost && (
            <AddCommentOnPost>
              <div className="emoji">
                <SmilyEmojiSvg />
              </div>
              <div className="commentText">
                <TextArea placeholder="Add a comment…"></TextArea>
                <div className="post">Post</div>
              </div>
            </AddCommentOnPost>
          )}
        </CallByPostPage>
      </PostComponent>
    </>
  );
};

export default PostComponets;
// harsh
