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
import OutlinedInput from '@mui/material/OutlinedInput';


import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useDispatch, useSelector } from "react-redux";
import { SubmitDeenForm } from '../../../actions/formActions';
import { SubmitDeenFormImp } from '../../../actions/importantActions';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';



const DeenForm = ({data , important}) => {

  const [followings, setFollowings] = React.useState([]);
  const [sect, setSect] = React.useState('');
  const [prayers, setPrayers] = React.useState('');
  const [dua, setDua] = React.useState('');
  const [hijra, setHijra] = React.useState('');
  const [fast, setFast] = React.useState('');
  const [quran, setQuran] = React.useState('');
  const [islamicstudying, setIslamicStuding] = React.useState('');
  const [scholars, setScholarChange] = React.useState('');
  const [currentstudy, setCurrentStudyChange] = React.useState('');
  const [arabic, setArabicChange] = React.useState('');
  const [memorizedquran, setMemorizedQuran] = React.useState('');


  const [followingsImp, setFollowingsImp] = React.useState(false);
  const [sectImp , setSectImp] = React.useState(false);
  const [prayersImp, setPrayersImp] = React.useState(false);
  const [duaImp, setDuaImp] = React.useState(false);
  const [hijraImp, setHijraImp] = React.useState(false);
  const [fastImp, setFastImp] = React.useState(false);
  const [quranImp, setQuranImp] = React.useState(false);
  const [islamicstudyingImp, setIslamicStudingImp] = React.useState(false);
  const [scholarsImp, setScholarChangeImp] = React.useState(false);
  const [currentstudyImp, setCurrentStudyChangeImp] = React.useState(false);
  const [arabicImp, setArabicChangeImp] = React.useState(false);
  const [memorizedquranImp, setMemorizedQuranImp] = React.useState(false);
  React.useEffect(()=>{
    if(data!==undefined && data!==null){

    
    setSect(data.TheIslamicteachingssectthatyoufollow)
    setPrayers(data.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid)
    setDua(data.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk)
    setHijra(data.DoyouwanttomakehijraonedayinshaAllah)
    setFast(data.DoyouvoluntaryFast)
    setQuran(data.DoyoureadQuran)
    setIslamicStuding(data.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted)
    setScholarChange(data.Whichscholarsdoyoutakeknowledgefrom)
    setCurrentStudyChange(data.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails)
    setArabicChange(data.CanyoureadandorunderstandanyArabic)
    setMemorizedQuran(data.MemorizedanyQuranifsohowmuch)
  }
   } , [data])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(SubmitDeenForm(followings , islamicstudying, sect ,scholars, currentstudy,prayers , dua,hijra ,fast, arabic ,  quran , memorizedquran ))
  } , [followings , islamicstudying, sect ,scholars, currentstudy,prayers , dua,hijra ,fast, arabic ,  quran , memorizedquran ])









  React.useEffect(()=>{
    if(important!==undefined && important!==null){

    
    setSectImp(important.TheIslamicteachingssectthatyoufollow)
    setPrayersImp(important.Howmanyofthe5prayersadaydoyouusuallyprayinthemasjid)
    setDuaImp(important.DoyoumakeduaTOtheProphetSAWorduatopirsorsaintsthereisstrongevidencethatthistypeofduaissinfulshirk)
    setHijraImp(important.DoyouwanttomakehijraonedayinshaAllah)
    setFastImp(important.DoyouvoluntaryFast)
    setQuranImp(important.DoyoureadQuran)
    setIslamicStudingImp(important.WhattypeandlevelofIslamicstudyingwouldyouwantamarriagematchtohavecompleted)
    setScholarChangeImp(important.Whichscholarsdoyoutakeknowledgefrom)
    setCurrentStudyChangeImp(important.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails)
    setArabicChangeImp(important.CanyoureadandorunderstandanyArabic)
    setMemorizedQuranImp(important.MemorizedanyQuranifsohowmuch)
  }
   } , [important])
  React.useEffect(()=>{
    dispatch(SubmitDeenFormImp(followingsImp , islamicstudyingImp, sectImp ,scholarsImp, currentstudyImp,prayersImp , duaImp,hijraImp ,fastImp, arabicImp ,  quranImp , memorizedquranImp ))
  } , [followingsImp , islamicstudyingImp, sectImp ,scholarsImp, currentstudyImp,prayersImp , duaImp,hijraImp ,fastImp, arabicImp ,  quranImp , memorizedquranImp ])
  
  const handleArabicChange = (event) => {
    setArabicChange(event.target.value);
  }
  const handleMemorizedQuranChange = (event) => {
    setMemorizedQuran(event.target.value);
  }

  const handleFollowingsChange = (event) => {
    const {
      target: { value },
    } = event;
    setFollowings(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleCurrentStudyChange = (event) => {
    setCurrentStudyChange(event.target.value);
  }
  const handleSectChange = (event) => {
    setSect(event.target.value);
  }
  const handleScholarChange = (event) => {
    setScholarChange(event.target.value);
  }
  const handleIslamicStudyingChange = (event) => {
    setIslamicStuding(event.target.value);
  }
  const handlePrayerChange = (event) => {
    setPrayers(event.target.value);
  }
  const handleDuaChange = (event) => {
    setDua(event.target.value);
  }
  const handleHijraChange = (event) => {
    setHijra(event.target.value);
  }
  const handleFastChange = (event) => {
    setFast(event.target.value);
  }
  const handleQuranChange = (event) => {
    setQuran(event.target.value);
  }




  const handleArabicChangeImp = (event) => {
    setArabicChangeImp(event.target.value);
  }
  const handleMemorizedQuranChangeImp = (event) => {
    setMemorizedQuranImp(event.target.value);
  }

  const handleFollowingsChangeImp = (event) => {
    setFollowingsImp(event.target.value);
  };
  const handleCurrentStudyChangeImp = (event) => {
    setCurrentStudyChangeImp(event.target.value);
  }
  const handleSectChangeImp = (event) => {
    setSectImp(event.target.value);
  }
  const handleScholarChangeImp = (event) => {
    setScholarChangeImp(event.target.value);
  }
  const handleIslamicStudyingChangeImp = (event) => {
    setIslamicStudingImp(event.target.value);
  }
  const handlePrayerChangeImp = (event) => {
    setPrayersImp(event.target.value);
  }
  const handleDuaChangeImp = (event) => {
    setDuaImp(event.target.value);
  }
  const handleHijraChangeImp = (event) => {
    setHijraImp(event.target.value);
  }
  const handleFastChangeImp = (event) => {
    setFastImp(event.target.value);
  }
  const handleQuranChangeImp = (event) => {
    setQuranImp(event.target.value);
  }
  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>
        Which followings of Islam match with what you're looking for in a spouse - Please select all that apply
      </Typography>
      <Checkbox sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={followings}
        multiple
        onChange={handleFollowingsChange}
        input={<OutlinedInput/>}
        label="Followings"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Any - I don't mind"}>Any - I don't mind</MenuItem>
        <MenuItem value={'Just Sunni'}>Just Sunni</MenuItem>
        <MenuItem value={"Qur'an and Sunnah as understood by the sahaba and the salaf saliheen"}>Qur'an and Sunnah as understood by the sahaba and the salaf saliheen</MenuItem>
        <MenuItem value={"Hanaf"}>Hanaf</MenuItem>
        <MenuItem value={"Tablighi Jamaat"}>Tablighi Jamaat</MenuItem>
        <MenuItem value={"Barelvi"}>Barelvi</MenuItem>
        <MenuItem value={"Sufi"}>Sufi</MenuItem>
      </Select>
      <br></br>
      <Typography>
        What type and level of Islamic studying would you want a marriage match to have
        completed
      </Typography>
      <br></br>
      <TextField value={islamicstudying} onChange={handleIslamicStudyingChange} variant="filled" />
      <br></br>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>
        The Islamic teachings / sect that you follow
      </Typography>
      <Checkbox sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={sect}
        onChange={handleSectChange}
        label="Sect"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Just Sunni'}>Just Sunni</MenuItem>
        <MenuItem value={'Salafi'}>Salafi</MenuItem>
        <MenuItem value={"Qur'an and Sunnah as understood by the sahaba and the salaf saliheen"}>Qur'an and Sunnah as understood by the sahaba and the salaf saliheen</MenuItem>
        <MenuItem value={'Hanafi'}>Hanafi</MenuItem>
        <MenuItem value={'Tablighi jamaat'}>Tablighi jamaat</MenuItem>
        <MenuItem value={'Barelvi'}>Barelvi</MenuItem>
        <MenuItem value={'Sufi'}>Sufi</MenuItem>
      </Select>
      <br></br>
      <Typography>Which scholars do you take knowledge from</Typography>
      <br></br>
      <TextField value={scholars} onChange={handleScholarChange} variant="filled" />
      <br></br>
      <Typography>Are you currently studying Islam, or have you in the past? Do you have the intention to study
        Islamic studies in the future? If yes to any of these questions please provide details
        insha'Allah</Typography>
      <br></br>
      <TextField value={currentstudy} onChange={handleCurrentStudyChange} variant="filled" />
      <br></br>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>How many of the 5 prayers a day do you usually pray in the masjid</Typography>
      <Checkbox sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={prayers}
        onChange={handlePrayerChange}
        label="Prayer"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'All 5'}>All 5</MenuItem>
        <MenuItem value={'4'}>4</MenuItem>
        <MenuItem value={'3'}>3</MenuItem>
        <MenuItem value={'2'}>2</MenuItem>
        <MenuItem value={'1'}>1</MenuItem>
        <MenuItem value={'I pray all the prayers in the Masjid when I am not in work'}>I pray all the prayers in the Masjid when I am not in work</MenuItem>
        <MenuItem value={'I pray all the prayers in the Masjid when I am not in college'}>I pray all the prayers in the Masjid when I am not in college</MenuItem>
        <MenuItem value={'I pray all the prayers in the Masjid when I am not in university'}>I pray all the prayers in the Masjid when I am not in university</MenuItem>
      </Select>
      <br></br>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>Do you make dua TO the Prophet (SAW) or dua to pirs or saints (there is strong evidence
        that this type of dua is sinful shirk) </Typography>
        <Checkbox sx={{top:-8}} color="secondary" />
        </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={dua}
        onChange={handleDuaChange}
        label="Dua"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes - I make dua TO the prophet (SAW)'}>Yes - I make dua TO the prophet (SAW)</MenuItem>
        <MenuItem value={'No - I do not make dua TO the prophet'}>No - I do not make dua TO the prophet</MenuItem>
      </Select>
      <br></br>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>Do you want to make hijra one day insha'Allah</Typography>
      <Checkbox sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={hijra}
        onChange={handleHijraChange}
        label="Hijra"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'Yes – To a Muslim country'}>Yes – To a Muslim country</MenuItem>
        <MenuItem value={'Yes – To a non-Muslim country'}>Yes – To a non-Muslim country</MenuItem>
        <MenuItem value={'Yes – To a Muslim or a non-Muslim country'}>Yes – To a Muslim or a non-Muslim country</MenuItem>
        <MenuItem value={'Maybe'}>Maybe</MenuItem>
      </Select>
      <br></br>
      <Stack direction={'row'} justifyContent={'space-between'}>
      <Typography>Do you voluntary Fast</Typography>
      <Checkbox sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={fast}
        onChange={handleFastChange}
        label="Fast"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'Yes – Usually every week'}>Yes – Usually every week</MenuItem>
        <MenuItem value={'Yes – Usually every month'}>Yes – Usually every month</MenuItem>
        <MenuItem value={'Yes – A few times a year'}>Yes – A few times a year</MenuItem>
        <MenuItem value={'Maybe'}>Maybe</MenuItem>
      </Select>
      <br></br>
      <Typography>Can you read and/or understand any Arabic</Typography>
      <br></br>
      <TextField value={arabic} onChange={handleArabicChange} id="standard-basic" variant="filled" />
      <br></br>
      <Stack direction={'row'} justifyContent={'space=between'}>
      <Typography>Do you read Qur’an</Typography>
      <Checkbox sx={{top:-8}} color="secondary" />
      </Stack>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={quran}
        onChange={handleQuranChange}
        label="Quran"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes – Usually every day'}>Yes – Usually every day</MenuItem>
        <MenuItem value={'Yes – Almost every day'}>Yes – Almost every day</MenuItem>
        <MenuItem value={'Yes – 2-3 times a week'}>Yes – 2-3 times a week</MenuItem>
        <MenuItem value={'Yes – Usually every week'}>Yes – Usually every week</MenuItem>
        <MenuItem value={'Yes – Usually every month'}>Yes – Usually every month</MenuItem>
      </Select>
      <br></br>
      <Typography> Memorized any Qur’an - if so how much</Typography>
      <br></br>
      <TextField value={memorizedquran} onChange={handleMemorizedQuranChange} id="standard-basic" variant="filled" />


     
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
export default DeenForm


