import { Paper } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <Paper sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor:"primary.paper"}}>
      <Navbar />
      <div style={{ flexGrow: 1, minHeight: 'calc(100vh - 500px)' }}>{children}</div>
      <Footer />
    </Paper>
  );
};

export default Layout;
