import { makeAutoObservable } from "mobx";
import { loginUser } from "../apiCalls/loginUser";

class UserStore {
  isLoggedIn = false;
  user = {};

  constructor() {
    makeAutoObservable(this)
  }

  login = async (email, password) => {
    const data = await loginUser(email, password);
    if (data) {
      this.user = data.user;
      this.isLoggedIn = true;
      localStorage.setItem('token', data.token);
    } else {
      this.isLoggedIn = false;
    }
  }

}

const userStore = new UserStore();

export default userStore;
