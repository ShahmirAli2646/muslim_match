import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TotalMembersCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
        <div style={{textAlign:'center'}}>

        
        <CardHeader  style={{color:'rgba(163, 19, 19, 0.65)' }} title={'Total Members'}></CardHeader>
        </div>
      <CardContent>
          <div style={{textAlign:'center'}}>
        <Typography sx={{ fontSize: 20  , fontWeight:'bold' , color:'#666'}} color="text.secondary" gutterBottom>
          {'400'}
        </Typography>
        </div>
      </CardContent>
    </Card>
  );
}