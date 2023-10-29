import { makeAutoObservable } from "mobx";
import { http, removeToken } from "@/utils";

class UserStore{
  userInfo = {}
  constructor() {
    makeAutoObservable(this)
  }
  loginOut = () => {
    this.token = ''
    removeToken()
  }
   getUserInfo= async() =>{
    const res = await http.get('/user/profile')
    //this.userInfo = res.data.data
    console.log(res)
    //console.log(token)
    console.log(2)
  }
}
export default UserStore