import Layout from "../Layout";
import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography, IconButton, Grid } from "@mui/material";
import QnA from "./QnA";
import { faqData, postJobsData, aboutUsData, activitiesData, searchJobsData } from "./QnAData";

const AboutUs = () => {
    const [section, setSection] = useState("FAQ");

    const icons = [
        { icon: SearchIcon, text: 'FAQ' },
        { icon: GroupAddIcon, text: 'Post Jobs' },
        { icon: ContactSupportIcon, text: 'Search Jobs' },
        { icon: LocalActivityIcon, text: 'Activities' },
        { icon: InfoIcon, text: 'About Us' },
    ];

    const changeSection = (text) => {
        setSection(text);
    };

    const renderSection = () => {
        switch(section) {
            case 'Search Jobs':
                return ( <QnA data={searchJobsData} text={section} /> );
            case 'Post Jobs':
                return ( <QnA data={postJobsData} text={section} /> );
            case 'FAQ':
                return ( <QnA data={faqData} text={section}/> );
            case 'Activities':
                return ( <QnA data={activitiesData} text={section}/> );
            case 'About Us':
                return ( <QnA data={aboutUsData} text={section}/> );
            default:
                return ( <QnA data={faqData} text={section}/> );
        }
    };

    return ( 
        <Layout>
            <Grid container direction="column" alignItems="center" justifyContent="center">
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ textAlign: "center", marginTop: 5 }}>
                        How can we assist you?
                    </Typography>
                </Grid>

                <Grid item container xs={12} md={8} justifyContent="center" spacing={1}>
                    {icons.map((item, index) => (
                        <Grid item xs={2} sm={1} key={index}>
                            <IconButton onClick={() => changeSection(item.text)}>
                                <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", transition: "all 0.3s ease", '&:hover': { transform: 'scale(1.1)' }}}>
                                    <item.icon  sx={{ fontSize: {xs: 60, sm: 80} }} />
                                    <Typography variant="body2">{item.text}</Typography>
                                </Box>
                            </IconButton>
                        </Grid>
                    ))}
                </Grid>

                <Grid item xs={12} md={8} sx={{ marginTop: 5, marginBottom: 5 }}>
                    {renderSection()}
                </Grid>
            </Grid>
        </Layout>
    );
}
 
export default AboutUs;
