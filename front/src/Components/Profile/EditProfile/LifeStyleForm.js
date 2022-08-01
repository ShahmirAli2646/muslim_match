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
import { SubmitLifestyleForm } from '../../../actions/formActions';



const LifeStyleForm = () => {
  const [menclothing, setMenClothing] = React.useState([]);
  const [nonmahrammenclothing, setNonMahramMenClothing] = React.useState([]);
  const [nonmahramwomenclothing, setNonMahramWomenClothing] = React.useState([]);
  const [haram, setHaram] = React.useState([]);
  const [womenclothing, setWomenClothing] = React.useState([]);
  const [beard, setBeard] = React.useState([]);
  const [makeup, setMakeUp] = React.useState('');
  const [tv, setTV] = React.useState('');
  const [music, setMusic] = React.useState('');
  const [nonmahrammakeup, setNonMahramMakeup] = React.useState('');
  const [nonmahramwomen, setNonMahramWomen] = React.useState('');
  const [nonmahrammen, setNonMahramMen] = React.useState('');
  const dispatch = useDispatch();
  const handleSubmitLifeStyleForm = (event) => {
    dispatch(SubmitLifestyleForm(
      menclothing,
      nonmahramwomenclothing,
      beard,
      nonmahrammakeup,
      haram, nonmahramwomen,
      nonmahrammen,
      nonmahrammenclothing,
      nonmahramwomenclothing,
      tv,
      music,
      nonmahrammen,

    ))
  };


  const handleHaramChange = (event) => {
    const {
      target: { value },
    } = event;
    setHaram(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleNonMahramWomenClothingChange = (event) => {
    const {
      target: { value },
    } = event;
    setNonMahramWomenClothing(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleNonMahramMenClothingChange = (event) => {
    const {
      target: { value },
    } = event;
    setNonMahramMenClothing(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleMakeUpChange = (event) => {
    setMakeUp(event.target.value);
  }
  const handleTVChange = (event) => {
    setTV(event.target.value);
  }
  const handleMusicChange = (event) => {
    setMusic(event.target.value);
  }
  const handleNonMahramMakeUpChange = (event) => {
    setNonMahramMakeup(event.target.value);
  }
  const handleNonMahramWomenChange = (event) => {
    setNonMahramWomen(event.target.value);
  }
  const handleNonMahramMenChange = (event) => {
    setNonMahramMen(event.target.value);
  }
  const handleBeardChange = (event) => {
    const {
      target: { value },
    } = event;
    setBeard(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleWomenClothingChange = (event) => {
    const {
      target: { value },
    } = event;
    setWomenClothing(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleMenClothingChange = (event) => {
    const {
      target: { value },
    } = event;
    setMenClothing(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>What style of men's clothing would you prefer your future husband wear when around non
        mahrams (i.e. when going to the shop or at work etc.) - Please select all that apply</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={menclothing}
        multiple
        onChange={handleMenClothingChange}
        input={<OutlinedInput />}
        label="MenClothing"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Lower garment above ankles (most or all of the time)"}>Lower garment above ankles (most or all of the time)</MenuItem>
        <MenuItem value={'Jubba'}>Jubba</MenuItem>
        <MenuItem value={"thobe (most or all of the time)"}>thobe (most or all of the time)</MenuItem>
        <MenuItem value={"Cultural type of clothing"}>Cultural type of clothing</MenuItem>
        <MenuItem value={"Shalwar Kameez etc. (Most or all of the time)"}>Shalwar Kameez etc. (Most or all of the time)</MenuItem>
        <MenuItem value={"Western-style"}>Western-style</MenuItem>
        <MenuItem value={"Jogging pant"}>Jogging pant</MenuItem>
        <MenuItem value={"Suite/Office wear"}>Suite/Office wear</MenuItem>
        <MenuItem value={"Loose fitting clothes"}>Loose fitting clothes</MenuItem>
        <MenuItem value={"doesn't wear what he want when in work but outside of working hours,wears Jubba or cultural clothing etc"}>
          doesn't wear what he want when in work but outside of working hours,wears Jubba or cultural clothing etc</MenuItem>
      </Select>
      <br></br>
      <Typography>
        What style of women's clothing would you prefer your future wife to wear when around non-mahrams (i.e. when going to the shop, or park etc.) - Please select all that apply
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={womenclothing}
        multiple
        onChange={handleWomenClothingChange}
        input={<OutlinedInput />}
        label="WomenClothing"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Abaya"}>Abaya</MenuItem>
        <MenuItem value={'Jilbab'}>Jilbab</MenuItem>
        <MenuItem value={"Cultural type of clothing"}>Cultural type of clothing</MenuItem>
        <MenuItem value={"Long Western-style dresses that conceal her awrah"}>Long Western-style dresses that conceal her awrah</MenuItem>
        <MenuItem value={"Loose fitting clothing"}>Loose fitting clothing</MenuItem>
        <MenuItem value={"Jeans"}>Jeans</MenuItem>
        <MenuItem value={"Jogging pants"}>Jogging pants</MenuItem>
        <MenuItem value={"Suite/Office Wear"}>Suite/Office Wear</MenuItem>
        <MenuItem value={"Leggings"}>Leggings</MenuItem>
        <MenuItem value={"Short dresses/skirts"}>
          Short dresses/skirts</MenuItem>
        <MenuItem value={"Doesn't wear what she wants when in work but outside of working hours wears abaya or cultural clothing etc. most of the time"}>
          Doesn't wear what she wants when in work but outside of working hours wears abaya or cultural clothing etc. most of the time
        </MenuItem>
      </Select>
      <br></br>
      <Typography>Which beard style/s meet your preferences</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={beard}
        multiple
        onChange={handleBeardChange}
        input={<OutlinedInput />}
        label="Beard"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Never cut"}>Never cut</MenuItem>
        <MenuItem value={'Never cut (but is naturally short as it does not grow much)'}>
          Never cut (but is naturally short as it does not grow much)</MenuItem>
        <MenuItem value={"Grown & cut to fist length"}>Grown cut to fist length</MenuItem>
        <MenuItem value={"Mostly shaved"}>Mostly shaved</MenuItem>
        <MenuItem value={"No beard"}>No beard</MenuItem>
        <MenuItem value={"I do not mind"}>I do not mind</MenuItem>
      </Select>
      <br></br>
      <Typography>Do you want a wife who wears makeup in front of non-mahrams</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={makeup}
        onChange={handleMakeUpChange}
        label="MakeUp"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={"Only if it is sometimes"}>Only if it is sometimes</MenuItem>
        <MenuItem value={'Maybe'}>Maybe</MenuItem>
        <MenuItem value={'Only if she promises to stop wearing it in front of non-mahrams after marriage'}>
          Only if she promises to stop wearing it in front of non-mahrams
          after marriage</MenuItem>
      </Select>
      <br></br>
      <Typography>Do you eat haram, drink alcohol, smoke cigarettes, smoke shisha, or use e-cigarettes - Select
        all that apply</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={haram}
        multiple
        onChange={handleHaramChange}
        input={<OutlinedInput />}
        label="Haram"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"No, I don't do any of these things"}>No, I don't do any of these things</MenuItem>
        <MenuItem value={'Drink alcohol'}>
          Drink alcohol</MenuItem>
        <MenuItem value={"Smoke cigarettes"}>Smoke cigarettes</MenuItem>
        <MenuItem value={"Smoke shisha"}>Smoke shisha</MenuItem>
        <MenuItem value={"Use e-cigarettes"}>Use e-cigarettes</MenuItem>
      </Select>
      <br></br>
      <Typography>
        Do you free-mix with non-mahram females?
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={nonmahramwomen}
        onChange={handleNonMahramWomenChange}
        label="NonMahramWomen"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes - I have female friends'}>Yes - I have female friends</MenuItem>
        <MenuItem value={'Yes - but only when I am at work'}>Yes - but only when I am at work</MenuItem>
        <MenuItem value={"I have female friends but I will stop socialising with them after I marry my wife, insha'Allah"}>
          I have female friends but I will stop socialising with them after I
          marry my wife, insha'Alla
        </MenuItem>

      </Select>
      <br></br>
      <Typography>
        Do you free-mix with non-mahram men?
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={nonmahrammen}
        onChange={handleNonMahramMenChange}
        label="NonMahramMen"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes - I have male friends'}>Yes - I have male friends</MenuItem>
        <MenuItem value={'Yes - but only when I am at work'}>Yes - but only when I am at work</MenuItem>
        <MenuItem value={"I have male friends but I will stop socialising with them after I marry my husband, insha'Allah"}>
          I have male friends but I will stop socialising with them after I
          marry my husband, insha'Allah
        </MenuItem>
      </Select>
      <br></br>
      <Typography>
        Type of clothing worn in front of non-mahram men (i.e. when going to the shop, work, or park etc.) - select all that apply
      </Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={nonmahrammenclothing}
        multiple
        onChange={handleNonMahramMenClothingChange}
        input={<OutlinedInput />}
        label="NonMahramMenClothing"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Abaya"}>Abaya</MenuItem>
        <MenuItem value={'Jilbab'}>
          Jilbab</MenuItem>
        <MenuItem value={"Cultural type of clothing"}>Cultural type of clothing</MenuItem>
        <MenuItem value={"Long Western-style dresses that conceal my awrah"}>
          Long Western-style dresses that conceal my awrah
        </MenuItem>
        <MenuItem value={"Loose fitting clothing"}>Loose fitting clothing
        </MenuItem>
        <MenuItem value={"Jeans"}>Jeans</MenuItem>
        <MenuItem value={"Jogging pants"}>Jogging pants</MenuItem>
        <MenuItem value={"Suite/Office Wear"}>Suite/Office Wear</MenuItem>
        <MenuItem value={"Leggings"}>Leggings</MenuItem>
        <MenuItem value={"Short dresses/skirts"}>Short dresses/skirts</MenuItem>
        <MenuItem value={"I don't wear what I want when in work but outside of working hours I wear abaya or cultural clothing etc. most of the time"}>
          I don't wear what I want when in work but outside of working hours I
          wear abaya or cultural clothing etc. most of the time
        </MenuItem>
        <MenuItem value={"Use e-cigarettes"}>Use e-cigarettes</MenuItem>
      </Select>
      <br></br>
      <Typography>
        Type of clothing worn in front of non-mahram woman (i.e. when going to the shop or work
        etc.) - select all that apply
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={nonmahramwomenclothing}
        multiple
        onChange={handleNonMahramWomenClothingChange}
        input={<OutlinedInput  />}
        label="NonMahramWomenClothing"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Lower garment above ankles (most or all of the time)"}>
          Lower garment above ankles (most or all of the time)
        </MenuItem>
        <MenuItem value={'Jubba'}>
          Jubba</MenuItem>
        <MenuItem value={"thobe (most or all of the time)"}>thobe (most or all of the time)</MenuItem>
        <MenuItem value={"Cultural type of clothing"}>
          Cultural type of clothing
        </MenuItem>
        <MenuItem value={"Shalwar Kameez etc. (Most or all of the time)"}>Shalwar Kameez etc. (Most or all of the time)
        </MenuItem>
        <MenuItem value={"Western-style"}>Western-style</MenuItem>
        <MenuItem value={"Jeans"}>Jeans</MenuItem>
        <MenuItem value={"Jogging pant"}>Jogging pant</MenuItem>
        <MenuItem value={"Suite/Office wear"}>Suite/Office wear</MenuItem>
        <MenuItem value={"Loose fitting clothes"}>Loose fitting clothes</MenuItem>
        <MenuItem value={"I don’t wear what I want when in work but outside of working hours, I wear Jubba or cultural clothing etc."}>
          I don’t wear what I want when in work but outside of working hours, I
          wear Jubba or cultural clothing etc.
        </MenuItem>
      </Select>
      <br></br>
      <Typography>
        Do you watch TV
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={tv}
        onChange={handleTVChange}
        label="TV"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes – only sports'}>Yes – only sports</MenuItem>
        <MenuItem value={"Yes - only documentaries / educational programs"}>
          Yes - only documentaries / educational programs
        </MenuItem>
        <MenuItem value={"Yes - only documentaries / educational programs + sports"}>
          Yes - only documentaries / educational programs + sports
        </MenuItem>
      </Select>
      <br></br>
      <Typography>
        Do you listen to Music

      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={music}
        onChange={handleMusicChange}
        label="Music"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Sometimes'}>Sometimes</MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={"Yes - but I will stop listening to music after marriage"}>
          Yes - but I will stop listening to music after marriage
        </MenuItem>
      </Select>
      <br></br>
      <Typography>
        Do you wear makeup in front of non-mahrams
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={nonmahrammakeup}
        onChange={handleNonMahramMakeUpChange}
        label="NonMahramMakeUp"
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={'Yes'}>Yes</MenuItem>
        <MenuItem value={'No'}>No</MenuItem>
        <MenuItem value={'Yes, but I will stop wearing in front of non-mahrams after marriage'}>
          Yes, but I will stop wearing in front of non-mahrams after
          marriage</MenuItem>
        <MenuItem value={"Sometimes"}>
          Sometimes
        </MenuItem>
      </Select>



      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button style={{
          background: '#e5598f', fontSize: '18px', border: '5px solid white',
          borderRadius: '36px', color: '#fff', textTransform: 'capitalize',
          textDecoration: 'none', boxShadow: '0px 2px 14px 0px rgb(0 0 0 / 30%)',
          position: 'relative', left: '25px', top: '10px'
        }} onClick={handleSubmitLifeStyleForm} variant="outlined">Save</Button>
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
export default LifeStyleForm


