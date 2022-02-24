import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { BrowserRouter as Router, Routes, Route , Link } from "react-router-dom";

export default function CustomSelect() {
  const [option, setOption] = React.useState('');

  const handleChange = (event) => {
    setOption(event.target.value);

  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">My Profile</InputLabel>
        <Select
          style={{marginRight:'5px' , border:'none'}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="My Profile"
          onChange={handleChange}
        >
          <MenuItem value={1}><Link to={'/view-profile'} style={{ textDecoration: 'none' }}>View Profile</Link></MenuItem>
        <MenuItem value={2}><Link to={'/edit-profile'} style={{ textDecoration: 'none' }}>Edit Profile</Link></MenuItem>
        <MenuItem value={3}><Link to={'/admin-panel'} style={{ textDecoration: 'none' }}>Admin Panel</Link></MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
