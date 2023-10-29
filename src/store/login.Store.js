import { makeAutoObservable } from "mobx"

import { setToken,getToken,removeToken } from '@/utils';
import { http } from '@/utils';
class LoginStore {
  token =getToken()|| ''
  constructor() {
    makeAutoObservable(this)
  }
  //login
  login = async ({ mobile, code }) => {
    const res = await http.post('/authorizations', {
      mobile,
      code
    })
    this.token = res.data.data.token
    setToken(res.data.data.token)

    console.log(this.token)
    
    console.log(res)
  }
}export default LoginStore