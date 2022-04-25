import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./InnerComponentStyle";

const InnerComponent = ({ render }) => {
  const navigate = useNavigate();
  return render.map((x, i) => {
    console.log(render);
    return (
      <Container
        onClick={
          x.navigate ? () => navigate(x.navigate) : x.onClick ? x.onClick : null
        }
        key={i}
        style={{
          borderTop: x.borderTop,
        }}
      >
        {x.svg}
        <span style={{}}>{x.detail}</span>
      </Container>
    );
  });
};

export default InnerComponent;
