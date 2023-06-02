import { observer } from "mobx-react";
import jobStore from "../stores/jobStore";
import { Box, Typography, Card, CardContent, Grid, Container } from "@mui/material";
import JobInfo from "./JobInfo";

const RenderJobs = observer(({ selectedTags }) => {
    const jobsToRender = selectedTags.length > 0 
    ? jobStore.jobs.filter(job =>
      selectedTags.some(tag => job.title.includes(tag.label) || job.skillsrequired.includes(tag.label) || job.location.includes(tag.label))
    )
    : jobStore.jobs;

    return (
        <Box display="flex" flexDirection="row">
        <Container sx={{ 
            overflow: 'auto', 
            maxHeight: '80vh', 
            marginLeft: 3, 
            marginTop: 3, 
            width: { xs: '90%', sm: '50%' }, 
            '&::-webkit-scrollbar': {
                width: '0.8em',
            },
            '&::-webkit-scrollbar-track': {
                boxShadow: 'inset 0 0 6px rgba(0,0,0,0.3)',
                borderRadius: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: 'darkgrey',
                outline: '1px solid slategrey',
                borderRadius: '4px',
            }
        }}>
            <Grid container direction="column" spacing={2}>
                {jobsToRender.map((job, index) => (
                    <Grid item xs={12} key={index}>
                        <Card elevation={3} sx={{ display: 'flex', maxHeight: '7em', flexDirection: 'row' }}>
                            <Box sx={{ width: '20%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                <Box component="img" src={`/images/${job.companyimage}`} alt="Company Logo" sx={{ maxHeight: '4em', maxWidth: '100%' }} />
                            </Box>
                            <CardContent sx={{ display: 'flex', flexGrow: 1 }}>
                                <Grid container>
                                    <Grid item xs={9}>
                                        <Typography variant="h6" component="div" marginTop={-2}>
                                            {job.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Skills required: {job.skillsrequired}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Location: {job.location}
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Typography variant="body2" color="text.secondary" fontWeight="bold" sx={{ textAlign: 'right' }}>
                                            Salary: {job.salary} $
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
        <JobInfo />
    </Box>
    );
})

export default RenderJobs;
