import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loader() {
  return (
     
      <CircularProgress style={{display: 'block' , position:'relative' , left: '50%',
      marginLeft: '-4em' , top:'200px' , width:'10%' , height:'10%' }} />
  );
}