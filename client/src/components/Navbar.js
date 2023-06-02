import { Fab, Grid, Typography } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import userStore from '../stores/userStore';
import IconButton from '@mui/material/IconButton';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Navbar = observer(() => {
  
  const navbarItems = [
    {path: '/jobs', label: 'Jobs'},
    {path: '/postajob', label: 'Post a Job', requiresAuth: true},
    {path: '/about', label: 'About Us'},
    {path: '/contact', label: 'Contact'},
    {path: userStore.isLoggedIn ? '/account' : '/login', label: userStore.isLoggedIn ? userStore.user.firstname : 'Log In'}
  ];  

  return ( 
    <Grid container direction={{ xs:'column', sm:'row'}} position={{md:"sticky"}} top={{md:0}} spacing={{ xs:2, sm: 2, md: 3}} bgcolor="secondary.main" alignItems="center" justifyContent="center" sx={{paddingBottom:2, width:"100%", zIndex:10000, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}}>
      <Grid item xs={12} sm={'auto'}>
        <Typography fontFamily="fantasy" variant='h3' component={Link} to="/" color="primary.logo" marginRight={{md: 10}} sx={{textDecoration:'none', transition: 'font-size 0.3s', '&:hover': {fontSize: '3.5em',} }}>JobHub</Typography>
      </Grid>
      
      <Grid item xs={12} sm={'auto'} container justifyContent="center" spacing={2}>
        {navbarItems.map((item, index) => (
          (!item.requiresAuth || userStore.isLoggedIn) && (
            <Grid item key={index}>
              <Fab component={Link} to={item.path}  color='primary' variant='extended' sx={{borderRadius:3, transition: "transform 0.3s", '&:hover': {transform: "scale(1.2)"}}}>
                {item.label}
              </Fab>
            </Grid> )
        ))}
      </Grid>

      {userStore.isLoggedIn && 
      <Grid item xs={12} sm={'auto'}>
        <IconButton onClick={userStore.logOut}><ExitToAppIcon /></IconButton>
      </Grid>}
      
      <Grid item xs={12} sm={'auto'}>
        <ThemeToggle />
      </Grid>
    </Grid>
  );
})

export default Navbar;
