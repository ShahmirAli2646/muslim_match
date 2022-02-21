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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AppearanceForm from './AppearanceForm';
import BasicsForm from './BasicsForm';
import DeenForm from './DeenForm';
import FamilyRelationsForm from './FamilyRelationsForm';
import FinishForm from './FinishForm';
import FriendShipsForm from './FriendShipsForm';
import LifeStyleForm from './LifeStyleForm';
import ProfessionForm from './ProfessionForm';
import StartForm from './StartForm';





const Forms = ()=>{
    
        const [age, setAge] = React.useState('');
      
        const handleChange = (event) => {
          setAge(event.target.value);
        }
       
    const Sections = [
        {  title:'Start',
          description: [
            '30'
          ],
         
        },
        {  title:'Deen',
          description: [
            '30'
          ],
         
        },
        {  title:'LifeStyle',
          description: [
           'Mobeen'
          ],
        },
        { title:'Basics',
          description: [
            'Birmingham Uk'
          ],
        },
        { title:'Appearance',
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
        { title:'Finish',
        description: [
          'Birmingham Uk'
        ],
      },
      ];
    return(
        <Container maxWidth='sm' disableGutters={true}>
             <Card sx={{ maxWidth: 500, height:300, marginTop:'50px',
            borderRadius: '20px' ,
             boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'  }}>
            <CardHeader style={{fontFamily:'fantasy' , fontSize:30 , color:'rgba(21, 135, 135, 0.8)'}} title={'Suport Advisor Message:'}></CardHeader>
            <CardContent>{'Assalamu alaikum, After you have completed your profile you will receive email notification when potential matches are found insha’Allah.  Please note that you receive matches based on what you say you are looking for in your profile, so best to be as flexible as possible with your criteria for you to receive more potential matches to consider, insha’Allah.'}</CardContent>
          </Card>
          <div style={{textAlign:'center'}}>
          <Typography style={{color:'rgba(21, 135, 135, 0.8)' ,
           fontFamily:'fantasy' , fontSize:50 , fontWeight:'bold' , fontStyle:'italic'}}>
           Your profile</Typography>
           </div>
          {Sections.map((item)=>(
            <div>
            <Card sx={{ maxWidth: 500, height:'auto', marginTop:'50px',
            borderRadius: '20px' ,
             boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'  }}>
            <CardHeader style={{fontFamily:'fantasy' , fontSize:30 , color:'rgba(21, 135, 135, 0.8)'}} title={item.title}></CardHeader>
            <CardContent>
                <div>
                    {item.title==='Start'?
                    ( <StartForm/>  ):
                    item.title==='Appearance'?
                    (<AppearanceForm/>):
                    item.title==='LifeStyle'?
                    (<LifeStyleForm/>):
                    item.title==='Profession'?
                    (<ProfessionForm/>):
                    item.title==='Family'?
                    (<FamilyRelationsForm/>):
                    item.title==='Finish'?
                    (<FinishForm/>):
                    item.title==='Deen'?
                    (<DeenForm/>):
                    item.title==='Basics'?
                    (<BasicsForm/>):
                    item.title==='Friendships'?
                    (<FriendShipsForm/>):null

                    
                }
                </div>
            </CardContent>
          </Card>
          <Card sx={{ maxWidth: 500, height:80, marginTop:'50px',
          borderRadius: '20px' ,
           boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)'  }}>
          
          <CardContent>{'Advertisement'}</CardContent>
        </Card>
        </div>

          ))}
        
        
        </Container>
    )
}
export default Forms