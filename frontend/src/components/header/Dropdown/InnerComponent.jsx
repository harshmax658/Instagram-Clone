import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "./InnerComponentStyle";

const InnerComponent = ({ render }) => {
  const navigate = useNavigate();
  return render.map((x, i) => {
    console.log(render);
    return (
<<<<<<< HEAD
        <Container 
          onClick={x.navigate ? () => navigate(x.navigate) : null}
          key = {i} 
          style={{ 
             gridGap:"8px",
            borderTop:x.borderTop
            }}>
          {x.svg}
          <span style={{
          }}>{x.detail}</span>     
        </Container>
    )
  })  
}
=======
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
>>>>>>> e20caf1853bdc86d0a25fc32ac5a1b11db9b720a

export default InnerComponent;
