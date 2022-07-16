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
import AdvertHelper from './AdvertHelper';
import SectionHelper from './SectionHelper';
import background from '../../assets/profilecardbackground.jpg'
import actionsbackground from '../../assets/cardactionsbackground.jpg'
import LocationOn from '@mui/icons-material/LocationOn'
import UserService from '../../services/user.service';
import { useSelector } from 'react-redux'
import { borderRadius, width } from '@mui/system';
import viewService from '../../services/user.service'
import { withRouter , Redirect  } from "react-router-dom";



class ProfileSnippetCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      FullMatches: [],
      PartialMatches: [],
      PotentialMatches: [],
      userArray: [],
      FinalArray: [],
      triggerUpdateState: null,
      userState: null,
      view:null,
      view_id:null
    };
  }

  componentDidUpdate() {
    console.log('what are profile card props', this.props)

  }
  nextPath(path) {
    this.props.history.push(path);
  }

  handleView = async (view_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
       let formdata = {
        user_id : user?._id,
        view_id : view_id
       }
      const res = await viewService.viewUserProfile(formdata)
      this.setState({view_id} , ()=>{
        console.log('state view id' , this.state.view_id)
      })
  }


  render() {
    return (
      <Container maxWidth="sm" component="main">
        {this.state.view_id!==null && (
          
           <Redirect to={{
            pathname: '/user-profile/view-profile',
            state: { id: this.state.view_id }
        }}
        />
        )}
        {this.props.tier === 'Matched' ? (
          <React.Fragment>
            {this.props.fullMatches !== null ? (
              <React.Fragment>
                {this.props.fullMatches.map((item) => (
                  <Card style={{ backgroundColor: '#fff', border: '1px solid #ededed', borderRadius: '20px', boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)', marginBottom: '20px' }}>
                    <CardHeader
                      style={{
                        backgroundImage: `url(${actionsbackground}) `, backgroundPosition: 'center',
                        backgroundSize: 'cover', textShadow: '1px 3px #d3d3', letterSpacing: '2px',
                        textAlign: 'center', fontSize: 20, color: '#fff'
                      }}
                      title={item.user_first_name}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[2]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                      <LocationOn style={{ color: '#e36b6b' }} />
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.Whichcountryorcountriesdoyoulivein.label + ' ' + item.Whichcitytownvillagedoyoulivein.label}
                      </Typography>
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.gender === 'Male' ? (
                          <React.Fragment>
                            {"Said in his registration he follows the teachings of " +
                              item.TheIslamicteachingssectthatyoufollow +
                              " and also said with regards to his islamic studing:" +
                              item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {"Said in her registration she follows the teachings of " +
                              item.TheIslamicteachingssectthatyoufollow +
                              " and also said with regards to her islamic studing:" +
                              item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}
                          </React.Fragment>
                        )}
                      </Typography>
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.gender === 'Male' ? (
                          <React.Fragment>
                            {'he is ' +
                              item.birthdate +
                              ' years old , and ' +
                              item.Whatisyourmaritalstatusmen +
                              ' and described his ethnicity as ' +
                              item.Whatisyourethnicity + '. he Described his Profession as '
                              + item.Whatisyourprofession}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {item.Doyoucoveryourhairfromnonmahrams === "Hijab" ? (
                              <React.Fragment>
                                {'she is ' +
                                  item.birthdate +
                                  ' years old , and ' +
                                  item.Whatisyourmaritalstatuswomen +
                                  'and described her ethnicity as ' +
                                  item.Whatisyourethnicity +
                                  ' She Wears Hijab' +
                                  '. She Described her Profession as ' +
                                  item.Whatisyourprofession}

                              </React.Fragment>
                            ) :
                              <React.Fragment>
                                {'she is ' +
                                  item.birthdate +
                                  ' years old , and ' +
                                  item.Whatisyourmaritalstatuswomen +
                                  ' and described her ethnicity as ' +
                                  item.Whatisyourethnicity +
                                  ' She does not wear Hijab' +
                                  '. She Described her Profession as ' +
                                  item.Whatisyourprofession}

                              </React.Fragment>
                            }
                          </React.Fragment>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions style={{
                      justifyContent: 'center', backgroundImage: `url(${background}) `, backgroundPosition: 'center',
                      backgroundSize: 'cover', textShadow: '1px 3px #d3d3', letterSpacing: '2px',
                      textAlign: 'center', fontSize: 20, color: '#fff', padding: '20px'
                    }}>
                      <Button onClick={()=>{
                        this.handleView(item.user)
                      }} style={{
                        color: '#1e1e1e',
                        textTransform: 'capitalize',
                        borderWidth: '1px',
                        borderRadius: '6px',
                        borderWidth: '1px!important',
                        borderColor: '#FFFFFF',
                        fontSize: '13px',
                        backgroundColor: 'rgba(247,247,247,0.84)'
                      }} size="small">
                        View Profile</Button>
                      <Button style={{
                        color: '#1e1e1e',
                        textTransform: 'capitalize',
                        borderWidth: '1px',
                        borderRadius: '6px',
                        borderWidth: '1px!important',
                        borderColor: '#FFFFFF',
                        fontSize: '13px',
                        backgroundColor: 'rgba(247,247,247,0.84)'
                      }} size="small">
                        Like Profile</Button>
                    </CardActions>
                  </Card>
                ))}
              </React.Fragment>
            ) : ''}

          </React.Fragment>
        ) : this.props.tier === 'Potentials' ? (
          <React.Fragment>
            {this.props.potentialMatches !== null ? (
              <React.Fragment>
              {
                this.props.potentialMatches.map((item) => (
                  <Card style={{ backgroundColor: '#fff', border: '1px solid #ededed', borderRadius: '20px', boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)', marginBottom: '20px' }}>
                    <CardHeader
                      style={{
                        backgroundImage: `url(${actionsbackground}) `, backgroundPosition: 'center',
                        backgroundSize: 'cover', textShadow: '1px 3px #d3d3', letterSpacing: '2px',
                        textAlign: 'center', fontSize: 20, color: '#fff'
                      }}
                      title={item.user_first_name}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[2]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                      <LocationOn style={{ color: '#e36b6b' }} />
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.Whichcountryorcountriesdoyoulivein.label + ' ' + item.Whichcitytownvillagedoyoulivein.label}
                      </Typography>
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.gender === 'Male' ? (
                          <React.Fragment>
                            {"Said in his registration he follows the teachings of " +
                              item.TheIslamicteachingssectthatyoufollow +
                              " and also said with regards to his islamic studing:" +
                              item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {"Said in her registration she follows the teachings of " +
                              item.TheIslamicteachingssectthatyoufollow +
                              " and also said with regards to her islamic studing:" +
                              item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}
                          </React.Fragment>
                        )}
                      </Typography>
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.gender === 'Male' ? (
                          <React.Fragment>
                            {'he is ' +
                              item.birthdate +
                              ' years old , and ' +
                              item.Whatisyourmaritalstatusmen +
                              ' and described his ethnicity as ' +
                              item.Whatisyourethnicity + '. he Described his Profession as '
                              + item.Whatisyourprofession}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {item.Doyoucoveryourhairfromnonmahrams === "Hijab" ? (
                              <React.Fragment>
                                {'she is ' +
                                  item.birthdate +
                                  ' years old , and ' +
                                  item.Whatisyourmaritalstatuswomen +
                                  'and described her ethnicity as ' +
                                  item.Whatisyourethnicity +
                                  ' She Wears Hijab' +
                                  '. She Described her Profession as ' +
                                  item.Whatisyourprofession}
                              </React.Fragment>
                            ) :
                              <React.Fragment>
                                {'she is ' +
                                  item.birthdate +
                                  ' years old , and ' +
                                  item.Whatisyourmaritalstatuswomen +
                                  ' and described her ethnicity as ' +
                                  item.Whatisyourethnicity +
                                  ' She does not wear Hijab' +
                                  '. She Described her Profession as ' +
                                  item.Whatisyourprofession}
                              </React.Fragment>
                            }
                          </React.Fragment>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions style={{
                      justifyContent: 'center', backgroundImage: `url(${background}) `, backgroundPosition: 'center',
                      backgroundSize: 'cover', textShadow: '1px 3px #d3d3', letterSpacing: '2px',
                      textAlign: 'center', fontSize: 20, color: '#fff', padding: '20px'
                    }}>
                      <Button onClick={()=>{
                        this.handleView(item.user)}} style={{
                        color: '#1e1e1e',
                        textTransform: 'capitalize',
                        borderWidth: '1px',
                        borderRadius: '6px',
                        borderWidth: '1px!important',
                        borderColor: '#FFFFFF',
                        fontSize: '13px',
                        backgroundColor: 'rgba(247,247,247,0.84)'
                      }} size="small">
                        View Profile</Button>
                      <Button style={{
                        color: '#1e1e1e',
                        textTransform: 'capitalize',
                        borderWidth: '1px',
                        borderRadius: '6px',
                        borderWidth: '1px!important',
                        borderColor: '#FFFFFF',
                        fontSize: '13px',
                        backgroundColor: 'rgba(247,247,247,0.84)'
                      }} size="small">
                        Like Profile</Button>
                    </CardActions>
                  </Card>
                ))
              }
              </React.Fragment>

            ) : ''}

          </React.Fragment>
        ) : this.props.tier === 'Nearly-Matched' ? (
          <React.Fragment>
            {this.props.partialMatches !== null ? (
              <React.Fragment>
              {this.props.partialMatches.map((item) => (
                  <Card style={{ backgroundColor: '#fff', border: '1px solid #ededed', borderRadius: '20px', boxShadow: '0px 2px 6px 0px rgb(0 0 0 / 30%)', marginBottom: '20px' }}>
                    <CardHeader
                      style={{
                        backgroundImage: `url(${actionsbackground}) `, backgroundPosition: 'center',
                        backgroundSize: 'cover', textShadow: '1px 3px #d3d3', letterSpacing: '2px',
                        textAlign: 'center', fontSize: 20, color: '#fff'
                      }}
                      title={item.user_first_name}
                      sx={{
                        backgroundColor: (theme) =>
                          theme.palette.mode === 'light'
                            ? theme.palette.grey[2]
                            : theme.palette.grey[700],
                      }}
                    />
                    <CardContent style={{ textAlign: 'center' }}>
                      <LocationOn style={{ color: '#e36b6b' }} />
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.Whichcountryorcountriesdoyoulivein.label + ' ' + item.Whichcitytownvillagedoyoulivein.label}
                      </Typography>
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.gender === 'Male' ? (
                          <React.Fragment>
                            {"Said in his registration he follows the teachings of " +
                              item.TheIslamicteachingssectthatyoufollow +
                              " and also said with regards to his islamic studing:" +
                              item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {"Said in her registration she follows the teachings of " +
                              item.TheIslamicteachingssectthatyoufollow +
                              " and also said with regards to her islamic studing:" +
                              item.AreyoucurrentlystudyingIslamorhaveyouinthepastDoyouhavetheintentiontostudyIslamicstudiesinthefutureIfyestoanyofthesequestionspleaseprovidedetails}
                          </React.Fragment>
                        )}
                      </Typography>
                      <Typography style={{ fontFamily: 'sans-serif', fontSize: '15px', fontWeight: 'bold', color: '#666' }}>
                        {item.gender === 'Male' ? (
                          <React.Fragment>
                            {'he is ' +
                              item.birthdate +
                              ' years old , and ' +
                              item.Whatisyourmaritalstatusmen +
                              ' and described his ethnicity as ' +
                              item.Whatisyourethnicity + '. he Described his Profession as '
                              + item.Whatisyourprofession}
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            {item.Doyoucoveryourhairfromnonmahrams === "Hijab" ? (
                              <React.Fragment>
                                {'she is ' +
                                  item.birthdate +
                                  ' years old , and ' +
                                  item.Whatisyourmaritalstatuswomen +
                                  'and described her ethnicity as ' +
                                  item.Whatisyourethnicity +
                                  ' She Wears Hijab' +
                                  '. She Described her Profession as ' +
                                  item.Whatisyourprofession}

                              </React.Fragment>
                            ) :
                              <React.Fragment>
                                {'she is ' +
                                  item.birthdate +
                                  ' years old , and ' +
                                  item.Whatisyourmaritalstatuswomen +
                                  ' and described her ethnicity as ' +
                                  item.Whatisyourethnicity +
                                  ' She does not wear Hijab' +
                                  '. She Described her Profession as ' +
                                  item.Whatisyourprofession}

                              </React.Fragment>
                            }
                          </React.Fragment>
                        )}
                      </Typography>
                    </CardContent>
                    <CardActions style={{
                      justifyContent: 'center', backgroundImage: `url(${background}) `, backgroundPosition: 'center',
                      backgroundSize: 'cover', textShadow: '1px 3px #d3d3', letterSpacing: '2px',
                      textAlign: 'center', fontSize: 20, color: '#fff', padding: '20px'
                    }}>
                      <Button onClick={()=>{
                        this.handleView(item.user)}} style={{
                        color: '#1e1e1e',
                        textTransform: 'capitalize',
                        borderWidth: '1px',
                        borderRadius: '6px',
                        borderWidth: '1px!important',
                        borderColor: '#FFFFFF',
                        fontSize: '13px',
                        backgroundColor: 'rgba(247,247,247,0.84)'
                      }} size="small">
                        View Profile</Button>
                      <Button style={{
                        color: '#1e1e1e',
                        textTransform: 'capitalize',
                        borderWidth: '1px',
                        borderRadius: '6px',
                        borderWidth: '1px!important',
                        borderColor: '#FFFFFF',
                        fontSize: '13px',
                        backgroundColor: 'rgba(247,247,247,0.84)'
                      }} size="small">
                        Like Profile</Button>
                    </CardActions>
                  </Card>
                ))
              }</React.Fragment>
            ) : ''}

          </React.Fragment>
        ) : ''}
      </Container>
    )
  }
}

export default ProfileSnippetCard