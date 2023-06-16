import { makeAutoObservable, runInAction } from "mobx";
import { getCompanies } from "../apiCalls/getCompanies";

class CompanyStore {
  companies = [];

  constructor() {
    makeAutoObservable(this)
  }

  fetchCompanies = async () => {
    const data = await getCompanies();
    
    runInAction(() => {
      this.companies = data;
    })
    
  }

}

const companyStore = new CompanyStore();

export default companyStore;
