import React from "react";
import { useParams } from "react-router-dom";
import PostComponents from "../../components/Posts/PostComponets";
import { Section, Post } from "./PostPageStyle";

const PostPage = ({ call }) => {
  const param = useParams();

  return (
    <Section call={call}>
      <Post>
        <PostComponents callByPostPage={true} />
      </Post>
    </Section>
  );
};

export default PostPage;
// Harsh
