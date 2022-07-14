import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import adminService from '../services/admin.service';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function TotalMembersCard() {
  const [count, setCount] = React.useState();
  React.useEffect(async() => {
    // Update the document title using the browser API
    const res = await adminService.getTotalMembers()
    console.log('response' , res)
    const stringifyCount = res.toString()
    console.log('string count' , stringifyCount)
    setCount(res.data)
  },[]);

 
  return (
    <Card sx={{ minWidth: 275 }}>
        <div style={{textAlign:'center'}}>        
        <CardHeader  style={{color:'rgba(163, 19, 19, 0.65)' }} title={'Total Members'}></CardHeader>
        </div>
      <CardContent>
          <div style={{textAlign:'center'}}>
            <label style = {{fontSize: 20  , fontWeight:'bold' , color:'#666'}}>
              {count}
            </label>
        
        </div>
      </CardContent>
    </Card>
  );
}