import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardHeader from '@mui/material/CardHeader';
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

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import PhoneInput from 'mui-phone-input';
import { useDispatch, useSelector } from "react-redux";
import { SubmitStartForm } from '../../../actions/formActions';



const StartForm = () => {
  const [purpose, setPurpose] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [startDate, setStartDate] = React.useState(new Date());
  const dispatch = useDispatch();
  const handleSubmitStartForm = (event) => {
    dispatch(SubmitStartForm(phone,
      purpose,
      gender, startDate))
  };

  const handlePurposeChange = (event) => {

    setPurpose(event.target.value);
  }
  const handleGenderChange = (event) => {
    setGender(event.target.value);
  }
  const [phone, setPhone] = React.useState(null);

  return (
    <FormControl variant="filled" sx={{ m: 2, width: '100%' }}>
      <Typography>Please enter your phone number accurately - This will not be shown on your profile</Typography>
      <PhoneInput onChange={setPhone} />
      <br></br>
      <Typography>Are you filling this form out for yourself or someone else?</Typography>
      <br></br>



      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={purpose}
        onChange={handlePurposeChange}
        label="Purpose"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'I am filling the form out for myself'}>I am filling the form out for myself</MenuItem>
        <MenuItem value={'I am filling the form out for someone who is related to me (and I have their permission)'}>I am filling the form out for someone who is related to me (and I have their permission)</MenuItem>
        <MenuItem value={'I am filling the form out for a friend (and I have their permission)'}>I am filling the form out for a friend (and I have their permission)</MenuItem>
      </Select>
      <br></br>
      <Typography>Are you male or female?</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={gender}
        onChange={handleGenderChange}
        label="Gender"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Male'}>Male</MenuItem>
        <MenuItem value={'Female'}>Female</MenuItem>
      </Select>
      <br></br>
      <Typography>Date Of Birth</Typography>
      <br></br>
      <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{
          background: '#e5598f', fontSize: '18px', border: '5px solid white',
          borderRadius: '36px', color: '#fff', textTransform: 'capitalize',
          textDecoration: 'none', boxShadow: '0px 2px 14px 0px rgb(0 0 0 / 30%)',
          position: 'relative', left: '25px', top: '10px'
        }} onClick={handleSubmitStartForm} variant="outlined">Save</Button>
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
export default StartForm


