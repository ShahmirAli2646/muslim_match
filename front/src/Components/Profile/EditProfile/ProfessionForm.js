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
import { SubmitProfessionForm } from '../../../actions/formActions';



const ProfessionForm = () => {
  const [wifeprofession, setWifeProfession] = React.useState('');
  const [myprofession, setMyProfession] = React.useState('');
  const [husbandprofession, setHusbandProfession] = React.useState('');
  const [partnereducation, setPartnerEducation] = React.useState('');
  const [myeducation, setMyEducation] = React.useState('');
  const dispatch = useDispatch();
  const handleSubmitProfessionForm = (event) => {
    dispatch(SubmitProfessionForm(
      wifeprofession,
      husbandprofession,
      partnereducation,
      myprofession,
      myeducation,
    ))
  };

  const handleWifeProfessionChange = (event) => {
    setWifeProfession(event.target.value);
  }
  const handleMyEducationChange = (event) => {
    setMyEducation(event.target.value);
  }
  const handleHusbandProfessionChange = (event) => {
    setHusbandProfession(event.target.value);
  }
  const handlePartnerEducationChange = (event) => {
    setPartnerEducation(event.target.value);
  }


  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>Which profession status describe what you want your future wife to have (select all that apply)</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={wifeprofession}
        onChange={handleWifeProfessionChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'I would rather she did not work'}>I would rather she did not work</MenuItem>
        <MenuItem value={"If no men are around then I don't mind her wanting to work"}>If no men are around then I don't mind her wanting to work</MenuItem>
        <MenuItem value={"I don't mind her working in a free-mixing environment"}>I don't mind her working in a free-mixing environment</MenuItem>
        <MenuItem value={'She must be a professional'}>She must be a professional</MenuItem>
        <MenuItem value={'Student'}>Student</MenuItem>
      </Select>
      <br></br>
      <Typography>Which profession status/s describe what you want your future husband to have (select all that apply)</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={husbandprofession}
        onChange={handleHusbandProfessionChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I don't mind as long as he is working"}>I don't mind as long as he is working</MenuItem>
        <MenuItem value={"He must be a professional"}>He must be a professional</MenuItem>
        <MenuItem value={"I don't mind her working in a free-mixing environment"}>I don't mind her working in a free-mixing environment</MenuItem>
        <MenuItem value={'I would only marry someone who is very wealthy'}>I would only marry someone who is very wealthy</MenuItem>
        <MenuItem value={'I dont mind if he isnt working (as long as he is looking for workand trying)'}>
          I don't mind if he isn't working (as long as he is looking for work
          and trying)
        </MenuItem>
        <MenuItem value={"I don't mind if he doesn't work"}>
          I don't mind if he doesn't work
        </MenuItem>
        <MenuItem value={'Student'}>
          Student
        </MenuItem>
        <MenuItem value={'He must be able to provide for me'}>
          He must be able to provide for me
        </MenuItem>
      </Select>
      <br></br>
      <Typography>The minimum level of education you want your marriage partner to have completed</Typography>
      <br></br>


      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={partnereducation}
        onChange={handlePartnerEducationChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I don't mind"}>I don't mind</MenuItem>
        <MenuItem value={"Must have completed school"}>Must have completed school</MenuItem>
        <MenuItem value={"Must have completed college"}>Must have completed college</MenuItem>
        <MenuItem value={"Must have a degree"}>Must have a degree</MenuItem>
      </Select>
      <br></br>
      <Typography>What is your profession</Typography>
      <br></br>
      <TextField value={myprofession} onChange={(event) => {
        setMyProfession(event.target.value)
      }} variant="filled" />
      <br></br>
      <Typography>What is your level of education</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={myeducation}
        onChange={handleMyEducationChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I have completed school"}>I have completed school</MenuItem>
        <MenuItem value={"I have completed college"}>I have completed college</MenuItem>
        <MenuItem value={"I have a degree"}>I have a degree</MenuItem>
      </Select>
      <br></br>


      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{
          background: '#e5598f', fontSize: '18px', border: '5px solid white',
          borderRadius: '36px', color: '#fff', textTransform: 'capitalize',
          textDecoration: 'none', boxShadow: '0px 2px 14px 0px rgb(0 0 0 / 30%)',
          position: 'relative', left: '25px', top: '10px'
        }} onClick={handleSubmitProfessionForm} variant="outlined">Save</Button>
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

    </FormControl >
  )
}
export default ProfessionForm


