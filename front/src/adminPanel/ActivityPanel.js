import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { CardHeader} from '@mui/material';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { ReactNotifications, Store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { useEffect , useState } from 'react';
import ButterToast , {Cinnamon, POS_BOTTOM, POS_RIGHT } from 'butter-toast';
import SearchIcon from '@mui/icons-material/Search'
import ClipBoardIcon from '@mui/icons-material/Edit'
import StarIcon from '@mui/icons-material/Star'
import LikeIcon from '@mui/icons-material/StarHalf'
import GlobeIcon from '@mui/icons-material/LocationCity'
import { List  } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemIcon } from '@mui/material';



export default function ActivityPanel() {
    const [count, setCount] = useState(0);
    useEffect(()=>{
        console.log('dedew') 
    })
    const notifications = [
        {
            title:'viewed',
            description:'{member} viewed {member}',
            time:'1hr',
            color:'#2c8ca5'

        },
        {
            title:'joined',
            description:'{new member} Joined!',
            time:'2hr',
            color:'#d04185'

        },
        {
            title:'matched',
            description:'{member} matched {member}',
            time:'4hr',
            color:'#2fb9c8'

        },
        {
            title:'liked',
            description:'{member} liked {member}',
            time:'3min',
            color:'#5b8fbd'

        },
        {
            title:'edited',
            description:'{member} edited profile',
            time:'1min',
            color:'#f4b3b0'

        },
    ]
       

    
  return (
      
    <Card sx={{ minWidth: 275 , minHeight:538}}>
        <CardHeader style={{color:'rgba(163, 19, 19, 0.65)'}} title={'Activity'}></CardHeader>
      <CardContent>
          <List>
         {notifications.map((item)=>(
             <ListItem>
                 <ListItemIcon>{item.title==='viewed'?(
                     <SearchIcon style={{color:item.color}}/>
                 ):item.title==='joined'?(
                     <ClipBoardIcon style={{color:item.color}}/>
                 ):item.title==='matched'?(
                     <StarIcon style={{color:item.color}}/>
                 ):item.title==='liked'?(
                     <LikeIcon style={{color:item.color}}/>
                 ):item.title==='edited'?(
                     <GlobeIcon style={{color:item.color}}/>
                 ):'' }
                     </ListItemIcon>
                 <Typography style={{fontSize:'12px' , marginRight:'20px' , color:item.color}}>{item.description}</Typography>
                 <Typography style={{fontSize:'12px'}}>{item.time}</Typography>
             </ListItem>
         ))}
         </List>
      </CardContent>
    </Card>
  );
}