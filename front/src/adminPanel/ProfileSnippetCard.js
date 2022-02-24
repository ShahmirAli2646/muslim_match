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
           
          ];
        return(
            
            
                <div style={{display:'flex' , flexDirection:'row'}}>
                {tiers.map((item)=>(
                    <Card style={{backgroundColor:'#fff' , border: '1px solid #ededed' , boxShadow:'0px 2px 6px 0px rgb(0 0 0 / 30%)' , marginRight:'15px'}}>
                <CardHeader
                style={{background:'rgb(255 215 215)',textAlign:'center' , fontSize:20 , color:'rgba(163, 19, 19, 0.65)'}}
                title={item.title}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[2]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Typography>
                      {item.description}
                      {'dwoiaoiwafifwahfewafeaceacbewqoieawdadbawnbwaonaw'}
                  </Typography>
                 
                </CardContent>
                <CardActions style={{justifyContent:'center'}}>
                    
          <Button style={{color: '#ffff',
    borderWidth: '1px!important',
    borderColor: '#ff4a83',
    fontSize: '12px',
    backgroundColor: '#ff4a83' }} size="large">View Profile</Button>
          
    
        </CardActions>
        
               
              </Card>

                ))}
        
        </div>
            
         
        )
    }
}

export default ProfileSnippetCard