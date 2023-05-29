import Navbar from "../components/Navbar";
import Layout from "../Layout";
import SearchBar from "../components/SerachBar";

const Home = () => {
    return ( 
        <Layout>
            <Navbar />
            <SearchBar />
        </Layout>
     );
}
 
export default Home;