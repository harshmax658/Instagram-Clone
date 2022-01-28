import React from 'react';
import { Link } from '@mui/material';
import { IconStyle } from './HeaderStyle';

const LinkItem = ({Icon}) => {
  return (
    <Link>
      <IconStyle>
           {Icon}
       </IconStyle>  
    </Link>
  );
};

export default LinkItem;
