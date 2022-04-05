import React from "react";
import ReactDom from "react-dom";
// import { useParams } from "react-router-dom";
import PostComponents from "../../components/Posts/PostComponets";
import { Section, Post, CloseBtn } from "./PostPageStyle";

import CloseIcon from "@mui/icons-material/Close";

const Backdrop = ({ call, closeBtn }) => {
  return (
    <Section call={call} onClick={closeBtn}>
      <CloseBtn>
        <CloseIcon />
      </CloseBtn>
    </Section>
  );
};
const PostOverlay = ({ call }) => {
  return (
    <Post call={call}>
      <PostComponents callByPostPage={true} />
    </Post>
  );
};

const PostPage = ({ call, closeBtn }) => {
  return (
    <React.Fragment>
      {call &&
        ReactDom.createPortal(
          <Backdrop call={call} closeBtn={closeBtn} />,
          document.getElementById("overlay")
        )}

      {call ? (
        ReactDom.createPortal(
          <PostOverlay call={call} />,
          document.getElementById("overlay")
        )
      ) : (
        <PostOverlay call={call} />
      )}
    </React.Fragment>
  );
};

export default PostPage;
// Harsh
