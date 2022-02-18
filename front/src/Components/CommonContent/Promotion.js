
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import CheckIcon from "@mui/icons-material/CheckBoxOutlined"
import SheildIcon from "@mui/icons-material/Shield"
import FilesIcon from "@mui/icons-material/FileCopyOutlined"
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import FaqAccordian from './FaqAccordian'
import { width } from '@mui/system';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {  title:'check',
    description: [
      'Only for practising Muslims who pray 5x a day'
    ],
   
  },
  {  title:'shield',
    description: [
     'All Muslimas involve their Wali/Mahram"        "'
    ],
  },
  { title:'star',
    description: [
      '100% no free mixing between members"        "'
    ],
  },
  { title:'files',
    description: [
      'Successful matches are background checked'
    ],
  },
];

const footers = [
  {
    title: 'Company',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
  {
    title: 'Features',
    description: [
      'Cool stuff',
      'Random feature',
      'Team feature',
      'Developer stuff',
      'Another one',
    ],
  },
  {
    title: 'Resources',
    description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  },
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
      {/* Hero unit */}
    
      {/* End hero unit */}
      <Container maxWidth="xl" component="main">
        <Grid container spacing={5} >
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              md={4}
              xl={3}
            >
              <Card style={{backgroundColor:'rgb(0, 157, 160)' , boxShadow:'none'}}>
                <CardHeader
                style={{textAlign:'center' , fontSize:20}}
                title={tier.title === 'check' ? 
                <CheckIcon fontSize="large" style={{ color: "orange" }}/>:tier.title === 'shield'? 
                <SheildIcon fontSize="large" style={{ color: "orange" }}/>:tier.title === 'star'?
                <StarIcon fontSize="large" style={{ color: "orange" }}/>:tier.title === 'files'?
                <FilesIcon fontSize="large" style={{ color:"orange" }}/> : null}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[2]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                   
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        style={{color: '#f7f7f7',
                            fontFamily: 'cursive',
                            fontSize: 'larger',
                            fontWeight: 'bold'}}
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
               
              </Card>
            </Grid>
          ))}
       <div style={{display:'flex' ,  width:'100%' , justifyContent:'center'}}>

          
<Stack spacing={10} direction="row">
<Button style={{background:'#e5598f' , fontSize:'18px' , border:'5px solid white' , borderRadius:'0px' , color:'#fff' , textTransform:'lowercase' , textDecoration:'none'}} variant="outlined">Register</Button>
<Button style={{background:'#00c4d6' , fontSize:'18px' , color:'#fff' , borderRadius:'0px' , border:'4px solid white' , textTransform:'lowercase' , textDecoration:'none'}} variant="outlined">Donate</Button>

</Stack>
</div>
  <div style={{ display: 'block',
    textAlign: 'center',
    border: '3px dashed #d3d3d3',
    borderRadius: '90px',
    marginTop: '50px'}}>

 
    <h1 style={{fontWeight:700 , fontFamily:'fantasy' , fontStyle:'italic' , fontSize:'50px'  , color:'#e8e8e8' , padding:'30px'}}>
    Wali/Mahram involvement 
    </h1>
    <h2 style={{color:'#dddddd' , fontStyle:'italic' , fontWeight:500 , fontFamily:'cursive' , padding:'30px'}}>
    Pure Muslim Match is only for practising Muslims who are serious about looking for a husband or wife. 
    </h2>
    <p style={{color:'#e8e8e8' , fontStyle:'italic' , fontWeight:300 , fontFamily:'cursive' ,  padding:'30px'}}>
    We have a 100% No-Free-Mixing policy. After you and another member match we correspond between you both relaying your messages to each other until marriage talks progress to a stage where you both want to request your contact details be exchanged insha’Allah. If at this stage the Muslima hadn’t already involved her mahram we would make sure her Wali/mahram was involved before any contact details be exchanged.
    </p>
    <p style={{color:'#e8e8e8' , fontStyle:'italic' , fontWeight:300 , fontFamily:'cursive' , padding:'30px'}}>
    We understand that Muslimas may sometimes struggle to find a mahram, and around 40% of Muslima memebers said they need or might need help with this. So in this instance, we would offer help and support with finding a sharia-compliant Wali/mahram for the Muslima insha’Allah. May Allah grant you ease in your search and success in this life and the next. Ameen
    </p>
    </div>
    <div className='statistics'>
    {/* for statisctics */}
    </div>
    <div style={{
    textAlign: 'center', padding:'50px' , width:'100%'}}>

    
    <p style={{color:'#f2f2f2' , fontSize:'30px' , fontFamily:'fantasy' , fontWeight:900 , fontStyle:'italic'}}>
    Pure Muslim Match – The free marriage agency for practising Muslims!
    </p>
    <div style={{display:'flex' ,  width:'100%' , justifyContent:'center'}}>

          
<Stack spacing={10} direction="row">
<Button style={{background:'#e5598f' , fontSize:'18px' , border:'5px solid white' , borderRadius:'0px' , color:'#fff' , textTransform:'lowercase' , textDecoration:'none'}} variant="outlined">Register</Button>
<Button style={{background:'#00c4d6' , fontSize:'18px' , color:'#fff' , borderRadius:'0px' , border:'4px solid white' , textTransform:'lowercase' , textDecoration:'none'}} variant="outlined">Donate</Button>

</Stack>
</div>
    </div>
    <div style={{ display: 'block',
    textAlign: 'center',
    border: '3px dashed #d3d3d3',
    borderRadius: '90px',
    marginTop: '50px' , width:'100%'}}>

    
    <h1 style={{fontWeight:500 , fontFamily:'fantasy' , fontStyle:'italic' , fontSize:'50px'  , color:'#e8e8e8' , padding:'10px'}}>
        FAQ
    </h1>
    <p style={{color:'#f2f2f2' , fontSize:'30px' , fontFamily:'fantasy' , fontWeight:100 , fontStyle:'italic'}}>
    Click on a question for the answer to display
    </p>
    <FaqAccordian/>
    </div>
    <div>
        {/* paypalDiv */}
    </div>

        </Grid>
      </Container>
      {/* Footer */}
      
      {/* End footer */}
    </React.Fragment>
  );
}

export default PricingContent;