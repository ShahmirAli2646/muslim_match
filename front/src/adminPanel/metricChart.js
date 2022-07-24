import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Devexpressreactchart  from './devexpressreactchart'
import adminService from '../services/admin.service';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const [members, setMembers] = React.useState(0);
  const [likes, setLikes] = React.useState(0);
  const [matches, setMatches] = React.useState(0);
  const [views, setViews] = React.useState(0);
  const [Data , setData] = React.useState()
  React.useEffect(async() => {
   let dataObj =  {}
   const matchResult =  await  getTotalMatches()
   const likeResult =  await getTotalLikes()
   const memberResult =  await getTotalMembers()
   const viewResult = await getTotalViews()
   dataObj.matches = matchResult;
   dataObj.likes = likeResult;
   dataObj.members = memberResult;
   dataObj.views = viewResult
   console.log('dataObj' , dataObj)
   setData(dataObj)
  },[]);

  const getTotalMembers = async() => {
      const res = await adminService.getTotalMembers()
      setMembers(res.data)
      return res.data
  }
  const getTotalLikes = async() => {
    const res = await adminService.getTotalLikes()
    console.log('likes response' , res)
    setLikes(res.data)
    return res.data
  }
  const getTotalMatches = async () => {
      const res = await adminService.getTotalMatches()
      setMatches(res.data)
      return res.data
  }
  const getTotalViews = async () => {
    const res = await adminService.getTotalViews()
    setViews(res.data)
    return res.data
  }
  return (
    <Card sx={{ minWidth: 275 }}>
        
      <CardContent>
        <Devexpressreactchart dataObj={Data} />
      </CardContent>
    </Card>
  );
}