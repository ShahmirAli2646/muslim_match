import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader } from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css';
import ProfileSnippetCard from './ProfileSnippetCard';
import adminServices from '../services/admin.service'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { IconButton } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { set } from 'lodash';




export default function BasicCard() {
  const [profiles, setProfiles] = React.useState();
  const [index, setIndex] = React.useState(1);
  const [slides, setSlides] = React.useState();
  const [slideArray, setSlidesArray] = React.useState();
  const [loader , setLoading] = React.useState()

  React.useEffect(async () => {
    setLoading(true);
    try{
      const profiles = await adminServices.getMemberCards()
      async function promises() {
        const unresolved = profiles.data.response.map(async (idx) => {
          const user = await adminServices.getUser(idx.user)
          idx.firstName = user.data.first_name
          return idx;
        })
        const resolved = await Promise.all(unresolved)
        const paginate = (resolved, perPage, page) => {
          return resolved.slice((page-1) * perPage, page * perPage);
      } 
        console.log('resolved items' , resolved)
        const displayItems = paginate(resolved, 3, index)
        console.log('paginated items' , displayItems)
        setProfiles(displayItems)
      }
      promises()
      const slide = Math.round(profiles.data.profiles / 3)
      setSlides(slide)
    }
    catch(err){

    }
  }, [index]);

  React.useEffect(() => {
    const slideArray1 = Array.from(Array(slides).keys())
    setSlidesArray(slideArray1)
  }, [slides]);

  React.useEffect(() => {
    setLoading(false)
  }, [profiles]);
  
  const handleBack = async () => {
    if (index > 0 && index!==1) {
      const newIndex = index - 1;
      setIndex(newIndex)
    }
  }
  

  const handleNext = async () => {
    if (index > 0) {
      const newIndex = index + 1;
      setIndex(newIndex)
    }

  }
  
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader style={{ textAlign: 'center', fontSize: 20, color: 'rgba(163, 19, 19, 0.65)' }} title={'Member Cards'}></CardHeader>
      <CardContent>
       {loader===true?(
        <div style={{display:'flex' , justifyContent:'center'}}>
        <CircularProgress color="secondary" />
        </div>
       ):<ProfileSnippetCard profiles={profiles} />} 
      <CardActions style={{ justifyContent: 'center' }}>
        {console.log('help me whats up')}
        <IconButton onClick={handleBack}>
        <KeyboardArrowLeftIcon />
      </IconButton>
      <Typography style={{
        background: '#efefef',
        borderRadius: '50%',
        width: '30px',
        height: '30px',
        textAlign: 'center',
        paddingTop: '3px',}}>{index}</Typography>
    <IconButton onClick={handleNext} style={{ marginLeft: 0 }}>
      <KeyboardArrowRightIcon />
    </IconButton>
    </CardActions>
      </CardContent>
    </Card>
  );
}