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
import NumericTextboxComponent from 'react-numeric-textbox'
import OutlinedInput from '@mui/material/OutlinedInput';
import MYSelect from 'react-select'
import countryList from 'react-select-country-list'

import {

  BASICS_FORM,

} from "../../../actions/types";

import { useDispatch, useSelector } from "react-redux";
import { SubmitBasicsForm } from '../../../actions/formActions';
const BasicsForm = ({data}) => {
  const [minage, setMinAge] = React.useState('');
  const [maxage, setMaxAge] = React.useState('');
  const [consider, setConsider] = React.useState('');
  const [mychildren, setMyChildren] = React.useState('');
  const [wantchildren, setWantChildren] = React.useState('');
  const [revertconvert, setRevertConvert] = React.useState('');
  const [relocate, setRelocate] = React.useState('');
  const [revert, setRevert] = React.useState('');
  const [mymentalhealth, setMyMentalHealth] = React.useState('');
  const [mydisabilty, setMyDisability] = React.useState('');
  const [partnercountries, setPartnerCountry] = React.useState('')
  const [yourcountry, setYourCountry] = React.useState('')
  const [yourcity, setYourCity] = React.useState('')
  const [yourcitizenship, setYourCitizenship] = React.useState('')
  const [partnerethnicity, setPartnerEthnicity] = React.useState('')
  const options = React.useMemo(() => countryList().getData(), [])
  const [living, setLiving] = React.useState('');
  const [coverhair, setCoverHair] = React.useState('');
  const [dailyprayers, setDailyPrayer] = React.useState('');
  const [femalemaritalstatus, setFemaleMaritalStatus] = React.useState('');
  const [malemaritalstatus, setMaleMaritalStatus] = React.useState('');
  const [marriageconsider, setMarriageConsider] = React.useState('');
  const [childrenconsider, setChildrenConsider] = React.useState('');
  const [mentalhealth, setMentalHealth] = React.useState('');
  const [disability, setDisabilty] = React.useState('');
  const [hijabtype, setHijabType] = React.useState([]);
  const [menmaritalstatus, setMenMaritalStatus] = React.useState([]);
  const [womenmaritalstatus, setWomenMaritalStatus] = React.useState([]);
  React.useEffect(()=>{
    if(data!==undefined && data!==null){

    
    setMinAge(data.youngestageyouarelookingfor)
    setMaxAge(data.oldestageyouarelookingfor)
    setConsider(data.WouldyouconsidermarragetoaMuslimawhodoesnotwearNiqaab)
    setMyChildren(data.Doyouhaveanychildren)
    setWantChildren(data.Doyouwantchildrenaftermarriage)
    setRevertConvert(data.DidyourevertconverttoIslam)
    setRelocate(data.Areyouwillingtorelocateaftermarriage)
    setRevert(data.WhatisyourpreferencewhenitcomestomarryingaMuslimwhofoundIslamlateroninlife)
    setMyMentalHealth(data.Doyouhaveanymentalhealthproblems)
    setMyDisability(data.Doyouhaveanyphysicaldisabilities)
    setPartnerCountry(data.Whichcountrieswouldyoupreferyourmarriagepartnertoholdcitizenship)
    setYourCountry(data.Whichcountryorcountriesdoyoulivein)
    setYourCity(data.Whichcitytownvillagedoyoulivein)
    setYourCitizenship(data.Whichcountryorcountriesdoyouholdcitizenship)
    setPartnerEthnicity(data.Doyouhavespecificrequirementswithregardstotheethnicityofafuturemarriagepartner)
    setLiving(data.Whatareyourpreferredlivingarrangementsaftermarriage)
    setCoverHair(data.Doyoucoveryourhairfromnonmahrams)
    setDailyPrayer(data.Doyouprayallofthe5dailyprayers)
    setFemaleMaritalStatus(data.Whatisyourmaritalstatuswomen)
    setMaleMaritalStatus(data.Whatisyourmaritalstatusmen)
    setMarriageConsider(data.Wouldyouconsidermarryingsomeonewhoisalreadymarried)
    setChildrenConsider(data.Wouldyoumarrysomeonewhoalreadyhaschildren)
    setMentalHealth(data.Wouldyoumarrysomeonewhohadmentalhealthproblems)
    setDisabilty(data.Wouldyoumarrysomeonewhohadphysicaldisabilities)
    setHijabType(data.Whattypeofhijabmatcheswithwhatyourelookingforinawife)
    setMenMaritalStatus(data.Whichmaritalstatusmatchwithwhatyouarelookingformen)
    setWomenMaritalStatus(data.Whichmaritalstatusmatchwithwhatyouarelookingforwomen)
    }

   } , [data])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(SubmitBasicsForm(minage , maxage , hijabtype , consider , menmaritalstatus , womenmaritalstatus , 
      marriageconsider , childrenconsider , mentalhealth ,  disability , partnercountries , partnerethnicity , revert , 
      yourcountry , yourcity , yourcitizenship , malemaritalstatus , femalemaritalstatus , dailyprayers , coverhair , 
      living , mydisabilty , mymentalhealth , mychildren , wantchildren ,relocate , revertconvert ))
  }  , [minage , maxage , hijabtype , consider , menmaritalstatus , womenmaritalstatus , 
    marriageconsider , childrenconsider , mentalhealth ,  disability , partnercountries , partnerethnicity , revert , 
    yourcountry , yourcity , yourcitizenship , malemaritalstatus , femalemaritalstatus , dailyprayers , coverhair , 
    living , mydisabilty , mymentalhealth , mychildren , wantchildren ,relocate , revertconvert ] )
  
  const handleMinAgeChange = (event) => {
    console.log('minage' , event )
    setMinAge(event.value);
  }
  const handleYourCityChangeHandler = value => {
    setYourCity(value)
  }
  const handleYourCitizenshipChangeHandler = value => {
    setYourCitizenship(value)
  }
  const handleYourCountryChangeHandler = value => {
    setYourCountry(value)
  }
  const handlePartnerCountryChangeHandler = value => {
    setPartnerCountry(value)
  }
  const handlePartnerEthnicityChangeHandler = value => {
    setPartnerEthnicity(value)
  }
  const handleMyMentalHealthChange = (event) => {
    setMyMentalHealth(event.target.value);
  }
  const handleRelocateChange = (event) => {
    setRelocate(event.target.value);
  }
  const handleMyChildrenChange = (event) => {
    setMyChildren(event.target.value);
  }
  const handleWantChildrenChange = (event) => {
    setWantChildren(event.target.value);
  }
  const handleRevertConvertChange = (event) => {
    setRevertConvert(event.target.value);
  }
  const handleMyDisabiltyChange = (event) => {
    setMyDisability(event.target.value);
  }
  const handleLivingChange = (event) => {
    setLiving(event.target.value);
  }
  const handleCoverHairChange = (event) => {
    setCoverHair(event.target.value);
  }
  const handleDailyPrayerChange = (event) => {
    setDailyPrayer(event.target.value);
  }
  const handleConsiderChange = (event) => {
    setConsider(event.target.value);
  }
  const handleFemaleMaritalStatusChange = (event) => {
    setFemaleMaritalStatus(event.target.value);
  }
  const handleMaleMaritalStatusChange = (event) => {
    setMaleMaritalStatus(event.target.value);
  }
  const handleMaxAgeChange = (event) => {
    setMaxAge(event.value);
  }
  const handleRevertChange = (event) => {
    setRevert(event.target.value);
  }
  const handleMarriageConsiderChange = (event) => {
    setMarriageConsider(event.target.value);
  }
  const handleDisabiltyChange = (event) => {
    setDisabilty(event.target.value);
  }
  const handleMentalHealthChange = (event) => {
    setMentalHealth(event.target.value);
  }
  const handleChildrenConsiderChange = (event) => {
    setChildrenConsider(event.target.value);
  }
  const handleHijabTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setHijabType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleMenMaritalStatusChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenMaritalStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleWomenMaritalStatusChange = (event) => {
    const {
      target: { value },
    } = event;
    setWomenMaritalStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };




  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>Please enter the youngest age you are looking for (taking into account legal restrictions we need to stick to)
      </Typography>
      <br></br>
      <NumericTextboxComponent
        min={1}
        max={130}
        value={minage}
        placeholder={'Youngest Age'}
        onChange={(event) => {
          handleMinAgeChange(event)
        }}
     

      />
      <br></br>
      <Typography>Please enter the oldest age you are looking for (taking into account legal restrictions we
        need to stick to)
      </Typography>
      <br></br>

      <NumericTextboxComponent
        min={1}
        max={130}
        value={maxage}
        placeholder={'Oldest Age'}
        onChange={(event) => {
          handleMaxAgeChange(event)
        }}

      />
      <br></br>
      <Typography>What type of hijab matches with what you're looking for in a wife (Tick all that apply)</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={hijabtype}
        multiple
        onChange={handleHijabTypeChange}
        input={<OutlinedInput/>}
        label="HijabType"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Hijab"}>Hijab</MenuItem>
        <MenuItem value={'Jubba'}>Jubba</MenuItem>
        <MenuItem value={"Niqab"}>Niqab</MenuItem>
        <MenuItem value={"Doesn't cover her hair"}>Doesn't cover her hair</MenuItem>
        <MenuItem value={"Sometimes covers her hair"}>Sometimes covers her hair</MenuItem>
        <MenuItem value={"Western-style"}>Western-style</MenuItem>
        <MenuItem value={"Jogging pant"}>Jogging pant</MenuItem>
        <MenuItem value={"Suite/Office wear"}>Suite/Office wear</MenuItem>
        <MenuItem value={"Loose fitting clothes"}>Loose fitting clothes</MenuItem>
        <MenuItem value={"doesn't wear what he want when in work but outside of working hours,wears Jubba or cultural clothing etc"}>
          doesn't wear what he want when in work but outside of working hours,wears Jubba or cultural clothing etc</MenuItem>
      </Select>
      <br></br>
      <Typography>Would you consider marrage to a Muslima who does not wear Niqaab? (this only gets asked if Niqaab is selected</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={consider}
        onChange={handleConsiderChange}
        label="Consider"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'No'}>No</MenuItem>

      </Select>
      <br></br>
      <Typography>Which marital status match with what you are looking for (Select all that apply)</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={menmaritalstatus}
        multiple
        onChange={handleMenMaritalStatusChange}
        input={<OutlinedInput />}
        label="MaritalStatusMen"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Single and never married before"}>Single and never married before</MenuItem>
        <MenuItem value={'Divorced'}>Divorced</MenuItem>
        <MenuItem value={"Divorced - but doesn't have any children from past marriage"}>Divorced - but doesn't have any children from past marriage
        </MenuItem>
        <MenuItem value={"Married"}>Married</MenuItem>
        <MenuItem value={"Annulled"}>Annulled</MenuItem>
        <MenuItem value={"Widower"}>Widower</MenuItem>
        <MenuItem value={"Widower - but doesn't have any children from past marriage"}>Widower - but doesn't have any children from past marriage
        </MenuItem>
      </Select>
      <br></br>
      <Typography>- Which marital status match with what you are looking for (Select all that apply)</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={womenmaritalstatus}
        multiple
        onChange={handleWomenMaritalStatusChange}
        input={<OutlinedInput />}
        label="MaritalStatusWomen"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Single and never married before"}>Single and never married before</MenuItem>
        <MenuItem value={'Divorced'}>Divorced</MenuItem>
        <MenuItem value={"Divorced - but doesn't have any children from past marriage"}>Divorced - but doesn't have any children from past marriage
        </MenuItem>
        <MenuItem value={"Annulled"}>Annulled</MenuItem>
        <MenuItem value={"Widower"}>Widower</MenuItem>
        <MenuItem value={"Widower - but doesn't have any children from past marriage"}>Widower - but doesn't have any children from past marriage
        </MenuItem>
      </Select>
      <br></br>
      <Typography> Would you consider marrying someone who is already married</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={marriageconsider}
        onChange={handleMarriageConsiderChange}
        label="MarriageConsider"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes - I would if he was responsible & treated his wives equally'}>
          Yes - I would if he was responsible & treated his wives equally
        </MenuItem>
        <MenuItem value={'My preference is to marry someone who is already married'}>
          My preference is to marry someone who is already married
        </MenuItem>
        <MenuItem value={'Maybe'}>
          Maybe
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>

      </Select>
      <br></br>
      <Typography>Would you marry someone who already has children</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={childrenconsider}
        onChange={handleChildrenConsiderChange}
        label="ChildrenConsider"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>
          Yes
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>
        <MenuItem value={'Maybe'}>
          Maybe
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Would you marry someone who had mental health problems</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mentalhealth}
        onChange={handleMentalHealthChange}
        label="MentalHealth"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>
          Yes
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>
        <MenuItem value={'Maybe'}>
          Maybe
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Would you marry someone who had physical disabilities</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={disability}
        onChange={handleDisabiltyChange}
        label="Disability"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>
          Yes
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>
        <MenuItem value={'Maybe'}>
          Maybe
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Which countries would you prefer your marriage partner to hold citizenship</Typography>
      <br></br>
      <MYSelect options={options} value={partnercountries} onChange={handlePartnerCountryChangeHandler } />
      <br></br>
      <Typography>
        Do you have specific requirements with regards to the ethnicity of a future marriage partner?
      </Typography>
      <br></br>
      <MYSelect options={options} value={partnerethnicity} onChange={handlePartnerEthnicityChangeHandler } />
      <br></br>
      <Typography>
        What is your preference when it comes to marrying a Muslim who found Islam later on in
        life (a revert/covert to Islam)
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={revert}
        onChange={handleRevertChange}
        label="Revert"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes - I would marry them'}>
          Yes - I would marry them
        </MenuItem>
        <MenuItem value={"No - I wouldn't want to marry them"}>
          No - I wouldn't want to marry them

        </MenuItem>
        <MenuItem value={'Maybe'}>
          Maybe
        </MenuItem>
        <MenuItem value={"Only if they were the same ethnicity as me (My parents won't accept me marrying outside of my ethnicity)"}>
          Only if they were the same ethnicity as me (My parents won't
          accept me marrying outside of my ethnicity)

        </MenuItem>

      </Select>
      <br></br>
      <Typography>
        Which country, or countries do you live in?
      </Typography>
      <br></br>
      <MYSelect options={options} value={yourcountry} onChange={handleYourCountryChangeHandler } />
      <br></br>
      <Typography>Which city/town/village do you live in?</Typography>
      <br></br>
      <MYSelect options={options} value={yourcity} onChange={handleYourCityChangeHandler } />
      <br></br>
      <Typography>Which country, or countries do you hold citizenship</Typography>
      <br></br>
      <MYSelect options={options} value={yourcitizenship} onChange={handleYourCitizenshipChangeHandler } />
      <br></br>
      <Typography>What is your marital status</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={femalemaritalstatus}
        onChange={handleFemaleMaritalStatusChange}
        label="FemaleMaritalStatus"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Single and never married before'}>
          Single and never married before
        </MenuItem>
        <MenuItem value={"Divorced"}>
          Divorced

        </MenuItem>
        <MenuItem value={'Annulled'}>
          Annulled
        </MenuItem>
        <MenuItem value={"Widow"}>
          Widow

        </MenuItem>

      </Select>
      <br></br>
      <Typography>What is your marital status</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={malemaritalstatus}
        onChange={handleMaleMaritalStatusChange}
        label="MaleMaritalStatus"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Single and never married before'}>
          Single and never married before
        </MenuItem>
        <MenuItem value={"Divorced"}>
          Divorced

        </MenuItem>
        <MenuItem value={'Married and looking for a second wife'}>
          Married and looking for a second wife
        </MenuItem>
        <MenuItem value={"Married and looking for a third wife"}>
          Married and looking for a third wife
        </MenuItem>
        <MenuItem value={"Married and looking for a fourth wife"}>
          Married and looking for a fourth wife
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Do you pray all of the 5 daily prayers</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={dailyprayers}
        onChange={handleDailyPrayerChange}
        label="DailyPrayers"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes - Everyday'}>
          Yes - Everyday
        </MenuItem>
        <MenuItem value={"Yes - But I sometimes accidentally miss Fajr (But pray it when I wake up)"}>
          Yes - But I sometimes accidentally miss Fajr (But pray it when I
          wake up)
        </MenuItem>
        <MenuItem value={'I sometimes intentionally miss a prayer (and I do not make it up later)'}>
          I sometimes intentionally miss a prayer (and I do not make it up later)
        </MenuItem>
        <MenuItem value={"I sometimes intentionally miss a prayer (and then make it up later"}>
          I sometimes intentionally miss a prayer (and then make it up later
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Do you cover your hair from non-mahrams</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={coverhair}
        onChange={handleCoverHairChange}
        label="CoverHair"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Hijab '}>
          Hijab
        </MenuItem>
        <MenuItem value={"Niqab"}>
          Niqab
        </MenuItem>
        <MenuItem value={"I don't cover my hair "}>
          I don't cover my hair
        </MenuItem>
        <MenuItem value={"I sometimes cover my hair"}>
          I sometimes cover my hair
        </MenuItem>
      </Select>
      <br></br>
      <Typography>What are your preferred living arrangements after marriage</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={living}
        onChange={handleLivingChange}
        label="Living"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Live in our own accommodation'}>
          Live in our own accommodation
        </MenuItem>
        <MenuItem value={"Live with parents"}>
          Live with parents
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Do you have any physical disabilities</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mydisabilty}
        onChange={handleMyDisabiltyChange}
        label="MyDisability"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>
          Yes
        </MenuItem>
        <MenuItem value={"No"}>
          No
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Do you have any mental health problems</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mymentalhealth}
        onChange={handleMyMentalHealthChange}
        label="MyMentalHealth"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>
          Yes
        </MenuItem>
        <MenuItem value={"No"}>
          No
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Do you have any children</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mychildren}
        onChange={handleMyChildrenChange}
        label="MyChildren"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Yes -1"}>
          Yes-1
        </MenuItem>
        <MenuItem value={'Yes-2'}>
          Yes-2
        </MenuItem>
        <MenuItem value={"Yes-3"}>
          Yes-3
        </MenuItem>
        <MenuItem value={'Yes-4'}>
          Yes-4
        </MenuItem>
        <MenuItem value={"Yes-5"}>
          Yes-5
        </MenuItem>
        <MenuItem value={'Yes-6'}>
          Yes-6
        </MenuItem>
        <MenuItem value={"Yes-7"}>
          Yes-7
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Do you want children after marriage</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={wantchildren}
        onChange={handleWantChildrenChange}
        label="MyChildren"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Yes"}>
          Yes
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>
        <MenuItem value={"Maybe"}>
          Maybe
        </MenuItem>
        <MenuItem value={"I am not able to have children as far as I know (but Allah is capable of all things - alhamdulillah)"}>
          I am not able to have children as far as I know (but Allah is
          capable of all things - alhamdulillah)
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Are you willing to relocate after marriage</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={relocate}
        onChange={handleRelocateChange}
        label="Relocate"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Yes"}>
          Yes
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>
        <MenuItem value={"Maybe"}>
          Maybe
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Did you revert/convert to Islam</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={revertconvert}
        onChange={handleRevertConvertChange}
        label="RevertConvert"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Yes"}>
          Yes
        </MenuItem>
        <MenuItem value={'No'}>
          No
        </MenuItem>
      </Select>

      

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
export default BasicsForm


