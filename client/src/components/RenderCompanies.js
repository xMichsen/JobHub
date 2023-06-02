import { useEffect } from "react";
import { observer } from 'mobx-react';
import companyStore from "../stores/companyStore";
import { Stack, Box, Typography, Card, CardMedia, CardContent } from "@mui/material";


const RenderCompanies = observer(() => {
    useEffect(() => {
        companyStore.fetchCompanies();
    }, []);
    
    return ( 
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", marginTop:20}}>
            <Typography variant="h4" fontFamily="fantasy" sx={{ marginBottom: 5, marginTop:5 }}>Our employers</Typography>
            <Stack direction={{ xs:'column', sm:'row'}} spacing={{ xs:2, sm: 2, md: 3}} width={{md: 1200}} flexWrap="wrap" useFlexGap alignItems="center" justifyContent="center" sx={{ marginY: 4 }}>
                {companyStore.companies.map((company) => 
                    <Box key={company.companyid} direction="column" sx={{ marginBottom: 4, height: 400}} bgcolor="primary.card">
                        <Card sx={{ maxWidth: 345}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={`/images/${company.image}`}
                                alt={company.name}
                                sx={{objectFit:"contain"}}
                            />
                            <CardContent sx={{height:220}}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {company.name}
                                </Typography>
                                <Typography variant="body2" textAlign="justify" color="text.secondary">
                                    {company.description}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    <b>Location:</b> {company.location}
                                </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    <b>Industry:</b> {company.industry}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                )}
            </Stack>
        </div>
     );
});
 
export default RenderCompanies;
