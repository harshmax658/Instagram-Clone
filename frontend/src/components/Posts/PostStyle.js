import styled from "styled-components";
import { css } from "styled-components";

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

  padding: 0 15px;
`;
export const PostOwnerData = styled.div`
  display: flex;
`;

export const PostOwnerName = styled.p``;
export const PostAction = styled.div``;

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
  .savedBtn {
    margin: 0 10px;
  }
`;

export const PostReactButton = styled.div`
  display: flex;
  align-items: center;
  .btn {
    ${DisplayFlexJcAC}
    transform: scale(1);
    margin-left: 16px;

    svg {
      /* color: #8e8e8e; */
    }
  }
`;
