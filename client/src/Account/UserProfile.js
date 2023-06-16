import { Card, CardContent, Typography, Grid, Button } from "@mui/material";

const UserProfile = ({ user }) => {
    return (
        <Card sx={{ width: '60%', minHeight: '60vh' }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography variant="h6" component="div">
                            Name: {user?.firstname + " " + user?.lastname}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.secondary">
                            Email: {user?.email}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h6" color="text.secondary">
                            Role: {user?.role}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" color="primary">
                            Edit Profile
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default UserProfile;
