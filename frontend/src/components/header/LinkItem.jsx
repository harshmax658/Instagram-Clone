import React from 'react';
import { Link } from '@mui/material';
import { IconStyle } from './HeaderStyle';

const LinkItem = ({Icon}) => {
  return (
  <IconStyle>
    <Link>
           {Icon}
    </Link>
  </IconStyle>  
  );
};

export default LinkItem;
