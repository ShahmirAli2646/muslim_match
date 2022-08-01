import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';

import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/ExitToApp';
import MailIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Settings';
import MoreIcon from '@mui/icons-material/MoreVert';

import ProductLogo from '../assets/PMM-Logo-Banner-300x72-1.png'
import CustomSelect from './customSelect';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom"
import Drawer from '@mui/material/Drawer';
import { logout } from '../actions/auth';
import { useDispatch, useSelector } from "react-redux";

import Settings from './Settings/Settings'






export default function PrimarySearchAppBar({ isAuthenticated, user }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()
  const handleClickAway = () => {
    setOpen(false);
  };



  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);

    handleMobileMenuClose();
  };
  const openSettingsPane = () => {
    setOpen(true);

  }
  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };


  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={() => {
        dispatch(logout())
        handleMenuClose()

      }}>logout</MenuItem>

    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem >

        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>

        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"

        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Settings open={open} handleClickAway={handleClickAway} />
      <AppBar position="static" style={{ background: 'white' }}>
        <Toolbar>



          <a >
            <img style={{ width: '100%' }} src={ProductLogo} alt='icon' />
          </a>
          <Box sx={{ flexGrow: 1 }} />
          {isAuthenticated && user?.role !== 'admin' ? (
            <Stack spacing={0} direction="row">
              {isAuthenticated && user?.role !== 'admin' ? (
                <CustomSelect user={user} />
              ) : ''}
              <Button variant="text"><Link to={'/user-profile/my-matches'} style={{ color: 'rgb(137 134 134)', textDecoration: 'none', textTransform: 'capitalize', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '15px' }}>My Matches</Link></Button>
              <Button style={{ color: 'rgb(137 134 134)', textTransform: 'capitalize', fontFamily: 'sans-serif', fontWeight: 'bold', fontSize: '15px' }} variant="text">Donate</Button>
            </Stack>
          ) : ''
          }

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            {isAuthenticated && user?.role !== 'admin' ? (
              <div>
                <IconButton size="large" aria-label="show 4 new mails" style={{ color: '#666' }} color="inherit">
                  <Badge badgeContent={4} color="error">
                    <MailIcon style={{ fontSize: '30px' }} />
                  </Badge>
                </IconButton>
                <IconButton size="large" aria-label="show 4 new mails" style={{ color: '#666' }} color="inherit">
                  <Badge badgeContent={4} color="error">
                    <NotificationsIcon style={{ fontSize: '30px' }} />
                  </Badge>
                </IconButton>
              </div>
            ) : ''}

            {isAuthenticated ? (
              <IconButton
                style={{ color: '#666' }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle style={{ fontSize: '30px' }} />
              </IconButton>
            ) : ''}

          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              style={{ color: 'black' }}
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
