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



export default function BasicCard() {
  const [profiles, setProfiles] = React.useState();
  const [index, setIndex] = React.useState(0);
  const [slides, setSlides] = React.useState();
  const [slideArray, setSlidesArray] = React.useState();

  React.useEffect(async () => {
    const profiles = await adminServices.getMemberCards()
    console.log('profiles' , profiles)
    async function promises() {
      const unresolved = profiles.data.response.map(async (idx) => {
        const user = await adminServices.getUser(idx.user)
        idx.firstName = user.data.first_name
        return idx;
      })
      const resolved = await Promise.all(unresolved)
      const paginate = (resolved, perPage, page) => {
        return resolved.slice((page - 1) * perPage, page * perPage);
    }
      const displayItems = paginate(resolved, 3, index+1)
     
      setProfiles(displayItems)
    }
    promises()
    const slide = Math.round(profiles.data.profiles / 3)
    console.log('number of slides', slide)
    setSlides(slide)

  }, []);

  React.useEffect(() => {
    const slideArray1 = Array.from(Array(slides).keys())
    setSlidesArray(slideArray1)
    console.log('slideArray' , slideArray1)
  }, [slides]);
  
  const handleBack = async () => {
    if (index > 0) {
      const newIndex = index - 1;
      setIndex(newIndex)

      const page = index - 1;
      const profiles = await adminServices.getMemberCards(page)
      async function promises() {
        const unresolved = profiles.data.response.map(async (idx) => {
          const user = await adminServices.getUser(idx.user)
          idx.firstName = user.data.first_name
          return idx;
        })
        const resolved = await Promise.all(unresolved)
        const paginate = (resolved, perPage, page) => {
          return resolved.slice((page - 1) * perPage, page * perPage);
      }
        const displayItems = paginate(resolved, 3, index+1)
       
        setProfiles(displayItems)
        
      }
      promises()
    }
  }
  

  const handleNext = async () => {
    if (index >= 0) {
      const newIndex = index + 1;
      setIndex(newIndex)

      
     
      const profiles = await adminServices.getMemberCards()

      async function promises() {
        const unresolved = profiles.data.response.map(async (idx) => {
          const user = await adminServices.getUser(idx.user)
          idx.firstName = user.data.first_name
          return idx;
        })
        const resolved = await Promise.all(unresolved)
        const paginate = (resolved, perPage, page) => {
          return resolved.slice((page - 1) * perPage, page * perPage);
      }
        const displayItems = paginate(resolved, 3, index+1)
       
        setProfiles(displayItems)
        
      }
      promises()
    }
    console.log('next profiles', profiles)
  }
  const renderProfileCard = (index1, profiles) => {
    return (
      <React.Fragment>
            
                    <Slide index={index1}>
                    <ProfileSnippetCard profiles={profiles} />
                  </Slide>
                
      </React.Fragment>
    )
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardHeader style={{ textAlign: 'center', fontSize: 20, color: 'rgba(163, 19, 19, 0.65)' }} title={'Member Cards'}></CardHeader>
      <CardContent>
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={20}
          totalSlides={slides}
          
        >
          <Slider style={{ paddingBottom: '100px' }}>
            {renderProfileCard(index, profiles)}
          </Slider>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '30px' }}>
            <ButtonBack onClick={handleBack}>Back</ButtonBack>
            <ButtonNext onClick={handleNext}>Next</ButtonNext>
          </div>
        </CarouselProvider>
      </CardContent>
    </Card>
  );
}