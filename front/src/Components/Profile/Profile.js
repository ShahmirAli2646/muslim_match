import * as React from 'react';



import background from '../../assets/Resized-1200.jpg'
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
import SectionHelper from './SectionHelper';
import DataBlock from './DataBlock'
import AdvertHelper from './AdvertHelper'
import Promotion from '../CommonContent/Promotion'
import userService from '../../services/user.service';
import { withRouter } from 'react-router-dom';



class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
      userName: null,
      age: null,
      location: null
    }
    console.log('props in my constructor', this.props)
  }
  componentDidMount() {
   
    if (this.props.location !== undefined) {
      console.log('history')
      if (this.props.location.state !== undefined) {
        console.log('first time load')
        if (this.props.location.state.id !== undefined && this.props.location.state.id !== null) {
          console.log('from matches')
          this.getUserData(this.props.location.state.id)
        
        }
        if (this.props.location.state.from === 'link') {
          console.log('location props', this.props)
          const reloadCount = sessionStorage.getItem('reloadCount');
          if (reloadCount < 1) {
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
          } else {
            sessionStorage.removeItem('reloadCount');
          }
          this.getUserData()
        }
        if(this.props.location.state.from !== undefined){
          if(this.props.location.state.from.pathname === "/signin"){
            const reloadCount = sessionStorage.getItem('reloadCount');
            if (reloadCount < 1) {
              sessionStorage.setItem('reloadCount', String(reloadCount + 1));
              window.location.reload();
            } else {
              sessionStorage.removeItem('reloadCount');
            }
            this.getUserData()
          }
          else if (this.props.location.state.from.pathname === "/signup"){
            const reloadCount = sessionStorage.getItem('reloadCount');
            if (reloadCount < 1) {
              sessionStorage.setItem('reloadCount', String(reloadCount + 1));
              window.location.reload();
            } else {
              sessionStorage.removeItem('reloadCount');
            }
            this.getUserData()
          }
        } 
       
      }
      else {
        this.getUserData()
      }
    }
    else {
      this.getUserData()
    }
  }

  getUserData = async (view_id) => {
    console.log('view_id')
    if (view_id) {
      const userData = await userService.getuser(view_id)
      this.setState({ userName: userData.data.first_name }, async () => {
        const userProfile = await userService.getuserProfile(this.state.user?._id)
        console.log('userProfile', userProfile)
        const newDate = Date.parse(userProfile.data.birthdate);
        const ageInMilliseconds = new Date() - new Date(newDate);
        const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
        const location = userProfile.data.Whichcountryorcountriesdoyoulivein.label;
        this.setState({ age: result })
        this.setState({ location: location })

      })
    }
    else {
      const userData = await userService.getuser(this.state.user?._id)
      console.log('userData', userData)
      this.setState({ userName: userData.data.first_name }, async () => {
        const userProfile = await userService.getuserProfile(this.state.user?._id)
        console.log('userProfile', userProfile)
        const newDate = Date.parse(userProfile.data.birthdate);
        const ageInMilliseconds = new Date() - new Date(newDate);
        const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
        const location = userProfile.data.Whichcountryorcountriesdoyoulivein.label;
        this.setState({ age: result })
        this.setState({ location: location })

      })
    }

  }

  render() {
    const tiers = [
      {
        title: 'AGE',
        description: [
          this.state.age
        ],

      },
      {
        title: 'USER NAME',
        description: [
          this.state.userName
        ],
      },
      {
        title: 'LOCATION',
        description: [
          this.state.location
        ],
      },
    ];
    return (
      <div>
        <Container maxWidth="1600px" disableGutters={true}>
          <div style={{
            backgroundImage: `url(${background}) `, backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',

            height: '50vh'
          }}>
            <div style={{ padding: 100 }}>


              <h3 style={{ textAlign: 'center', fontSize: 35, padding: 0, margin: 0 }}><span style={{ color: '#ffffff' }}>بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</span></h3>

              <p style={{ textAlign: 'center', fontSize: 25 }}><span style={{ color: "#ffffff" }}><em>Bismillah Al</em>–<em>Rahman</em>,&nbsp;<em>Al</em>–<em>Rahim</em></span></p>

            </div>
          </div>
        </Container>

        <Container maxWidth="1600px" disableGutters={true}>
          <div style={{ background: '#009da0', textAlign: 'center', padding: '150px' }}>
            <span style={{ fontSize: '25px', color: '#e0e0e0' }}>وَمَن يُطِعِ اللَّهَ وَالرَّسُولَ فَأُولَٰئِكَ مَعَ الَّذِينَ أَنْعَمَ اللَّهُ عَلَيْهِم مِّنَ النَّبِيِّينَ وَالصِّدِّيقِينَ وَالشُّهَدَاءِ وَالصَّالِحِينَ ۚ وَحَسُنَ أُولَٰئِكَ رَفِيقًا</span>
            <p><em style={{ color: '#e5e5e5', fontSize: '18px' }}><br></br>
              And whoso obeys Allah and the Messenger, then they will be with those on whom Allah has bestowed His Grace, of the Prophets, the Siddiqoon, the martyrs, and the righteous. And how excellent these companions are!</em></p>
            <p><em style={{ color: '#e5e5e5', fontSize: '18px' }}></em><span style={{ color: '#e5e5e5' }}><strong> Noble&nbsp;Qur’an [94:5]&nbsp;</strong></span></p>
          </div>
        </Container>
        <Container maxWidth="1600px" disableGutters={true}>
          <div style={{ background: '#efefef' }}>
            <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
            <CssBaseline />

            {/* Hero unit */}

            {/* End hero unit */}
            <Container maxWidth="xl" component="main">
              <Grid container spacing={5} >
                {tiers.map((tier) => (
                  // Enterprise card is full width at sm breakpoint
                  <Grid
                    item
                    key={tier.title}
                    xs={12}
                    md={4}
                  >
                    <Card style={{ backgroundColor: '#efefef', boxShadow: 'none' }}>
                      <CardHeader
                        style={{ textAlign: 'center', fontSize: 20, color: 'rgba(163, 19, 19, 0.65)' }}
                        title={tier.title}
                        sx={{
                          backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                              ? theme.palette.grey[2]
                              : theme.palette.grey[700],
                        }}
                      />
                      <CardContent>
                        <Box
                          sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'baseline',
                            mb: 2,
                          }}
                        >
                        </Box>
                        <ul>
                          {tier.description.map((line) => (
                            <Typography
                              style={{
                                color: '#666',

                                fontSize: 'larger',
                                fontWeight: 'bold'
                              }}
                              component="li"
                              variant="subtitle1"
                              align="center"
                              key={line}
                            >
                              {line}
                            </Typography>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </Container>
        <SectionHelper />
        <DataBlock />
        <br>
        </br>
        <br>
        </br>
      </div>
    )
  }
}

export default withRouter(Profile)

