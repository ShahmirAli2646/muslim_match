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
import DataBlock from '../Profile/DataBlock'
import AdvertHelper from './AdvertHelper'
import Promotion from '../CommonContent/Promotion'
import ProfileSnippetCard from './ProfileSnippetCard'
import Prevnext from './Prevnext'
import userService from '../../services/user.service';




class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:JSON.parse(localStorage.getItem("user")),
      fullMatchPage : 1,
      potentialMatchPage :1 ,
      partialMatchPage: 1,
      FullMatches : null,
      PotentialMatches : null , 
      PartialMatches : null , 
    }

  }
  pagination = (tier , count)=>{
    console.log('yes im getting called')
    console.log('whats my props' , tier , count)
    if(tier==='Matched'){
      this.setState({fullMatchPage:count} ,  ()=>{
      const user = JSON.parse(localStorage.getItem("user"));
      this.setState({user})
      userService.getfullMatches(user?._id, this.state.fullMatchPage).then(
        (response) => {
          this.setState({ FullMatches: response.data })
          for (let i = 0; i < this.state.FullMatches.length; i++) {
            userService.getuser(this.state.FullMatches[i].user).then(
              (response) => {
                let temp_state = [...this.state.FullMatches];
                let temp_element = { ...temp_state[i] };
                temp_element.user_first_name = response.data.first_name
                temp_state[i] = temp_element;
                this.setState({ FullMatches: temp_state })
                let tempstate_age = [...this.state.FullMatches];
                let tempelement_age = { ...tempstate_age[i] };
                const newDate = Date.parse(tempelement_age.birthdate);
                const ageInMilliseconds = new Date() - new Date(newDate);
                const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
                tempelement_age.birthdate = result
                tempstate_age[i] = tempelement_age;
                this.setState({ FullMatches: tempstate_age })
              }
            )
          }
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log('message', message)
          return Promise.reject();
        }
      );
      })
      console.log(this.state)
    }
    if(tier==='Potentials'){
      this.setState({potentialMatchPage:count} ,  ()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        userService.getpotentialMatches(user?._id, this.state.potentialMatchPage).then(
          (response) => {
            console.log('response', response)
            this.setState({ PotentialMatches: response.data })
            //add here
            for (let i = 0; i < this.state.PotentialMatches.length; i++) {
              userService.getuser(this.state.PotentialMatches[i].user).then(
                (response) => {
                  let temp_state = [...this.state.PotentialMatches];
                  let temp_element = { ...temp_state[i] };
                  temp_element.user_first_name = response.data.first_name
                  temp_state[i] = temp_element;
                  this.setState({ PotentialMatches: temp_state })
                  let tempstate_age = [...this.state.PotentialMatches];
                  let tempelement_age = { ...tempstate_age[i] };
                  const newDate = Date.parse(tempelement_age.birthdate);
                  const ageInMilliseconds = new Date() - new Date(newDate);
                  const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
                  tempelement_age.birthdate = result
                  tempstate_age[i] = tempelement_age;
                  this.setState({ PotentialMatches: tempstate_age })
                  console.log('finalupdatedpotentialsState' , )
                }
              )
            }
            return Promise.resolve();
          },
          (error) => {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            console.log('message', message)
            return Promise.reject();
          }
        );
      })
      console.log(this.state)
    }
    if(tier==='Nearly-Matched'){
      this.setState({partialMatchPage:count} ,  ()=>{
        const user = JSON.parse(localStorage.getItem("user"));
        userService.getpartialMatches(user?._id, this.state.partialMatchPage).then(
          (response) => {
            console.log('response', response)
            this.setState({ PartialMatches: response.data })
            //add here
            for (let i = 0; i < this.state.PartialMatches.length; i++) {
              userService.getuser(this.state.PartialMatches[i].user).then(
                (response) => {
                  let temp_state = [...this.state.PartialMatches];
                  let temp_element = { ...temp_state[i] };
                  temp_element.user_first_name = response.data.first_name
                  temp_state[i] = temp_element;
                  this.setState({ PartialMatches: temp_state })
                  let tempstate_age = [...this.state.PartialMatches];
                  let tempelement_age = { ...tempstate_age[i] };
                  const newDate = Date.parse(tempelement_age.birthdate);
                  const ageInMilliseconds = new Date() - new Date(newDate);
                  const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
                  tempelement_age.birthdate = result
                  tempstate_age[i] = tempelement_age;
                  this.setState({ PartialMatches: tempstate_age })
                }
              )
            }
            return Promise.resolve();
          },
          (error) => {
            const message =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
            console.log('message', message)
            return Promise.reject();
          }
        );
      })
      console.log(this.state)
    }
  }

  componentDidMount() {
    console.log('what are profile card props on mount' , this.props)
    
      const user = JSON.parse(localStorage.getItem("user"));
      this.setState({user})
      userService.getfullMatches(user?._id, this.state.fullMatchPage).then(
        (response) => {
          this.setState({ FullMatches: response.data })
          for (let i = 0; i < this.state.FullMatches.length; i++) {
            userService.getuser(this.state.FullMatches[i].user).then(
              (response) => {
                let temp_state = [...this.state.FullMatches];
                let temp_element = { ...temp_state[i] };
                temp_element.user_first_name = response.data.first_name
                temp_state[i] = temp_element;
                this.setState({ FullMatches: temp_state })
                let tempstate_age = [...this.state.FullMatches];
                let tempelement_age = { ...tempstate_age[i] };
                const newDate = Date.parse(tempelement_age.birthdate);
                const ageInMilliseconds = new Date() - new Date(newDate);
                const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
                tempelement_age.birthdate = result
                tempstate_age[i] = tempelement_age;
                this.setState({ FullMatches: tempstate_age })
              }
            )
          }
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log('message', message)
          return Promise.reject();
        }
      );
      userService.getpotentialMatches(user?._id, this.state.potentialMatchPage).then(
        (response) => {
          console.log('response', response)
          this.setState({ PotentialMatches: response.data })
          //add here
          for (let i = 0; i < this.state.PotentialMatches.length; i++) {
            userService.getuser(this.state.PotentialMatches[i].user).then(
              (response) => {
                let temp_state = [...this.state.PotentialMatches];
                let temp_element = { ...temp_state[i] };
                temp_element.user_first_name = response.data.first_name
                temp_state[i] = temp_element;
                this.setState({ PotentialMatches: temp_state })
                let tempstate_age = [...this.state.PotentialMatches];
                let tempelement_age = { ...tempstate_age[i] };
                const newDate = Date.parse(tempelement_age.birthdate);
                const ageInMilliseconds = new Date() - new Date(newDate);
                const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
                tempelement_age.birthdate = result
                tempstate_age[i] = tempelement_age;
                this.setState({ PotentialMatches: tempstate_age })
                console.log('finalupdatedpotentialsState' , )
              }
            )
          }
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log('message', message)
          return Promise.reject();
        }
      );
      userService.getpartialMatches(user?._id, this.state.partialMatchPage).then(
        (response) => {
          console.log('response', response)
          this.setState({ PartialMatches: response.data })
          //add here
          for (let i = 0; i < this.state.PartialMatches.length; i++) {
            userService.getuser(this.state.PartialMatches[i].user).then(
              (response) => {
                let temp_state = [...this.state.PartialMatches];
                let temp_element = { ...temp_state[i] };
                temp_element.user_first_name = response.data.first_name
                temp_state[i] = temp_element;
                this.setState({ PartialMatches: temp_state })
                let tempstate_age = [...this.state.PartialMatches];
                let tempelement_age = { ...tempstate_age[i] };
                const newDate = Date.parse(tempelement_age.birthdate);
                const ageInMilliseconds = new Date() - new Date(newDate);
                const result = Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
                tempelement_age.birthdate = result
                tempstate_age[i] = tempelement_age;
                this.setState({ PartialMatches: tempstate_age })
              }
            )
          }
          return Promise.resolve();
        },
        (error) => {
          const message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log('message', message)
          return Promise.reject();
        }
      );
    
  }

  
  

  render() {
    const tiers = [
      {
        title: 'Matched',
        description: [
          '30'
        ],

      },
      {
        title: 'Potentials',
        description: [
          'Mobeen'
        ],
      },
      {
        title: 'Nearly-Matched',
        description: [
          'Birmingham Uk'
        ],
      },
      {
        title: 'Liked',
        description: [
          'Birmingham Uk'
        ],
      },
      {
        title: 'Didnt-Like',
        description: [
          'Birmingham Uk'
        ],
      },
    ];
    return (
      <div style={{ background: '#f9f9f9' }}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <Container maxWidth='md' component="main" style={{ padding: '100px' }}>
          <Card style={{ backgroundColor: '#fff', boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)', marginBottom: '30px' }}>
            <CardHeader
              style={{ fontSize: 15, color: 'rgba(163, 19, 19, 0.65)', textTransform: 'capitalize', fontWeigth: 'bold' }}
              title={'SUPPORT ADVISER MESSAGE'}
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? theme.palette.grey[2]
                    : theme.palette.grey[700],
                fontSize: 5,
              }}
            />
            <CardContent>
              <Typography style={{ color: '#666', fontSize: '14px' }}>
                {'Assalamu alaikum ' + this.state.user?.first_name}
              </Typography>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {'Pure Muslim Match is on a mission to find you the best matches and get you married!  Potential matches are selected for you based on what you say you are looking for in your profile, so its good to be as flexible as possible with your search criteria so that more potentials are found for you to consider.  If you have any questions or need assistance send an email to support@puremuslimmatch.com'}
              </p>
              <p style={{ color: '#666', fontSize: '14px' }}>
                {'Jazak’Allahu khairan'}
              </p>
            </CardContent>
          </Card>
          {tiers.map((tier) => (
            <div id={tier.title}>
              <Card style={{ backgroundColor: '#fff', boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)', marginBottom: '30px' }}>
                <CardHeader
                  style={{ color: 'rgba(21, 135, 135, 0.8)' }}
                  title={tier.title}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[2]
                        : theme.palette.grey[700],
                    fontSize: '20px'
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
                  <ProfileSnippetCard 
                  tier={tier.title}
                  fullMatchPage={this.state.fullMatchPage}
                  potentialMatchPage={this.state.potentialMatchPage}
                  partialMatchPage={this.state.partialMatchPage}
                  fullMatches={this.state.FullMatches}
                  partialMatches={this.state.PartialMatches}
                  potentialMatches={this.state.PotentialMatches}
                  />
                </CardContent>
                <Prevnext tier={tier.title} pagination={this.pagination}/>
              </Card>
            </div>
          ))
          }
        </Container>
        <SectionHelper />
        <br>
        </br>
        <br>
        </br>
      </div >
    )
  }
}

export default Profile

