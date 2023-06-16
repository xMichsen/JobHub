import { makeAutoObservable, runInAction } from "mobx";
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
        runInAction(() => {
          this.user = userInfo;
          this.isLoggedIn = true;
        });
      } 
      catch (error) {
        console.error(error);
        localStorage.removeItem('token');
      }
    }
  };

  login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      localStorage.setItem('token', data.token);
      this.init();
      return true;
    } 
    else {
      runInAction(() => {
        this.isLoggedIn = false;
      });
    }
  };

  logOut = () => {
    runInAction(() => {
      this.isLoggedIn = false;
      this.user = {};
    });
    localStorage.removeItem('token');
  };
}

const userStore = new UserStore();

export default userStore;
