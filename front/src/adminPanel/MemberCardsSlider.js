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



export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275  }}>
        <CardHeader style={{textAlign:'center' , fontSize:20 , color:'rgba(163, 19, 19, 0.65)'}}title={'Member Cards'}></CardHeader>
      <CardContent>
      <CarouselProvider
        
        naturalSlideWidth={100}
        naturalSlideHeight={20}
        totalSlides={3}
      >
          
          <Slider style={{paddingBottom:'100px'}}>
          <Slide index={0}>
          <ProfileSnippetCard/>
          </Slide>
          <Slide index={1}>
          <ProfileSnippetCard/>
          </Slide>
          <Slide index={2}>
          <ProfileSnippetCard/>
          </Slide>
        </Slider>
        <div style={{display:'flex' , justifyContent:'space-between' , marginTop:'30px'}}>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
        </div>
        
        
        
      </CarouselProvider>
      </CardContent>
    </Card>
  );
}