import * as React from 'react';




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
import AdvertHelper from './AdvertHelper';
import SectionHelper from './SectionHelper';
import background from '../../assets/profilecardbackground.jpg'
import actionsbackground from '../../assets/cardactionsbackground.jpg'
import LocationOn from '@mui/icons-material/LocationOn'

import { borderRadius, width } from '@mui/system';


class ProfileSnippetCard extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const tiers = [
            {  title:'Maham',
              description: [
                'London Uk'
              ],
             
            },
            {  title:'Mariya',
              description: [
               'London Uk'
              ],
            },
            { title:'Anum',
              description: [
                'Birmingham Uk'
              ],
            },
            { title:'rida',
              description: [
                'Birmingham Uk'
              ],
            },
            { title:'mehwish',
              description: [
                'Birmingham Uk'
              ],
            },
            { title:'Saadi',
              description: [
                'Birmingham Uk'
              ],
            },
            { title:'BigBooB69',
              description: [
                'Birmingham Uk'
              ],
            },
          ];
        return(
            
            <Container maxWidth="sm" component="main">
                {tiers.map((item)=>(
                     <Card style={{backgroundColor:'#fff' , border: '1px solid #ededed' ,  borderRadius:'20px', boxShadow:'0px 2px 6px 0px rgb(0 0 0 / 30%)' , marginBottom:'20px'}}>
                     <CardHeader
                     style={{ backgroundImage: `url(${actionsbackground}) ` ,backgroundPosition: 'center',
                     backgroundSize: 'cover', textShadow:'1px 3px #d3d3',letterSpacing:'2px',
                     
                    
                      textAlign:'center' , fontSize:20 , color:'#fff'}}
                     title={item.title}
                       sx={{
                         backgroundColor: (theme) =>
                           theme.palette.mode === 'light'
                             ? theme.palette.grey[2]
                             : theme.palette.grey[700],
                       }}
                     />
                     <CardContent style={{textAlign:'center'}}>
                     <LocationOn style={{color:'#e36b6b'}}/>
                       <Typography style={{fontFamily:'sans-serif' , fontSize:'15px' , fontWeight:'bold' , color:'#666'}}>
                        
                           {item.description}
        
                       </Typography>
                       <Typography style={{fontFamily:'sans-serif' , fontSize:'15px' , fontWeight:'bold' , color:'#666'}}>
                       {'Said in {his/her} registration {He/She} follows the teachings of {sect} and also said with regards to {His/Her} islamic studying {islamic studies} '}
                       </Typography>
                       <Typography style={{fontFamily:'sans-serif' , fontSize:'15px' , fontWeight:'bold' , color:'#666'}}>
                         {'{He/She} is {Age} years old , and {Marital Status}. {She} {wears/doesnt wear} hijab , and described {His/Her} ethnicity {ethnicity}. {He/She} Described {His/Her} Profession as {insert} '}
                       </Typography>
                      
                     </CardContent>
                     <CardActions style={{justifyContent:'center' , backgroundImage: `url(${background}) ` ,backgroundPosition: 'center',
                     backgroundSize: 'cover', textShadow:'1px 3px #d3d3',letterSpacing:'2px',
                     
                    
                      textAlign:'center' , fontSize:20 , color:'#fff' , padding:'20px'}}>
                         
               <Button style={{color: '#1e1e1e',
                 textTransform:'capitalize',
                 borderWidth:'1px',
                 borderRadius:'6px',
                 borderWidth: '1px!important',
                 borderColor: '#FFFFFF',
                 fontSize: '13px',
                 backgroundColor: 'rgba(247,247,247,0.84)' }} size="small">
                 View Profile</Button>
                 <Button style={{color: '#1e1e1e',
                 textTransform:'capitalize',
                 borderWidth:'1px',
                 borderRadius:'6px',
                 borderWidth: '1px!important',
                 borderColor: '#FFFFFF',
                 fontSize: '13px',
                 backgroundColor: 'rgba(247,247,247,0.84)' }} size="small">
                 Like Profile</Button>
             </CardActions>
             
                    
                   </Card>

                ))}
        
              
            
          </Container>
        )
    }
}

export default ProfileSnippetCard