import * as React from 'react';
import YouTube from 'react-youtube';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';


class AgencyProcess extends React.Component {
  render() {
    function Copyright(props) {
      return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
          {'Copyright © '}
          <Link color="inherit" href="https://mui.com/">
            Your Website
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      );
    }

    const tiers = [
      {
        title: 'Profile',
        description: [
          'Profile is password protected and you choose who can view it'
        ],
      },
      {
        title: 'Match',
        description: [
          'Matches found for you based on what you say you are looking for'
        ],
      },
      {
        title: 'Talks',
        description: [
          ' Admin corresponds between matches to establish compatibility'
        ],
      },
      {
        title: 'Meet',
        description: [
          ' Contact details exchanged between Wali/mahram and Suitor'
        ],
      },
    ];

    const footers = [
      {
        title: 'Company',
        description: ['Team', 'History', 'Contact us', 'Locations'],
      },
      {
        title: 'Features',
        description: [
          'Cool stuff',
          'Random feature',
          'Team feature',
          'Developer stuff',
          'Another one',
        ],
      },
      {
        title: 'Resources',
        description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
      },
      {
        title: 'Legal',
        description: ['Privacy policy', 'Terms of use'],
      },
    ];
    const opts = {
      height: '300',
      width: '500',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      <div style={{ background: 'white', textAlign: 'center' }}>
        <h1 style={{ color: '#018796', fontWeight: 'normal', fontFamily: 'fantasy', fontStyle: 'italic' }}>
          MARRIAGE AGENCY PROCESS
        </h1>
        <div style={{ padding: '80px' }}>
          <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />
        </div>

        <React.Fragment>
          <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />


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
                  xl={3}
                >
                  <Card style={{ boxShadow: 'none' }}>
                    <CardHeader
                      style={{ color: '#d9ae64', fontWeight: 'bold', fontFamily: 'fantasy', textTransform: 'uppercase' }}
                      title={tier.title}
                      titleTypographyProps={{ align: 'center' }}
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
          {/* Footer */}

          {/* End footer */}
        </React.Fragment>

      </div>
    )
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}
export default AgencyProcess
