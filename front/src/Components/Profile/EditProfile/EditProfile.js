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

import { width } from '@mui/system';
import EditHelper from './EditHelper'
import Forms from './Forms'
import AdvertHelper from '../AdvertHelper'




class EditProfile extends React.Component {
    constructor(props){
      super(props)

    }
    
    render(){
        const tiers = [
            {  title:'AGE',
              description: [
                '30'
              ],
             
            },
            {  title:'USER NAME',
              description: [
               'Mobeen'
              ],
            },
            { title:'LOCATION',
              description: [
                'Birmingham Uk'
              ],
            },
          ];
        return(
        <div>
            <Container maxWidth="1600px" disableGutters={true}>
         

             
             <h3 style={{textAlign:'center' , fontSize:35 , padding:0 , margin:0}}><span style={{color:'#666666'}}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span></h3>
            
         <p style={{textAlign:'center' , fontSize:25}}><span style={{color:"#666666"}}><em>Bismillah Al</em>–<em>Rahman</em>,&nbsp;<em>Al</em>–<em>Rahim</em></span></p>

         

</Container>


<Container maxWidth="1600px" disableGutters={true}>
   
</Container>
   <EditHelper/>
   <Forms/>
   <AdvertHelper/>
   <br>
   </br>
   <br>
   </br>

         </div>
        )
    }
}

export default EditProfile