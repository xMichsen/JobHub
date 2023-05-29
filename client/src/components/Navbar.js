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
    <Stack direction={{ xs:'column', sm:'row'}} spacing={{ xs:1, sm: 2, md: 3}} flexWrap="wrap" alignItems="center" justifyContent="center" sx={{borderBottom: 1,paddingBottom:2}}>
      <Typography variant='h3' component={Link} to="/" sx={{textDecoration:'none'}}>JobHub</Typography>
      {navbarItems.map((item, index) => (
        <Fab key={index} component={Link} to={item.path}  color='primary' variant='extended' sx={{borderRadius:3}}>
          {item.label}
        </Fab>
      ))}
      <ThemeToggle />
    </Stack>
   );
}
 
export default Navbar;