import { Paper } from "@mui/material";

const Layout = ({ children }) => {
    return ( 
        <Paper sx={{ padding: '1rem', height: '100vh' }}>
            {children}
        </Paper>
     );
}
 
export default Layout;