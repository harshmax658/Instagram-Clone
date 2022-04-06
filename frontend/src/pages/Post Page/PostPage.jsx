import React from "react";
import ReactDom from "react-dom";

import PostComponents from "../../components/Posts/PostComponets";

import Backdrop from "../../components/BackDrop/BackDrop";
import OverLay from "../../components/BackDrop/OverLay";

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
          <OverLay call={call}>
            <PostComponents callByPostPage={true} />
          </OverLay>,
          document.getElementById("overlay")
        )
      ) : (
        <OverLay call={call}>
          <PostComponents callByPostPage={true} />
        </OverLay>
      )}
    </React.Fragment>
  );
};

export default PostPage;
// Harsh
