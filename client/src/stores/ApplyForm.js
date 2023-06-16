import React from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const ApplyForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        //const data = new FormData(event.currentTarget);
    };

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1,}}>
            <TextField margin="normal" required fullWidth id="firstName" label="First Name" name="firstName" autoComplete="fname" autoFocus/>
            <TextField margin="normal" required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="lname"/>
            <TextField margin="normal" required fullWidth id="email" label="Email" name="email" autoComplete="email"/>
            <TextField margin="normal" required fullWidth id="about" label="About you" name="about" autoComplete="about" multiline rows={4}/>
            <Typography textAlign="center" variant="body1">Add your CV</Typography>
            <TextField margin="normal" required fullWidth id="cv" name="cv" type="file" InputLabelProps={{ shrink: true,}}/>
            <Button type="submit" fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}> Apply </Button>
        </Box>
    );
};

export default ApplyForm;
