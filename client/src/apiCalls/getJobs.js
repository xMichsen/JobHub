import axios from "axios";

export const getAllJobs = async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs/allJobs');
        return response.data;
    } catch (error) {
        console.error(error);
    }
}