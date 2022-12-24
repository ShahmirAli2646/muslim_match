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
import { useState } from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Checkbox from '@mui/material';
import {

  APPEARANCE_FORM,

} from "../../../actions/types";
import { useDispatch, useSelector } from "react-redux";
import { SubmitAppearanceForm } from '../../../actions/formActions';
import { SubmitAppearanceFormImp } from '../../../actions/importantActions';




const AppearanceForm = ({data ,important}) => {
  const [shortestheight, setShortestHeight] = React.useState('');
  const [tallestheight, setTallestHeight] = React.useState('');
  const [myheight, setMyHeight] = React.useState('');
  const [waist, setWaist] = React.useState('');
  const [mywaist, setMyWaist] = React.useState('');
  const [smallestdress, setSmallestDress] = React.useState('');
  const [largestdress, setLargestDress] = React.useState('');
  const [mydress, setMyDress] = React.useState('');
  const [build, setBuild] = React.useState('');
  const [mybuild, setMyBuild] = React.useState('');
  const [beard, setBeard] = React.useState('');
  const [ethnicity, setEthnicity] = React.useState('');

  const [shortestheightImp, setShortestHeightImp] = React.useState(false);
  const [tallestheightImp, setTallestHeightImp] = React.useState(false);
  const [myheightImp, setMyHeightImp] = React.useState(false);
  const [waistImp, setWaistImp] = React.useState(false);
  const [mywaistImp, setMyWaistImp] = React.useState(false);
  const [smallestdressImp, setSmallestDressImp] = React.useState(false);
  const [largestdressImp, setLargestDressImp] = React.useState(false);
  const [mydressImp, setMyDressImp] = React.useState(false);
  const [buildImp, setBuildImp] = React.useState(false);
  const [mybuildImp, setMyBuildImp] = React.useState(false);
  const [beardImp, setBeardImp] = React.useState(false);
  const [ethnicityImp, setEthnicityImp] = React.useState(false);
  React.useEffect(()=>{
    if(data!==undefined && data!==null){
    setShortestHeight(data.Whatistheshortestheightyoufindcompatible)
    setTallestHeight(data.Whatsthetallestheightyoufindcompatible)
    setMyHeight(data.Whatisyourheight)
    setWaist(data.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches)
    setMyWaist(data.Yourwaistsizeininches)
    setSmallestDress(data.Smallestdresssizethatmeetsyourrequirementsforawife)
    setLargestDress(data.Largestdresssizethatmeetsyourrequirementsforawife)
    setMyDress(data.Yourdresssize)
    setBuild(data.Whichbuildmatchesyourpreference)
    setMyBuild(data.Whichbuildbestdescribesyou)
    setBeard(data.Whichstyleofbearddoyouhave)
    setEthnicity(data.Whatisyourethnicity)}
   } , [data])
  const dispatch = useDispatch();
  React.useEffect(()=>{
    dispatch(SubmitAppearanceForm(shortestheight, tallestheight, waist, smallestdress,
      largestdress, build, myheight, mydress,
      mywaist, mybuild, beard, ethnicity))
  } ,[shortestheight, tallestheight, waist, smallestdress,
    largestdress, build, myheight, mydress,
    mywaist, mybuild, beard, ethnicity] )



    React.useEffect(()=>{
      if(important!==undefined && important!==null){
      setShortestHeightImp(important.Whatistheshortestheightyoufindcompatible)
      setTallestHeightImp(important.Whatsthetallestheightyoufindcompatible)
      setMyHeightImp(important.Whatisyourheight)
      setWaistImp(important.WhatisyourpreferencewhenitcomestothewaistsizeofyourfuturehusbandinshaAllahininches)
      setMyWaistImp(important.Yourwaistsizeininches)
      setSmallestDressImp(important.Smallestdresssizethatmeetsyourrequirementsforawife)
      setLargestDressImp(important.Largestdresssizethatmeetsyourrequirementsforawife)
      setMyDressImp(important.Yourdresssize)
      setBuildImp(important.Whichbuildmatchesyourpreference)
      setMyBuildImp(important.Whichbuildbestdescribesyou)
      setBeardImp(important.Whichstyleofbearddoyouhave)
      setEthnicityImp(important.Whatisyourethnicity)}
     } , [important])
    React.useEffect(()=>{
      dispatch(SubmitAppearanceFormImp(shortestheightImp, tallestheightImp, waistImp, smallestdressImp,
        largestdressImp, buildImp, myheightImp, mydressImp,
        mywaistImp, mybuildImp, beardImp, ethnicityImp))
    } ,[shortestheightImp, tallestheightImp, waistImp, smallestdressImp,
      largestdressImp, buildImp, myheightImp, mydressImp,
      mywaistImp, mybuildImp, beardImp, ethnicityImp] )
  

  const handleShortestHeightChange = (event) => {
    setShortestHeight(event.target.value);
  }
  const handleWaistChange = (event) => {
    setWaist(event.target.value);
  }
  const handleBeardChange = (event) => {
    setBeard(event.target.value);
  }
  const handleEthnicityChange = (event) => {
    setEthnicity(event.target.value);
  }
  const handleMyWaistChange = (event) => {
    setMyWaist(event.target.value);
  }
  const handleMyDressChange = (event) => {
    setMyDress(event.target.value);
  }
  const handleMyHeightChange = (event) => {
    setMyHeight(event.target.value);
  }
  const handleBuildChange = (event) => {
    setBuild(event.target.value);
  }
  const handleMyBuildChange = (event) => {
    setMyBuild(event.target.value);
  }
  const handleSmallestDressChange = (event) => {
    setSmallestDress(event.target.value);
  }
  const handleLargestDressChange = (event) => {
    setLargestDress(event.target.value);
  }
  const handleTallestHeightChange = (event) => {
    setTallestHeight(event.target.value);
  }




  return (
    <FormControl variant="filled" sx={{ m: 1, width: '100%' }}>
      <Typography>What is the shortest height you find compatible</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={shortestheight}
        onChange={handleShortestHeightChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I don't mind"}>I don't mind</MenuItem>
        <MenuItem value={"5’0” (152cm)"}>5’0” (152cm)</MenuItem>
        <MenuItem value={"5’1” (154cm)"}>5’1” (154cm)</MenuItem>
        <MenuItem value={"5’2” (157cm)"}>5’2” (157cm)</MenuItem>
        <MenuItem value={"5’3” (160cm)"}>5’3” (160cm)</MenuItem>
        <MenuItem value={"5’4” (162cm)"}>5’4” (162cm)</MenuItem>
        <MenuItem value={"5’5” (165cm)"}>5’5” (165cm)</MenuItem>
        <MenuItem value={"5’6” (167cm)"}>5’6” (167cm)</MenuItem>
        <MenuItem value={"5’7” (170cm)"}>5’7” (170cm)</MenuItem>
        <MenuItem value={"5’8” (172cm)"}>5’8” (172cm)</MenuItem>
        <MenuItem value={"5’9” (175cm)"}>5’9” (175cm)</MenuItem>
        <MenuItem value={"5’10” (177cm)"}>5’10” (177cm)</MenuItem>
        <MenuItem value={"5’11” (180cm)"}>5’11” (180cm)</MenuItem>
        <MenuItem value={"6’0” (182cm)"}>6’0” (182cm)</MenuItem>
        <MenuItem value={"6’1” (185cm)"}>6’1” (185cm)</MenuItem>
        <MenuItem value={"6’2” (187cm)"}>6’2” (187cm)</MenuItem>
        <MenuItem value={"6’3” (190cm)"}>6’3” (190cm)</MenuItem>
        <MenuItem value={"6’4” (193cm)"}>6’4” (193cm)</MenuItem>
        <MenuItem value={"6’5” (195cm)"}>6’5” (195cm)</MenuItem>
        <MenuItem value={"6’6” (198cm)"}>6’6” (198cm)</MenuItem>
        <MenuItem value={"6’7” (200cm)"}>6’7” (200cm)</MenuItem>
        <MenuItem value={"6’8” (203cm)"}>6’8” (203cm)</MenuItem>
        <MenuItem value={"6’9” (205cm)"}>6’9” (205cm)</MenuItem>
        <MenuItem value={"6’10” (208cm)"}>6’10” (208cm)</MenuItem>
        <MenuItem value={"6’11” (210cm)"}>6’11” (210cm)</MenuItem>
        <MenuItem value={"7’0” (213cm)"}>7’0” (213cm)</MenuItem>
        <MenuItem value={"7’1” (215cm)"}>7’1” (215cm)</MenuItem>
        <MenuItem value={"7’2” (218cm)"}>7’2” (218cm)</MenuItem>
      </Select>
      <br></br>
      <Typography>What's the tallest height you find compatible?</Typography>
      <br></br>

      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={tallestheight}
        onChange={handleTallestHeightChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I don't mind"}>I don't mind</MenuItem>
        <MenuItem value={"5’0” (152cm)"}>5’0” (152cm)</MenuItem>
        <MenuItem value={"5’1” (154cm)"}>5’1” (154cm)</MenuItem>
        <MenuItem value={"5’2” (157cm)"}>5’2” (157cm)</MenuItem>
        <MenuItem value={"5’3” (160cm)"}>5’3” (160cm)</MenuItem>
        <MenuItem value={"5’4” (162cm)"}>5’4” (162cm)</MenuItem>
        <MenuItem value={"5’5” (165cm)"}>5’5” (165cm)</MenuItem>
        <MenuItem value={"5’6” (167cm)"}>5’6” (167cm)</MenuItem>
        <MenuItem value={"5’7” (170cm)"}>5’7” (170cm)</MenuItem>
        <MenuItem value={"5’8” (172cm)"}>5’8” (172cm)</MenuItem>
        <MenuItem value={"5’9” (175cm)"}>5’9” (175cm)</MenuItem>
        <MenuItem value={"5’10” (177cm)"}>5’10” (177cm)</MenuItem>
        <MenuItem value={"5’11” (180cm)"}>5’11” (180cm)</MenuItem>
        <MenuItem value={"6’0” (182cm)"}>6’0” (182cm)</MenuItem>
        <MenuItem value={"6’1” (185cm)"}>6’1” (185cm)</MenuItem>
        <MenuItem value={"6’2” (187cm)"}>6’2” (187cm)</MenuItem>
        <MenuItem value={"6’3” (190cm)"}>6’3” (190cm)</MenuItem>
        <MenuItem value={"6’4” (193cm)"}>6’4” (193cm)</MenuItem>
        <MenuItem value={"6’5” (195cm)"}>6’5” (195cm)</MenuItem>
        <MenuItem value={"6’6” (198cm)"}>6’6” (198cm)</MenuItem>
        <MenuItem value={"6’7” (200cm)"}>6’7” (200cm)</MenuItem>
        <MenuItem value={"6’8” (203cm)"}>6’8” (203cm)</MenuItem>
        <MenuItem value={"6’9” (205cm)"}>6’9” (205cm)</MenuItem>
        <MenuItem value={"6’10” (208cm)"}>6’10” (208cm)</MenuItem>
        <MenuItem value={"6’11” (210cm)"}>6’11” (210cm)</MenuItem>
        <MenuItem value={"7’0” (213cm)"}>7’0” (213cm)</MenuItem>
        <MenuItem value={"7’1” (215cm)"}>7’1” (215cm)</MenuItem>
        <MenuItem value={"7’2” (218cm)"}>7’2” (218cm)</MenuItem>
      </Select>
      <br></br>

      <Typography>What is your preference when it comes to the waist size of your future husband insha'Allah (in inches)</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={waist}
        onChange={handleWaistChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"24"}>24</MenuItem>
        <MenuItem value={"26"}>26</MenuItem>
        <MenuItem value={"28"}>28</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        <MenuItem value={"32"}>32</MenuItem>
        <MenuItem value={"34"}>34</MenuItem>
        <MenuItem value={"36"}>36</MenuItem>
        <MenuItem value={"38"}>38</MenuItem>
        <MenuItem value={"40"}>40</MenuItem>
        <MenuItem value={"42"}>42</MenuItem>
        <MenuItem value={"44"}>44</MenuItem>
        <MenuItem value={"46"}>46</MenuItem>
        <MenuItem value={"48"}>48</MenuItem>
        <MenuItem value={"50"}>50</MenuItem>
        <MenuItem value={"52"}>52</MenuItem>
        <MenuItem value={"54"}>54</MenuItem>
        <MenuItem value={"56"}>56</MenuItem>
        <MenuItem value={"58"}>58</MenuItem>
        <MenuItem value={"60"}>60</MenuItem>
        <MenuItem value={"62"}>62</MenuItem>

      </Select>
      <br></br>
      <Typography>Smallest dress size that meets your requirements for a wife</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={smallestdress}
        onChange={handleSmallestDressChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I don’t mind"}>I don’t mind</MenuItem>
        <MenuItem value={"6"}>6</MenuItem>
        <MenuItem value={"8"}>8</MenuItem>
        <MenuItem value={"10"}>10</MenuItem>
        <MenuItem value={"12"}>12</MenuItem>
        <MenuItem value={"14"}>14</MenuItem>
        <MenuItem value={"16"}>16</MenuItem>
        <MenuItem value={"18"}>18</MenuItem>
        <MenuItem value={"20"}>20</MenuItem>
        <MenuItem value={"22"}>22</MenuItem>
        <MenuItem value={"24"}>24</MenuItem>
        <MenuItem value={"26"}>26</MenuItem>
        <MenuItem value={"28"}>28</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        <MenuItem value={"32"}>32</MenuItem>
        <MenuItem value={"34"}>34</MenuItem>
        <MenuItem value={"36"}>36</MenuItem>
        <MenuItem value={"38"}>38</MenuItem>
        <MenuItem value={"40"}>40</MenuItem>
      </Select>
      <br></br>
      <Typography>Largest dress size that meets your requirements for a wife</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={largestdress}
        onChange={handleLargestDressChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"I don’t mind"}>I don’t mind</MenuItem>
        <MenuItem value={"6"}>6</MenuItem>
        <MenuItem value={"8"}>8</MenuItem>
        <MenuItem value={"10"}>10</MenuItem>
        <MenuItem value={"12"}>12</MenuItem>
        <MenuItem value={"14"}>14</MenuItem>
        <MenuItem value={"16"}>16</MenuItem>
        <MenuItem value={"18"}>18</MenuItem>
        <MenuItem value={"20"}>20</MenuItem>
        <MenuItem value={"22"}>22</MenuItem>
        <MenuItem value={"24"}>24</MenuItem>
        <MenuItem value={"26"}>26</MenuItem>
        <MenuItem value={"28"}>28</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        <MenuItem value={"32"}>32</MenuItem>
        <MenuItem value={"34"}>34</MenuItem>
        <MenuItem value={"36"}>36</MenuItem>
        <MenuItem value={"38"}>38</MenuItem>
        <MenuItem value={"40"}>40</MenuItem>


      </Select>
      <br></br>
      <Typography>
        Which build matches your preference
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={build}
        onChange={handleBuildChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Skinny Slim"}>Skinny Slim</MenuItem>
        <MenuItem value={"Athletic Slim"}>Athletic Slim</MenuItem>
        <MenuItem value={"Athletic Muscular"}>Athletic Muscular</MenuItem>
        <MenuItem value={"Medium-slim"}>Medium-slim</MenuItem>
        <MenuItem value={"Medium-Large"}>Medium-Large</MenuItem>
        <MenuItem value={"Large"}>Large</MenuItem>
        <MenuItem value={"Extra large"}>Extra large</MenuItem>
      </Select>
      <br></br>
      <Typography>What is your height</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={myheight}
        onChange={handleMyHeightChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"5’0” (152cm)"}>5’0” (152cm)</MenuItem>
        <MenuItem value={"5’1” (154cm)"}>5’1” (154cm)</MenuItem>
        <MenuItem value={"5’2” (157cm)"}>5’2” (157cm)</MenuItem>
        <MenuItem value={"5’3” (160cm)"}>5’3” (160cm)</MenuItem>
        <MenuItem value={"5’4” (162cm)"}>5’4” (162cm)</MenuItem>
        <MenuItem value={"5’5” (165cm)"}>5’5” (165cm)</MenuItem>
        <MenuItem value={"5’6” (167cm)"}>5’6” (167cm)</MenuItem>
        <MenuItem value={"5’7” (170cm)"}>5’7” (170cm)</MenuItem>
        <MenuItem value={"5’8” (172cm)"}>5’8” (172cm)</MenuItem>
        <MenuItem value={"5’9” (175cm)"}>5’9” (175cm)</MenuItem>
        <MenuItem value={"5’10” (177cm)"}>5’10” (177cm)</MenuItem>
        <MenuItem value={"5’11” (180cm)"}>5’11” (180cm)</MenuItem>
        <MenuItem value={"6’0” (182cm)"}>6’0” (182cm)</MenuItem>
        <MenuItem value={"6’1” (185cm)"}>6’1” (185cm)</MenuItem>
        <MenuItem value={"6’2” (187cm)"}>6’2” (187cm)</MenuItem>
        <MenuItem value={"6’3” (190cm)"}>6’3” (190cm)</MenuItem>
        <MenuItem value={"6’4” (193cm)"}>6’4” (193cm)</MenuItem>
        <MenuItem value={"6’5” (195cm)"}>6’5” (195cm)</MenuItem>
        <MenuItem value={"6’6” (198cm)"}>6’6” (198cm)</MenuItem>
        <MenuItem value={"6’7” (200cm)"}>6’7” (200cm)</MenuItem>
        <MenuItem value={"6’8” (203cm)"}>6’8” (203cm)</MenuItem>
        <MenuItem value={"6’9” (205cm)"}>6’9” (205cm)</MenuItem>
        <MenuItem value={"6’10” (208cm)"}>6’10” (208cm)</MenuItem>
        <MenuItem value={"6’11” (210cm)"}>6’11” (210cm)</MenuItem>
        <MenuItem value={"7’0” (213cm)"}>7’0” (213cm)</MenuItem>
        <MenuItem value={"7’1” (215cm)"}>7’1” (215cm)</MenuItem>
        <MenuItem value={"7’2” (218cm)"}>7’2” (218cm)</MenuItem>
      </Select>
      <br></br>
      <Typography>Your dress size</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mydress}
        onChange={handleMyDressChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"6"}>6</MenuItem>
        <MenuItem value={"8"}>8</MenuItem>
        <MenuItem value={"10"}>10</MenuItem>
        <MenuItem value={"12"}>12</MenuItem>
        <MenuItem value={"14"}>14</MenuItem>
        <MenuItem value={"16"}>16</MenuItem>
        <MenuItem value={"18"}>18</MenuItem>
        <MenuItem value={"20"}>20</MenuItem>
        <MenuItem value={"22"}>22</MenuItem>
        <MenuItem value={"24"}>24</MenuItem>
        <MenuItem value={"26"}>26</MenuItem>
        <MenuItem value={"28"}>28</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        <MenuItem value={"32"}>32</MenuItem>
        <MenuItem value={"34"}>34</MenuItem>
        <MenuItem value={"36"}>36</MenuItem>
        <MenuItem value={"38"}>38</MenuItem>
        <MenuItem value={"40"}>40</MenuItem>


      </Select>
      <br></br>
      <Typography>Your waist size (in inches)</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mywaist}
        onChange={handleMyWaistChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"24"}>24</MenuItem>
        <MenuItem value={"26"}>26</MenuItem>
        <MenuItem value={"28"}>28</MenuItem>
        <MenuItem value={"30"}>30</MenuItem>
        <MenuItem value={"32"}>32</MenuItem>
        <MenuItem value={"34"}>34</MenuItem>
        <MenuItem value={"36"}>36</MenuItem>
        <MenuItem value={"38"}>38</MenuItem>
        <MenuItem value={"40"}>40</MenuItem>
        <MenuItem value={"42"}>42</MenuItem>
        <MenuItem value={"44"}>44</MenuItem>
        <MenuItem value={"46"}>46</MenuItem>
        <MenuItem value={"48"}>48</MenuItem>
        <MenuItem value={"50"}>50</MenuItem>
        <MenuItem value={"52"}>52</MenuItem>
        <MenuItem value={"54"}>54</MenuItem>
        <MenuItem value={"56"}>56</MenuItem>
        <MenuItem value={"58"}>58</MenuItem>
        <MenuItem value={"60"}>60</MenuItem>
        <MenuItem value={"62"}>62</MenuItem>

      </Select>
      <br></br>
      <Typography>Which build best describes you</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={mybuild}
        onChange={handleMyBuildChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Skinny Slim"}>Skinny Slim</MenuItem>
        <MenuItem value={"Athletic Slim"}>Athletic Slim</MenuItem>
        <MenuItem value={"Athletic Muscular"}>Athletic Muscular</MenuItem>
        <MenuItem value={"Medium-slim"}>Medium-slim</MenuItem>
        <MenuItem value={"Medium-Large"}>Medium-Large</MenuItem>
        <MenuItem value={"Large"}>Large</MenuItem>
        <MenuItem value={"Extra large"}>Extra large</MenuItem>
      </Select>
      <br></br>
      <Typography>Which style of beard do you have</Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={beard}
        onChange={handleBeardChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Never cut"}>Never cut</MenuItem>
        <MenuItem value={"Never cut (but is naturally short as it does not grow much)"}>Never cut (but is naturally short as it does not grow much)</MenuItem>
        <MenuItem value={"Grown and cut to fist length"}>Grown and cut to fist length</MenuItem>
        <MenuItem value={"Mostly shaved"}>Mostly shaved</MenuItem>
        <MenuItem value={"Medium-Large"}>Medium-Large</MenuItem>
        <MenuItem value={"Completely shaven off"}>Completely shaven off</MenuItem>

      </Select>
      <br></br>
      <Typography>
        What is your ethnicity
      </Typography>
      <br></br>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        value={ethnicity}
        onChange={handleEthnicityChange}

      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={"Never cut"}>Never cut</MenuItem>
        <MenuItem value={"Never cut (but is naturally short as it does not grow much)"}>Never cut (but is naturally short as it does not grow much)</MenuItem>
        <MenuItem value={"Grown and cut to fist length"}>Grown and cut to fist length</MenuItem>
        <MenuItem value={"Mostly shaved"}>Mostly shaved</MenuItem>
        <MenuItem value={"Medium-Large"}>Medium-Large</MenuItem>
        <MenuItem value={"Completely shaven off"}>Completely shaven off</MenuItem>

      </Select>
      <br></br>
      


    </FormControl>
  )
}
export default AppearanceForm


