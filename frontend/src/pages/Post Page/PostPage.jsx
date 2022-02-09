import React from "react";
import { useParams } from "react-router-dom";
import { Section } from "./PostPageStyle";

const PostPage = ({ call }) => {
  console.log(call);
  const param = useParams();
  console.log(param.postId);

  return (
    <Section>
      section Load
      <br />
      {call ? "true" : "false"}
    </Section>
  );
};

export default PostPage;
