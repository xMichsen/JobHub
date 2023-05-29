import { TextField, Autocomplete, Box, Typography } from "@mui/material";
import * as React from 'react';

const jobOffers = [
    { title: 'Frontend Developer', company: 'Company 1', location: 'New York', skill: 'JavaScript' },
    { title: 'Backend Developer', company: 'Company 2', location: 'San Francisco', skill: 'Node.js' },
    { title: 'Full Stack Developer', company: 'Company 3', location: 'Austin', skill: 'JavaScript/Python' },
    { title: 'Data Scientist', company: 'Company 4', location: 'Seattle', skill: 'Python' },
    { title: 'Machine Learning Engineer', company: 'Company 5', location: 'Boston', skill: 'Python' },
    { title: 'Database Administrator', company: 'Company 6', location: 'Chicago', skill: 'SQL' },
    { title: 'Mobile Developer (iOS)', company: 'Company 7', location: 'San Diego', skill: 'Swift' },
    { title: 'Mobile Developer (Android)', company: 'Company 8', location: 'Los Angeles', skill: 'Kotlin' },
    { title: 'DevOps Engineer', company: 'Company 9', location: 'Houston', skill: 'AWS/GCP' },
    { title: 'Software Test Engineer', company: 'Company 10', location: 'Philadelphia', skill: 'Automated Testing' },
    { title: 'System Analyst', company: 'Company 11', location: 'Phoenix', skill: 'System Analysis' },
    { title: 'Cybersecurity Analyst', company: 'Company 12', location: 'San Antonio', skill: 'Cybersecurity' },
    { title: 'IT Manager', company: 'Company 13', location: 'San Jose', skill: 'Management' },
    { title: 'Web Designer', company: 'Company 14', location: 'Dallas', skill: 'UI/UX Design' },
    { title: 'Game Developer', company: 'Company 15', location: 'Indianapolis', skill: 'Unity/C#' },
    { title: 'Embedded Systems Engineer', company: 'Company 16', location: 'San Francisco', skill: 'Embedded C/C++' },
    { title: 'SEO Specialist', company: 'Company 17', location: 'Columbus', skill: 'SEO' },
    { title: 'Data Analyst', company: 'Company 18', location: 'Fort Worth', skill: 'Data Analysis' },
    { title: 'UX Designer', company: 'Company 19', location: 'Detroit', skill: 'User Experience Design' },
    { title: 'Network Administrator', company: 'Company 20', location: 'Jacksonville', skill: 'Network Administration' },
  ];

  const titles = Array.from(new Set(jobOffers.map(job => job.title))).map(title => ({ label: title, type: 'Title' }));
  const skills = Array.from(new Set(jobOffers.map(job => job.skill))).map(skill => ({ label: skill, type: 'Skill' }));
  const locations = Array.from(new Set(jobOffers.map(job => job.location))).map(location => ({ label: location, type: 'Location' }));
  

const tags = [...titles, ...skills, ...locations];

const SearchBar = () => {
    return ( 
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%" paddingTop={4}>
          <Typography variant="h4">Search for a Job</Typography>
          <Autocomplete
              multiple
              limitTags={2}
              id="multiple-limit-tags"
              options={tags.sort((a, b) => -b.type.localeCompare(a.type))}
              getOptionLabel={(option) => option.label}
              groupBy={(option) => option.type}
              renderInput={(params) => (
                  <TextField {...params} label="Skill, location, company" placeholder="Search jobs" />
              )}
              sx={{ 
                width: { 
                    xs: '90%', 
                    sm: '75%',
                    md: '60%',
                    lg: '50%',
                    xl: '40%'
                }, 
                }}
          />
        </Box>
    );
}
   
export default SearchBar;
