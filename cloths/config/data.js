import { observable, action } from "mobx";

class QWE {
    @observable login;
    constructor(){
        this.login=false
    }
  
  islogin=(e)=>{
    this.login=e
  }  

}
const qew=new QWE()
export {qew}