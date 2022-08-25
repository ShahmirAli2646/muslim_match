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
import { SubmitFinishForm } from '../../../actions/formActions';
import { SubmitFinishFormImp } from '../../../actions/importantActions';


const FinishForm = ({data , important}) => {
  const [husbandrole, setHusbandRole] = React.useState('');
  const [news, setNews] = React.useState('');
  const [addinformation, setAddInformation] = React.useState('');
  const [suggestions, setSuggestions] = React.useState('');


  const [husbandroleImp, setHusbandRoleImp] = React.useState(false);
  const [newsImp, setNewsImp] = React.useState(false);
  const [addinformationImp, setAddInformationImp] = React.useState(false);
  const [suggestionsImp, setSuggestionsImp] = React.useState(false);
  React.useEffect(()=>{
    if(data!==undefined && data!==null){
   setHusbandRole(data.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole)
   setNews(data.newsletter)
   setAddInformation(data.Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor)
   setSuggestions(data.suggestions)
    }
  } , [data])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(SubmitFinishForm(
      husbandrole,
      addinformation,
      suggestions,
      news,
    ))
  } , [husbandrole,
    addinformation,
    suggestions,
    news,] )



    React.useEffect(()=>{
      if(important!==undefined && important!==null){
     setHusbandRoleImp(important.WhatdoyoubelievetheroleofthehusbandisWhatdoyoubelievetheroleofthewifeisandhowwouldyoufulfilyourrole)
     setNewsImp(important.newsletter)
     setAddInformationImp(important.Isthereanyadditionalinformationyouwanttoaddaboutyourselforthemarriagepartneryouarelookingfor)
     setSuggestionsImp(important.suggestions)
      }
    } , [important])
    React.useEffect(()=>{
      dispatch(SubmitFinishFormImp(
        husbandroleImp,
        addinformationImp,
        suggestionsImp,
        newsImp,
      ))
    } , [husbandroleImp,
      addinformationImp,
      suggestionsImp,
      newsImp,] )
  
  

  const handleAddInformationChange = (event) => {
    setAddInformation(event.target.value);
  }
  const handleNewsChange = (event) => {
    setNews(event.target.value);
  }
  const handleHusbandRoleChange = (event) => {
    setHusbandRole(event.target.value);
  }
  const handleSuggestionsChange = (event) => {
    setSuggestions(event.target.value);
  }


  const handleAddInformationChangeImp = (event) => {
    setAddInformationImp(event.target.value);
  }
  const handleNewsChangeImp = (event) => {
    setNewsImp(event.target.value);
  }
  const handleHusbandRoleChangeImp = (event) => {
    setHusbandRoleImp(event.target.value);
  }
  const handleSuggestionsChangeImp = (event) => {
    setSuggestionsImp(event.target.value);
  }
  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>What do you believe the role of the husband is? What do you believe the role of the
        wife is? and how would you fulfil your role?</Typography>
      <br></br>
      <TextField value={husbandrole} onChange={handleHusbandRoleChange} variant="filled" />
      <br></br>
      <Typography>Is there any additional information you want to add about yourself or the marriage
        partner you are looking for</Typography>
      <br></br>
      <TextField value={addinformation} onChange={handleAddInformationChange} variant="filled" />
      <br></br>
      <Typography>Do you have any suggestions on how we could improve this registration form? Are
        there any features you would like us to add to the service if we haven't added them already?
        (this does not get shown on your profile)</Typography>
      <br></br>

      <TextField value={suggestions} onChange={handleSuggestionsChange} variant="filled" />
      <br></br>
      <Typography>Is it ok for us to send you our free newsletter from time to time?</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={news}
        onChange={handleNewsChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes - once a fortnight (if a new edition is available)'}>Yes - once a fortnight (if a new edition is available)</MenuItem>
        <MenuItem value={'Yes - once a month (if a new edition is available)'}>Yes - once a month (if a new edition is available)</MenuItem>
        <MenuItem value={'Yes - once every 3 months (if a new edition is available)'}>Yes - once every 3 months (if a new edition is available)</MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
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

    </FormControl>
  )
}
export default FinishForm


