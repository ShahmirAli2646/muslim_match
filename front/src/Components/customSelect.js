import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function CustomSelect() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
      <Button style={{color:'rgb(137 134 134)' , textTransform:'capitalize' , fontFamily:'sans-serif' , fontWeight:'bold' , fontSize:'15px'}} aria-describedby={id} variant="text" onClick={handleClick}>
        My Profile
      </Button>
      <Popover
        
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      > 
        <div style={{padding:'20px' , display:'flex'  , flexDirection:'column' , paddingRight:'100px'}}>
        <Typography style={{fontFamily:'sans-serif' , fontWeight:'bold' , fontSize:'14px' , color:'#666'}} sx={{ p: 1 }}><Link to={'/view-profile'} style={{ textDecoration: 'none' , color:'#666' }}>View Profile</Link></Typography>
        <Typography style={{fontFamily:'sans-serif' , fontWeight:'bold' , fontSize:'14px' , color:'#666'}} sx={{ p: 1 }}><Link to={'/edit-profile'} style={{ textDecoration: 'none' , color:'#666' }}>Edit Profile</Link></Typography>
        <Typography style={{fontFamily:'sans-serif' , fontWeight:'bold' , fontSize:'14px' , color:'#666'}} sx={{ p: 1 }}><Link to={'/admin-panel'} style={{ textDecoration: 'none' , color:'#666' }}>Admin Panel</Link></Typography>
        </div>
      </Popover>
      </FormControl>
    </Box>
  );
}
