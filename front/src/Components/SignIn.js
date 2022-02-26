import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import background from '../assets/Fotolia_118824623_M-PAID-FOR-IMAGE-RESIZED-JPEG-MINI-mobile.jpg'
import Description from '../Components/CommonContent/Description'
import AgencyProcess from '../Components/CommonContent/AgencyProcess'
import Promotion from '../Components/CommonContent/Promotion'
import { login } from '../actions/auth';
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";


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

const theme = createTheme();

export default function SignIn() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    dispatch(login(email, password))
  };

  return (
      <div>
      <div style={{ backgroundImage: `url(${background}) ` ,backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
     
      height: '100vh' , padding:'70px'  , boxSizing:'unset'}}>

      
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" style={{background:'white' , borderRadius:'10px' ,boxShadow:'0px 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23) '   }} >
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0.3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box   noValidate sx={{ mt: 1 , marginTop: 0.3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',}}>
            <TextField
              value={email}
              onChange={(event)=>{
                setEmail(event.target.value)
              }}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              value={password}
              onChange={(event)=>{
                setPassword(event.target.value)
              }}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button onClick={handleSubmit}
              style={{color: 'rgb(255, 255, 255)',
                borderColor: 'rgb(255, 255, 255)',
                borderWidth: '2px',
                borderRadius: '30px',
                backgroundColor: 'rgb(255, 74, 130)',
                width: '30%',
                textTransform: 'lowercase' }}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
       
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
        
      </Container>
    </ThemeProvider>
    </div>
    <Description/>
    <div style={{padding:'50px'}}>
    <AgencyProcess/>
    </div>
    
    <div style={{background:'#009da0' , padding:'50px'}}>
    <Promotion/>
    </div>
   
    </div>

  );
}