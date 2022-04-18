import React from 'react'

const Notification = ({renderLikeList , justifyContent }) => {
  return (
   renderLikeList.map(x => 
    {
       return (
         <div style={{ display: "flex",alignItems: "center",gridGap:" 6px",padding: "8px" , justifyContent:justifyContent }}>
         <div
            style={{
               display:"flex",
               alignItems:"center",
               padding:"8px",
               gridGap:"5px"
            }}
            >
               <div>
                  <img  
                     src={x.userProfileImage}
                     style={{
                           width:"54px",
                           height:"54px",
                           borderRadius:"50%"
                     }}
                  /> 
               </div>
               <div 
               style={{
               paddingLeft:"5px"
               }}
               >
                  <span>{x.username}</span>{x.notificationDetail}<span
                  style={{
                     color:"#8e8e8e",
                     marginLeft:"5px" 
                  }}
                  >{x.time}</span>
               </div>
         </div>


         <div>
            {/* <button
               style={
                  {
                     outline:"none",
                     border:"none",
                     background:"#0095f6",
                     padding:"7px",
                     borderRadius:"5px",
                     color:"white",
                     fontWeight:"600"
                  }
               }
            >Following</button> */}
                        <img 
               style={{
                  width:"40px",
                  height:"40px",
                  objectFit:"cover"
               }}
            src={x.img}/>
   
         </div>
        </div>
       )
    }
   )
  )
}

export default Notification