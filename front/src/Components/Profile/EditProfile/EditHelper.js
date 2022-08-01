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
import EditIcon from '@mui/icons-material/Edit'
import CheckIcon from '@mui/icons-material/CheckBoxOutlineBlank'


export default function EditHelper() {
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
        { title:'Finish',
        description: [
          'Birmingham Uk'
        ],
      },
      ];
      const scrollToStart = ()=>{
        document.querySelector("#Start").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToDeen = ()=>{
        document.querySelector("#Deen").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToLifestyle = ()=>{
        document.querySelector("#LifeStyle").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToBasics = ()=>{
        document.querySelector("#Basics").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToApearance = ()=>{
        document.querySelector("#Appearance").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToFamily = ()=>{
        document.querySelector("#Family").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToFriendships = ()=>{
        document.querySelector("#Friendships").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToProfession = ()=>{
        document.querySelector("#Profession").scrollIntoView({ behavior: 'smooth'});
      }
      const scrollToFinish = ()=>{
        document.querySelector("#Finish").scrollIntoView({ behavior: 'smooth'});
      }
    return (
      <div className='section-helper'>
      <Card sx={{ maxWidth: 500, marginTop:'50px', padding:'20px',
         borderRadius: '2px 35px 2px 35px' ,
          position:'fixed' ,top:'80px' , boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)' , left:10 }}>
        <CardActions style={{flexDirection:'column' , alignItems:'flex-start' }}> 
        {Sections.map((item) => (
                <div>
                {  item.title==='Finish'? 
                (<div><CheckIcon/><Button onClick={scrollToFinish } style={{color:'#ff4a83'}} size="small">{item.title}</Button> </div>): item.title==='Start'? 
                (<div><EditIcon/><Button onClick={scrollToStart} style={{color:'#ff4a83'}} size="small">{item.title}</Button> </div>)  
                : item.title==='Deen'? 
                (<div><StarIcon/><Button onClick={scrollToDeen} style={{color:'#ff4a83'}} size="small">{item.title}</Button> </div>)
                : item.title==='Lifestyle'?
                ( <div><CompassIcon/><Button onClick={scrollToLifestyle} style={{color:'#ff4a83'}} size="small">{item.title}</Button></div>)
                :item.title==='Basics'?
                ( <div><FilesIcon/><Button onClick={scrollToBasics} style={{color:'#ff4a83'}} size="small">{item.title}</Button></div>)
            :item.title==='Apearance'?
            ( <div><AtomIcon/><Button onClick={scrollToApearance} style={{color:'#ff4a83'}} size="small">{item.title}</Button></div>)
        :item.title==='Family'?
        ( <div><FamilyIcon/><Button onClick={scrollToFamily} style={{color:'#ff4a83'}} size="small">{item.title}</Button></div>)
    :item.title==='Friendships'?
    ( <div><FriendsIcon/><Button onClick={scrollToFriendships} style={{color:'#ff4a83'}} size="small">{item.title}</Button></div>)
:item.title==='Profession'?
( <div><ProfessionIcon/><Button onClick={scrollToProfession} style={{color:'#ff4a83'}} size="small">{item.title}</Button></div>):null}
              
               </div>
            ))}  
        </CardActions>
        <Typography style={{fontSize:15 , color:'#666' , fontWeight:'bold'}}>Interested in this Profile?</Typography>
        <CardActions>
          <Button style={{color: '#ffff',
    borderWidth: '1px!important',
    borderColor: '#ff4a83',
    fontSize: '12px',
    backgroundColor: '#ff4a83'}} size="small">Yes</Button>
          <Button style={{color: '#ffff',
    borderWidth: '1px!important',
    borderColor: '#ff4a83',
    fontSize: '12px',
    backgroundColor: '#ff4a83'}} size="small">No</Button>
        </CardActions>
        
      </Card>
      </div>
    );
  }
