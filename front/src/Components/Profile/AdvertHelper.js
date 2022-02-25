import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from "@mui/icons-material/StarBorderOutlined"
import CompassIcon from '@mui/icons-material/CompassCalibrationOutlined'
import FilesIcon from '@mui/icons-material/FileCopySharp'
import AtomIcon from '@mui/icons-material/VerifiedUserOutlined'
import FamilyIcon from '@mui/icons-material/PeopleOutline'
import FriendsIcon from '@mui/icons-material/ContactsOutlined'
import ProfessionIcon from '@mui/icons-material/LocalPostOfficeOutlined'
import { CardHeader } from '@mui/material';
import { CardMedia } from '@mui/material';
import image from '../../assets/Resized-1200.jpg'

export default function SectionHelper() {
    const Sections = [
        {  title:'Deen',
          description: [
            '30'
          ],
         
        },
        {  title:'Lifestyle',
          description: [
           'Mobeen'
          ],
        },
        { title:'Basics',
          description: [
            'Birmingham Uk'
          ],
        },
        { title:'Apearance',
          description: [
            'Birmingham Uk'
          ],
        },
        { title:'Family',
          description: [
            'Birmingham Uk'
          ],
        },
        { title:'Friendships',
          description: [
            'Birmingham Uk'
          ],
        },
        { title:'Profession',
          description: [
            'Birmingham Uk'
          ],
        },
      ];
    return (
        
      <Card sx={{ maxWidth: 300, marginTop:'50px', padding:'20px',
         borderRadius: '2px 35px 2px 35px' ,
          position:'fixed' ,top:'80px' , boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)' , right:20 }}>
            <CardHeader style={{fontSize:5 , color:'#666' , fontWeight:'bold'}} title={'Proceeds Help Pure Muslim Match'}></CardHeader>
             <CardMedia component="img"
        height="140"
        image={image}
        alt="green iguana"></CardMedia>
        <CardActions style={{justifyContent:'center'}}>
          <Button style={{color: '#ffff',
    borderWidth: '1px!important',
    borderColor: '#ff4a83',
    fontSize: '12px',
    backgroundColor: '#ff4a83'}} size="small">Shop</Button>
          <Button style={{color: '#ffff',
    borderWidth: '1px!important',
    borderColor: '#ff4a83',
    fontSize: '12px',
    backgroundColor: '#ff4a83'}} size="small">donate</Button>
        </CardActions>
        <Typography style={{fontSize:15 , color:'#666' , fontWeight:'bold' , textAlign:'center'}}>Choose from hundreds of products, buy a loved one a special gift or donate.</Typography>
        
      </Card>
      
    );
  }


