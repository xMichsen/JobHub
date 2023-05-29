import { Fab, Stack, Typography } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import { Link } from 'react-router-dom';

const Navbar = () => {

  const navbarItems = [
    {path: '/jobs', label: 'Jobs'},
    {path: '/postajob', label: 'Post a Job'},
    {path: '/about', label: 'About Us'},
    {path: '/contact', label: 'Contact Us'},
    {path: '/login', label: 'Log In'}
  ];

  return ( 
    <Stack direction={{ xs:'column', sm:'row'}} position={{md:"sticky"}} top={{md:0}} spacing={{ xs:2, sm: 2, md: 3}} bgcolor="secondary.main"  alignItems="center" justifyContent="center" sx={{paddingBottom:1, paddingTop:1, width:"100%", zIndex:1, boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'}}>
      <Typography fontFamily="fantasy" variant='h3' component={Link} to="/" color="primary.logo" marginRight={{md: 10}} sx={{textDecoration:'none', transition: 'font-size 0.3s', '&:hover': {fontSize: '3.5em',} }}>JobHub</Typography>
      {navbarItems.map((item, index) => (
        <Fab key={index} component={Link} to={item.path}  color='primary' variant='extended' sx={{borderRadius:3, transition: "transform 0.3s", '&:hover': {transform: "scale(1.2)"}}}>
          {item.label}
        </Fab>
      ))}
      <ThemeToggle />
    </Stack>
   );
}
 
export default Navbar;