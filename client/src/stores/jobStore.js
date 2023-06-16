import { makeAutoObservable } from "mobx";
import { getAllJobs } from "../apiCalls/getJobs";

class JobsStore {
    jobs = [];

    constructor(){
        makeAutoObservable(this);
        this.fetchJobs();
    }

    fetchJobs = async () => {
        const data = await getAllJobs();
        this.setJobs(data); 
    }

    get getJobs() {
        return this.jobs;
    }

    setJobs(data) {
        this.jobs = data;
    }

    

}
const jobStore = new JobsStore();

export default jobStore;