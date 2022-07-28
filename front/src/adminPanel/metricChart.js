import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Devexpressreactchart from './devexpressreactchart'
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
  const [Data, setData] = React.useState()
  React.useEffect(async () => {
    const matchResult = await getTotalMatches()
    const likeResult = await getTotalLikes()
    const memberResult = await getTotalMembers()
    const viewResult = await getTotalViews()
    const data = [
      { Argument: 'members', value: matchResult },
      { Argument: 'likes', value: likeResult },
      { Argument: 'matches', value: memberResult },
      { Argument: 'views', value: viewResult },
    ];
    setData(data)
  }, []);

  const getTotalMembers = async () => {
    const res = await adminService.getTotalMembers()
    return res.data
  }
  const getTotalLikes = async () => {
    const res = await adminService.getTotalLikes()
    return res.data
  }
  const getTotalMatches = async () => {
    const res = await adminService.getTotalMatches()
    return res.data
  }
  const getTotalViews = async () => {
    const res = await adminService.getTotalViews()
    return res.data
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        {Data !== undefined ? (
          <Devexpressreactchart dataObj={Data} />
        ) : ''}
      </CardContent>
    </Card>
  );
}