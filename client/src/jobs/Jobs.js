import Layout from "../Layout";
import SearchBar from "../components/SearchBar";
import RenderJobs from "./RenderJobs";
import JobInfo from "./JobInfo";
import { useState } from "react";
import { Box } from "@mui/material";

const Jobs = () => {
    const [selectedTags, setSelectedTags] = useState([]);
    const [jobData, setJobData] = useState([]);

    return ( 
    <Layout>
        <SearchBar setSelectedTags={setSelectedTags}/>
        <Box display="flex" flexDirection={{xs: "column-reverse" ,sm: "row"}}>
            <RenderJobs selectedTags={selectedTags} setJobData={setJobData}/>
            <JobInfo jobData={jobData}/>
        </Box>
    </Layout>
    );
}
 
export default Jobs;
