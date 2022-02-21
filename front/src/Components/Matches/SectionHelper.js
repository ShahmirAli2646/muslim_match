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
    return (
        
      <Card sx={{ maxWidth: 800, marginTop:'50px', padding:'20px',
         borderRadius: '20px' ,
          position:'fixed' ,top:'80px' , boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)' , left:10 }}>
        <CardActions style={{background:'cadetblue' ,flexDirection:'column' , alignItems:'center' , borderRadius:'10px'  }}> 
        {Sections.map((item) => (
                <div>
                {
                   <Button style={{color:'#ffff'   }} size="small">{item.title}</Button>
                }
               </div>
            ))}  
            
        </CardActions>
       
        <CardActions>
        <Button style={{background: 'rgb(255, 74, 131)',
                    color: '#fff',
                    textTransform: 'capitalize',
                    borderRadius: '20px',
                    width: '100%',  }} size="small">{'Edit Profile'}</Button>
        </CardActions>
        
      </Card>
      
    );
  }
