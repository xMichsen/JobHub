import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { observer } from "mobx-react";
import userStore from "../stores/userStore";
import { notify } from "./Toast";


const LoginForm = observer(() => {
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');

        try {
            const response = await userStore.login(email, password);
            if(response)
              navigate('/');
        } 
        catch (error) {
            notify('Wrong email or password!', 'error'); 
        }
    };

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{ marginTop: 8, display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.login" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontFamily="fantasy">
          Sign in to JobHub
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email" autoComplete="email" autoFocus/>
          <TextField margin="normal" required fullWidth name="password" label="Password" type="password" id="password" autoComplete="current-password"/>
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2, bgcolor:"secondary.login" }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" style={{textDecoration:"none", color:"#FFA500"}}>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to="/register" variant="body2" style={{textDecoration:"none", color:"#FFA500"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
});

export default LoginForm;
