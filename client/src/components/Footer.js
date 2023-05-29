import { AppBar, Toolbar } from '@mui/material';

const Footer = () => {
    return ( 
    <AppBar position="static" sx={{ marginTop:5, backgroundColor:"secondary.main", color:"primary.logo", boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.2)'}}>
      <Toolbar>
        @JobHub 
      </Toolbar>
    </AppBar>
     );
}
 
export default Footer;