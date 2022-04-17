import React from 'react'
import { Container } from './DropdownStyle';
import InnerComponent from './InnerComponent';
import Notification from './Notification';

const Dropdown = ({ width , minheight , right  , render , justifyContent , renderList , renderLikeList}) => {
console.log("list",renderLikeList);
  return (
    <Container 
      width={width} 
      minheight={minheight} 
      right={right}
    >
   {renderList ? <Notification renderLikeList={renderLikeList} justifyContent={justifyContent}/>
      : <InnerComponent render={render}/>  
    }
    </Container>
  )
}

export default Dropdown