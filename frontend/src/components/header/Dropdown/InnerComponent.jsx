
import React from 'react'
const InnerComponent = ({render}) => {
return render.map((x,i) => {
  return (
      <div key = {i} style={{ display: "flex",alignItems: "center",gridGap:" 6px",padding: "8px" , borderTop:x.borderTop}  }>
        {x.svg}
        <span style={{
        }}>{x.detail}</span>     
      </div>
   )
  })  
}

export default InnerComponent