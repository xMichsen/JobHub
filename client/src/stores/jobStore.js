import { makeAutoObservable } from "mobx";
import { getAllJobs } from "../apiCalls/getJobs";

class JobsStore {
    jobs = {};

    constructor(){
        makeAutoObservable(this);
        this.fetchJobs();
    }

    fetchJobs = async () => {
        const data = await getAllJobs();
        this.jobs = data;
    }

}
const jobStore = new JobsStore();

export default jobStore;