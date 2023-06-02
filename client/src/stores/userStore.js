import { makeAutoObservable } from "mobx";
import { loginUser } from "../apiCalls/loginUser";
import { getUserInfo } from "../apiCalls/getUserInfo";

class UserStore {
  isLoggedIn = false;
  user = {};

  constructor() {
    makeAutoObservable(this);
    this.init();
  }

  init = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const userInfo = await getUserInfo(token);
        this.user = userInfo;
        console.log(this.user.role);
        this.isLoggedIn = true;
      } 
      catch (error) {
        console.error(error);
        localStorage.removeItem('token');
      }
    }
  };

  login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      if (data) {
        localStorage.setItem('token', data.token);
        this.init();
      } 
      else {
        this.isLoggedIn = false;
      }
    } 
    catch (error) {
      console.error(error);
    }
  };

  logOut = () => {
    this.isLoggedIn = false;
    this.user = {};
    localStorage.removeItem('token');
  };

}

const userStore = new UserStore();

export default userStore;
