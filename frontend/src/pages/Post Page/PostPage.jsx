import React from "react";
import ReactDom from "react-dom";
import { useParams } from "react-router-dom";
import PostComponents from "../../components/Posts/PostComponets";
import { Section, Post } from "./PostPageStyle";

const Backdrop = ({ call }) => {
  return (
    // <></>
    <Section call={call} />
  );
};
const PostOverlay = () => {
  return (
    // <></>

    <Post>
      <PostComponents callByPostPage={true} />
    </Post>
  );
};

const PostPage = ({ call }) => {
  const param = useParams();

  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <Backdrop call={call} />,
        document.getElementById("overlay")
      )}

      {ReactDom.createPortal(
        <PostOverlay />,
        document.getElementById("overlay")
      )}
    </React.Fragment>
  );
};

export default PostPage;
// Harsh
