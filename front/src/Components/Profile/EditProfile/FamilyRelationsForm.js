import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import  CardHeader  from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from "@mui/icons-material/StarBorderOutlined"
import CompassIcon from '@mui/icons-material/CompassCalibrationOutlined'
import FilesIcon from '@mui/icons-material/FileCopySharp'
import AtomIcon from '@mui/icons-material/VerifiedUserOutlined'
import FamilyIcon from '@mui/icons-material/PeopleOutline'
import FriendsIcon from '@mui/icons-material/ContactsOutlined'
import ProfessionIcon from '@mui/icons-material/LocalPostOfficeOutlined'
import { Container } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { TextareaAutosize } from '@mui/material';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';



const FamilyRelationsForm = ()=>{
    const [age, setAge] = React.useState('');
      
        const handleChange = (event) => {
          setAge(event.target.value);
        }
    const [value, setValue] = React.useState(null);

    return(
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Typography>Are you filling this form out for yourself or someone else?</Typography>
    
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={age}
      onChange={handleChange}
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <Typography>Are you male or female?</Typography>
    
    <Select
      labelId="demo-simple-select-standard-label"
      id="demo-simple-select-standard"
      value={age}
      onChange={handleChange}
      label="Age"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      <MenuItem value={10}>Ten</MenuItem>
      <MenuItem value={20}>Twenty</MenuItem>
      <MenuItem value={30}>Thirty</MenuItem>
    </Select>
    <Typography>How many of the 5 prayers a day do you usually pray in the masjid?</Typography>
    <TextField id="standard-basic"  variant="standard" />
    <TextareaAutosize style={{height:80}}></TextareaAutosize>
    <div style={{display:'flex' , justifyContent:'center'}}>
    <Button style={{background:'#e5598f' , fontSize:'18px' , border:'5px solid white' ,
     borderRadius:'0px' , color:'#fff' , textTransform:'lowercase' ,
      textDecoration:'none'}} variant="outlined">Save</Button>
      </div>
    
    {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}
    
  </FormControl>
    )
}
export default FamilyRelationsForm


