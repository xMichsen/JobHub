import { Box, Typography, Card, CardContent, Grid, Avatar, Button } from "@mui/material";
import ModalComponent from "../components/ModalComponent";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ApplyForm from "../stores/ApplyForm";
import userStore from "../stores/userStore";

const JobInfo = ({ jobData }) => {

    if (!jobData) {
        return null;
    }

    return (
        <Box sx={{ maxWidth:{xs:"100%", sm:"45%"}, marginTop: 3, marginRight: 3, marginLeft: 3, height: '80vh', overflow: 'auto' }}>
            <Card elevation={3}>
                <CardContent>
                    <Grid container spacing={5}>
                        <Grid item xs={3}>
                            <Box display='flex' justifyContent='center'>
                            <Avatar variant='rounded' alt={jobData.companyname} src={`/images/${jobData.companyimage}`} 
                            sx={{ width: 80, height: 80, '& img': {maxWidth: '50%', maxHeight: '50%'} }} />
                            </Box>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant='h5' component='div'>{jobData.title}</Typography>
                            <Typography variant='subtitle2' color='text.secondary'>{jobData.companyname}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Box display='flex' alignItems='center' mb={2}>
                                <LocationOnIcon color='action' />
                                <Typography variant='body2' color='text.secondary'>{jobData.location}</Typography>
                            </Box>
                            <Typography variant='body1' component='div'>{jobData.description}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body1' component='div' mt={2}>Skills required: {jobData.skillsrequired}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' color='text.secondary'><b>Salary: {jobData.salary} $</b></Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='body2' color='text.secondary'>Recruiter: {jobData.recruiterfirstname} {jobData.recruiterlastname}</Typography>
                            <Typography variant='body2' color='text.secondary'>Email: {jobData.recruiteremail}</Typography>
                        </Grid>
                        <Grid textAlign="center" item xs={12}>
                            <Grid item xs={12}>
                                <ModalComponent buttonLabel="Apply" modalTitle="Apply for a job">
                                    <ApplyForm />
                                </ModalComponent>
                            </Grid>
                            {userStore.isLoggedIn && (
                                <Grid item xs={12} mt={2}>
                                    <Button variant="contained">Quick Apply</Button>
                                </Grid>
                            )} 
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Box>
    );
}

export default JobInfo;
