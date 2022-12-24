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
import { SubmitFamilyRelationsForm } from '../../../actions/formActions';

const FamilyRelationsForm = ({data}) => {
  const [familyreligious, setFamilyReligious] = React.useState('');
  const [yourrelation, setYourRelation] = React.useState('');
  const [partnerrelation, setPartnerRelation] = React.useState('');
  const [familysect, setFamilySect] = React.useState('');
  React.useEffect(()=>{
    if(data!==undefined && data!==null){

    
    setFamilyReligious(data.Areyourfamilyreligious)
    setYourRelation(data.Howisyourrelationshipwithyourfamily)
    setPartnerRelation(data.WhatmighttherelationshipbetweenyourfamilyandyournewmarriagepartnerbelikeinshaAllah)
    setFamilySect(data.WhatsectfollowingofIslamareyourfamilypractising)
    }
   } , [data])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(SubmitFamilyRelationsForm(familyreligious,
      familysect,
      yourrelation,
      partnerrelation
    ))
  }, [familyreligious,
    familysect,
    yourrelation,
    partnerrelation])
  
  const handleFamilyReligiousChange = (event) => {
    setFamilyReligious(event.target.value);
  }
  const handleFamilySectChange = (event) => {
    setFamilySect(event.target.value);
  }
  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>Are your family religious</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={familyreligious}
        onChange={handleFamilyReligiousChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'yes'}>Yes</MenuItem>
        <MenuItem value={'Insha’Allah'}>Insha’Allah</MenuItem>
        <MenuItem value={'no'}>No</MenuItem>
      </Select>
      <br></br>
      <Typography>What sect/following of Islam are your family practising</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={familysect}
        onChange={handleFamilySectChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Just Sunni'}>Just Sunni</MenuItem>
        <MenuItem value={'Salafi '}>Salafi </MenuItem>
        <MenuItem value={"Qur'an and Sunnah as understood by the sahaba and the salaf saliheen"}>Qur'an and Sunnah as understood by the sahaba and the salaf saliheen</MenuItem>
        <MenuItem value={'Hanafi'}>Hanafi</MenuItem>
        <MenuItem value={'Tablighi jamaat'}>Tablighi jamaat</MenuItem>
        <MenuItem value={'Barelvi'}>Barelvi</MenuItem>
        <MenuItem value={'Suf'}>Sufi</MenuItem>
      </Select>
      <br></br>
      <Typography>How is your relationship with your family</Typography>
      <br></br>

      <TextField value={yourrelation} onChange={(event) => {
        setYourRelation(event.target.value)
      }} variant="filled" />
      <br></br>
      <Typography>What might the relationship between your family and your new marriage partner be
        like insha’Allah</Typography>
      <br></br>
      <TextField value={partnerrelation} onChange={(event) => {
        setPartnerRelation(event.target.value)
      }} variant="filled" />
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
export default FamilyRelationsForm


