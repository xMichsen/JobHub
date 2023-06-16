import { TextField, Autocomplete, Box, Typography } from "@mui/material";
import jobStore from "../stores/jobStore";
import * as React from 'react';


const SearchBar = ({ setSelectedTags }) => {

  jobStore.fetchJobs();
  const jobOffers = jobStore.jobs;

  const titles = Array.from(new Set(jobOffers.map(job => job.title))).map(title => ({ label: title, type: 'Title' }));
  const skills = Array.from(new Set(jobOffers.flatMap(job => job.skillsrequired.split(', ')))).map(skill => ({ label: skill, type: 'Skill' }));
  const locations = Array.from(new Set(jobOffers.map(job => job.location))).map(location => ({ label: location, type: 'Location' }));
  
  const tags = [...titles, ...skills, ...locations];

    return ( 
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" paddingTop={4}>
          <Typography variant="h4" fontFamily="fantasy">Search for a Job</Typography>
          <Autocomplete
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={tags}
              getOptionLabel={(option) => option.label}
              groupBy={(option) => option.type}
              renderInput={(params) => (
                  <TextField {...params} label="Skill, location, company" placeholder="Search jobs" />
              )}
              sx={{ width: { xs: '90%', sm: '75%',md: '60%',lg: '50%',xl: '40%'}, }}
                onChange={(event, value) => setSelectedTags(value)}
          />
        </Box>
    );
}
   
export default SearchBar;
