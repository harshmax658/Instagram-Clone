import styled, { createGlobalStyle } from "styled-components";
import { css } from "styled-components";

export const GlobaLCss = createGlobalStyle`
.cursorPointer{
  cursor: pointer;
}
`;

const DisplayFlexJcAC = css`
  display: flex;
  align-items: center;
  justify-items: center;
`;

export const PostComponent = styled.div`
  border: 1px solid gray;
`;

export const PostOwner = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 14px 15px;
`;
export const PostOwnerData = styled.div`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
  }
`;

export const PostOwnerName = styled.p`
  margin-left: 15px;
`;
export const PostAction = styled.div`
  transform: scale(2);
  font-weight: bold;
`;

export const PostImage = styled.div`
  background: url("https://images.unsplash.com/photo-1643273038626-59942bbad9ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")
    center center/cover;
  background-size: cover;
  width: 100%;
  height: 500px;
`;

export const PostActionButtons = styled.div`
  display: flex;
  justify-content: space-between;

  .btn {
    ${DisplayFlexJcAC}
    transform: scale(1);
    margin-right: 14px;

    svg {
      /* color: #8e8e8e; */
    }
  }
`;

export const PostReactButton = styled.div`
  display: flex;
  align-items: center;
`;

export const LikesCount = styled.div``;

export const PostDescription = styled.div``;

export const CommnetCout = styled.div``;
export const PostTimeDate = styled.div``;

export const AddCommentOnPost = styled.div`
  ${DisplayFlexJcAC}
  border-top: 1px solid gray;
  position: relative;
  height: 60px;
  .commentText {
    flex-grow: 1;
  }
  .emoji {
    margin: 0 20px;
  }
  .post {
    position: absolute;
    right: 14px;
    align-items: center;
    align-content: flex-start;
    top: 3px;
  }
`;

export const TextArea = styled.textarea`
  height: 36px;
  resize: none;
  width: 100%;
  border: none;
  outline: none;
  /* overflow-y: hidden; */
`;

export const PostDetails = styled.div`
  padding: 10px;
`;

export const PostSummary = styled.div`
  padding: 15px 0;
`;
