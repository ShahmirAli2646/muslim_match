import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import  CardHeader  from '@mui/material/CardHeader';
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
import SectionHelper from './SectionHelper';


const DataBlock = ()=>{
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
    return(
        <Container maxWidth='md' disableGutters={true}>
          {Sections.map((item)=>(
            <div>
            <Card sx={{ maxWidth: 980, height:300, marginTop:'50px',
            borderRadius: '20px' ,
             boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'  }}>
            <CardHeader style={{fontFamily:'fantasy' , fontSize:30 , color:'rgba(21, 135, 135, 0.8)'}} title={item.title}></CardHeader>
            <CardContent>{item.description}</CardContent>
          </Card>
          <Card sx={{ maxWidth: 980, height:150, marginTop:'50px',
          borderRadius: '20px' ,
           boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'  }}>
          
          <CardContent>{'Advertisement'}</CardContent>
        </Card>
        </div>

          ))}
        
        
        </Container>
    )
}
export default DataBlock