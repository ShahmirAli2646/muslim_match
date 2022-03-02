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

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch, useSelector } from "react-redux";
import { SubmitFriendshipsForm } from '../../../actions/formActions';


const FriendShipsForm = () => {
  const [timefriends, setTimeFriends] = React.useState('');
  const [freemixwomen, setFreeMixWomen] = React.useState('');
  const [freemixmen, setFreeMixMen] = React.useState('');
  const [religiousfriends, setReligiousFriends] = React.useState('');
  const [sectfriends, setSectFriends] = React.useState('');
  const [personality, setPersonality] = React.useState('');
  const dispatch = useDispatch();
  const handleSubmitFriendshipsForm = (event) => {
    dispatch(SubmitFriendshipsForm(
      timefriends,
      religiousfriends,
      sectfriends,
      personality,
      freemixmen, freemixwomen,

    ))
  };


  const handleFreeMixWomenChange = (event) => {
    setFreeMixWomen(event.target.value);
  }
  const handleFreeMixMenChange = (event) => {
    setFreeMixMen(event.target.value);
  }
  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>Do you spend a lot of time with friends What activities do you do with your friends</Typography>
      <br></br>
      <TextField value={timefriends} onChange={(event) => {
        setTimeFriends(event.target.value)
      }} variant="filled" />
      <br></br>
      <Typography>
        Are your friends religious
      </Typography>
      <br></br>

      <TextField value={religiousfriends} onChange={(event) => {
        setReligiousFriends(event.target.value)
      }} variant="filled" />
      <br></br>
      <Typography>What sect/following of Islam do your friends practice</Typography>
      <br></br>
      <TextField value={sectfriends} onChange={(event) => {
        setSectFriends(event.target.value)
      }} variant="filled" />
      <br></br>
      <Typography>How might your friends describe your personality</Typography>
      <br></br>
      <TextField value={personality} onChange={(event) => {
        setPersonality(event.target.value)
      }} variant="filled" />
      <br></br>
      <Typography>Would you want your future husband to free-mix with your friends</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={freemixwomen}
        onChange={handleFreeMixWomenChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No I would want them to try to avoid each other at all times'}>No I would want them to try to avoid each other at all times</MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'I am happy for my future husband and my female friends having a chat when they see each other'}>
          I am happy for my future husband and my female friends
          having a chat when they see each other
        </MenuItem>
        <MenuItem value={'I would want my husband to come out with me and my friends ( i.e go for a meal and sit together)'}>
          I would want my husband to come out with me and my friends
          ( i.e go for a meal and sit together)
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Would you want your future wife to free-mix with your friends</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={freemixmen}
        onChange={handleFreeMixMenChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No - I would want them to try to avoid each other at all times'}>No I would want them to try to avoid each other at all times</MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'I am happy for my future wife and my male friends having a chat when they see each other'}>
          I am happy for my future wife and my male friends having a
          chat when they see each other

        </MenuItem>
        <MenuItem value={'I would want my wife to come out with me and my friends (i.e go for a meal and sit together)'}>
          I would want my wife to come out with me and my friends (i.e
          go for a meal and sit together)

        </MenuItem>
      </Select>
      <br></br>



      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{
          background: '#e5598f', fontSize: '18px', border: '5px solid white',
          borderRadius: '36px', color: '#fff', textTransform: 'capitalize',
          textDecoration: 'none', boxShadow: '0px 2px 14px 0px rgb(0 0 0 / 30%)',
          position: 'relative', left: '25px', top: '10px'
        }} onClick={handleSubmitFriendshipsForm} variant="outlined">Save</Button>
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
export default FriendShipsForm


