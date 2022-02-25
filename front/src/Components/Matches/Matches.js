import * as React from 'react';



import background from '../../assets/Resized-1200.jpg'
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

import { width } from '@mui/system';
import SectionHelper from './SectionHelper';
import DataBlock from '../Profile/DataBlock'
import AdvertHelper from './AdvertHelper'
import Promotion from '../CommonContent/Promotion'
import ProfileSnippetCard from './ProfileSnippetCard'



class Profile extends React.Component {
    constructor(props){
      super(props)

    }
    
    render(){
        const tiers = [
            {  title:'Matched',
              description: [
                '30'
              ],
             
            },
            {  title:'Potentials',
              description: [
               'Mobeen'
              ],
            },
            { title:'Nearly Matched',
              description: [
                'Birmingham Uk'
              ],
            },
            { title:'Liked',
              description: [
                'Birmingham Uk'
              ],
            },
            { title:'Didnt Like',
              description: [
                'Birmingham Uk'
              ],
            },
          ];
        return(
            <div style={{background:'#f9f9f9'}}>
                <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
     
        <Container maxWidth='md' component="main" style={{padding:'100px'}}>
     
             
             <Card style={{backgroundColor:'#fff' , boxShadow:'0px 2px 6px 0px rgb(0 0 0 / 30%)' , marginBottom:'30px'}}>
                <CardHeader
                style={{ fontSize:15 , color:'rgba(163, 19, 19, 0.65)' , textTransform:'capitalize' , fontWeigth:'bold'}}
                title={'SUPPORT ADVISER MESSAGE'}

                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[2]
                        : theme.palette.grey[700],
                        fontSize:5,
                  }}
                />
                <CardContent>
                  
                     <Typography style={{color:'#666' , fontSize:'14px'}}>
                      {'Assalamu alaikum {User Name}'}
                  </Typography>
                  <p style={{color:'#666' , fontSize:'14px'}}>

                
                    {'Pure Muslim Match is on a mission to find you the best matches and get you married!  Potential matches are selected for you based on what you say you are looking for in your profile, so its good to be as flexible as possible with your search criteria so that more potentials are found for you to consider.  If you have any questions or need assistance send an email to support@puremuslimmatch.com'}
                    </p>
                  
                 <p style={{color:'#666' , fontSize:'14px'}}>
                   {'Jazak’Allahu khairan'}
                 </p>
                  
                </CardContent>
               
              </Card>
              
            
              {tiers.map((tier) => (
               
                  
                      <Card style={{backgroundColor:'#fff' , boxShadow:'0px 2px 6px 0px rgb(0 0 0 / 30%)' ,marginBottom:'30px'}}>
                      <CardHeader
                      style={{ color:'rgba(21, 135, 135, 0.8)'}}
                      title={tier.title}
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                              ? theme.palette.grey[2]
                              : theme.palette.grey[700],
                              fontSize:'20px'
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
                        
                        <ProfileSnippetCard/>
                         
                      </CardContent>

                      
                    </Card>
                   
                    
                    ))}
                  
              
        </Container>
        <AdvertHelper/>
        <SectionHelper/>
   
   <br>
   </br>
   <br>
   </br>


        </div>
        )
}
}

export default Profile

