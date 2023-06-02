import Layout from "../Layout";
import SearchBar from "../components/SearchBar";
import RenderJobs from "./RenderJobs";
import { useState } from "react";

const Jobs = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    return ( 
    <Layout>
        <SearchBar setSelectedTags={setSelectedTags}/>
        <RenderJobs selectedTags={selectedTags}/>
    </Layout>
     );
}
 
export default Jobs;