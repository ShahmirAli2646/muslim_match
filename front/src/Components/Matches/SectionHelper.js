import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
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


export default function SectionHelper() {
    const Sections = [
        {  title:'Matched',
          description: [
            '30'
          ],
          function: ()=>{
            document.querySelector("#Matched").scrollIntoView({ behavior: 'smooth'});
          }
         
        },
        {  title:'Potentials',
          description: [
           'Mobeen'
          ],
          function: ()=>{
            document.querySelector("#Potentials").scrollIntoView({ behavior: 'smooth'});
          }
        },
        { title:'Nearly Matched',
          description: [
            'Birmingham Uk'
          ],
          function: ()=>{
            document.querySelector("#Nearly-Matched").scrollIntoView({ behavior: 'smooth'});
          }
        },
        { title:'Liked',
          description: [
            'Birmingham Uk'
          ],
          function: ()=>{
            document.querySelector("#Liked").scrollIntoView({ behavior: 'smooth'});
          }
        },
        { title:'Didnt Like',
          description: [
            'Birmingham Uk'
          ],
          function: ()=>{
            document.querySelector("#Didnt-Like").scrollIntoView({ behavior: 'smooth'});
          }
        },
        
      ];
      
      
    return (
        
      <Card sx={{ maxWidth: 800, marginTop:'50px', padding:'20px', width:'20%',background:'#f7f7f7',
         borderRadius: '20px' ,
          position:'fixed' ,top:'80px' , boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)' , left:10 }}>
        <CardActions style={{display:'block', borderRadius:'10px'  }}> 
        {Sections.map((item) => (
                <div style={{display:'flex' , justifyContent:'center' , marginBottom:'20px'}}> 
                {
                   <Button onClick={item.function} style={{color:'#ffff' ,width:'50%', background:'rgba(32,157,170,0.54) 45%' , textTransform:'capitalize' , border:'2px solid'  }} size="small">{item.title}</Button>
                }
               </div>
            ))}  
            
        </CardActions>
       
        <CardActions style={{display:'block'}}>
          <div style={{display:'flex' , justifyContent:'center'}}>

        
        <Button style={{background: 'rgb(255, 74, 131)',
                    color: '#fff',
                    textTransform: 'capitalize',
                    borderRadius: '20px',
                    width: '50%', boxShadow:'0px 2px 13px 0px rgb(0 0 0 / 30%)' , border:'2px solid' }} size="small">{'Edit Profile'}</Button>
                      </div>
        </CardActions>
        
      </Card>
      
    );
  }
