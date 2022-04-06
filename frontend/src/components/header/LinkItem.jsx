import React from 'react';
import { Link } from '@mui/material';
import { IconStyle } from './HeaderStyle';

const LinkItem = ({Icon , link}) => {
  return (
  <IconStyle>
    <Link to={link}>
           {Icon}
    </Link>
  </IconStyle>  
  );
};

export default LinkItem;
