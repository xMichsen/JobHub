import Layout from "../Layout";
import { useState } from "react";
import { Grid, IconButton, Box, Typography } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DescriptionIcon from '@mui/icons-material/Description';
import SettingsIcon from '@mui/icons-material/Settings';
import StarIcon from '@mui/icons-material/Star';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ApplicationIcon from '@mui/icons-material/Assignment';
import UserProfile from "./UserProfile";
import userStore from "../stores/userStore";

const Account = () => {
    const [action, setAction] = useState();
    const icons = [
        { icon: AccountCircleIcon, text: 'User Profile' },
        { icon: DescriptionIcon, text: 'CV & Documents' },
        { icon: SettingsIcon, text: 'Account Settings' },
        { icon: StarIcon, text: 'Favorite Jobs' },
        { icon: NotificationsIcon, text: 'Notifications' },
        { icon: ApplicationIcon, text: 'Job Applications' },
    ];
    
    const changeAction = (text) => {
        setAction(text);
    };

    const renderAction = () => {
        switch(action) {
            case 'User Profile':
                return <UserProfile user={userStore.user}/>;
            case 'CV & Documents':
                return null;
            case 'Account Settings':
                return null;
            case 'Favorite Jobs':
                return null;
            case 'Notifications':
                return null;
            case 'Job Applications':
                return null;
            default:
                return <UserProfile user={userStore.user}/>;
        }
    };

    return ( 
        <Layout>
            <Grid container direction="column" alignItems="center" justifyContent="center" mt={5}>
                <Typography fontFamily="fantasy" variant="h4">Account settings</Typography>
                <Grid item container xs={12} md={8} justifyContent="center" spacing={{xs:0.1, md:1}}>
                    {icons.map((item, index) => (
                        <Grid item xs={2} sm={1} key={index}>
                            <IconButton disableRipple color="primary" onClick={() => changeAction(item.text)}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease", '&:hover': { transform: 'scale(1.2)' }}}>
                                    <item.icon  sx={{ fontSize: {xs: 20, sm: 40} }} />
                                    <Typography variant="body2">{item.text}</Typography>
                                </Box>
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={12} md={8} sx={{ marginTop: 5, marginBottom: 5 }}>
                    {renderAction()}
                </Grid>
            </Grid>
        </Layout>
     );
}
 
export default Account;
