import React from 'react'
import { useNavigate } from 'react-router-dom'
import {Container} from "./InnerComponentStyle"

const InnerComponent = ({render}) => {
  const navigate = useNavigate();
 return render.map((x,i) => {
    return (
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

export default InnerComponent