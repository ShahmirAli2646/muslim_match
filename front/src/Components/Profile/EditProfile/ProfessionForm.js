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
import { SubmitProfressionForm } from '../../../actions/formActions';
import { SubmitProfressionFormImp } from '../../../actions/importantActions';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';




const ProfessionForm = ({data , important}) => {
  const [wifeprofession, setWifeProfession] = React.useState('');
  const [myprofession, setMyProfession] = React.useState('');
  const [husbandprofession, setHusbandProfession] = React.useState('');
  const [partnereducation, setPartnerEducation] = React.useState('');
  const [myeducation, setMyEducation] = React.useState('');


  const [wifeprofessionImp, setWifeProfessionImp] = React.useState(false);
  const [myprofessionImp, setMyProfessionImp] = React.useState(false);
  const [husbandprofessionImp, setHusbandProfessionImp] = React.useState(false);
  const [partnereducationImp, setPartnerEducationImp] = React.useState(false);
  const [myeducationImp, setMyEducationImp] = React.useState(false);
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(SubmitProfressionForm(
      wifeprofession,
      husbandprofession,
      partnereducation,
      myprofession,
      myeducation,
    ))
  }, [wifeprofession,
    husbandprofession,
    partnereducation,
    myprofession,
    myeducation,])
  
  React.useEffect(()=>{
     if(data!==undefined && data!==null){

     
     setWifeProfession(data.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply)
     setMyProfession(data.Whatisyourprofession)
     setHusbandProfession(data.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply)
     setPartnerEducation(data.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted)
     setMyEducation(data.Whatisyourlevelofeducation)
     }
   } , [data])





   React.useEffect(()=>{
    dispatch(SubmitProfressionFormImp(
      wifeprofessionImp,
      husbandprofessionImp,
      partnereducationImp,
      myprofessionImp,
      myeducationImp,
    ))
  }, [wifeprofessionImp,
    husbandprofessionImp,
    partnereducationImp,
    myprofessionImp,
    myeducationImp,])
  
  React.useEffect(()=>{
     if(important!==undefined && important!==null){

     
     setWifeProfessionImp(important.Whichprofessionstatusdescribewhatyouwantyourfuturewifetohaveselectallthatapply)
     setMyProfessionImp(important.Whatisyourprofession)
     setHusbandProfessionImp(important.Whichprofessionstatusdescribewhatyouwantyourfuturehusbandtohaveselectallthatapply)
     setPartnerEducationImp(important.Theminimumlevelofeducationyouwantyourmarriagepartnertohavecompleted)
     setMyEducationImp(important.Whatisyourlevelofeducation)
     }
   } , [important])
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

  const handleWifeProfessionChangeImp = (event) => {
    setWifeProfessionImp(event.target.checked);
  }
  const handleMyEducationChangeImp = (event) => {
    setMyEducationImp(event.target.checked);
  }
  const handleHusbandProfessionChangeImp = (event) => {
    setHusbandProfessionImp(event.target.checked);
  }
  const handlePartnerEducationChangeImp = (event) => {
    setPartnerEducationImp(event.target.checked);
  }


  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Stack direction="row" justifyContent={'space-between'}>
      <Typography>Which profession status describe what you want your future wife to have (select all that apply)</Typography>
      <Checkbox checked={wifeprofessionImp} onChange={handleWifeProfessionChangeImp} sx={{top:-8}} color="secondary" />
      </Stack>
      
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
      <Stack direction="row" justifyContent={'space-between'}>
      <Typography>Which profession status/s describe what you want your future husband to have (select all that apply)</Typography>
      <Checkbox checked={husbandprofessionImp} onChange={handleHusbandProfessionChangeImp} sx={{ top:-8 }} color="secondary" />
      </Stack>
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
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>The minimum level of education you want your marriage partner to have completed</Typography>
      <Checkbox checked={partnereducationImp} onChange={handlePartnerEducationChangeImp} sx={{top:-8}} color="secondary" />
      </Stack>
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
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>What is your profession</Typography>
      <Checkbox checked={myprofessionImp} onChange={(event)=>{setMyProfessionImp(event.target.checked)}} sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <TextField value={myprofession} onChange={(event) => {
        setMyProfession(event.target.value)
      }} variant="filled" />
      <br></br>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>What is your level of education</Typography>
      <Checkbox checked={myeducationImp} onChange={handleMyEducationChangeImp} sx={{top:-8}} color="secondary" />
      </Stack>
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


