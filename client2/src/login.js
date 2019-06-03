import {inject} from 'aurelia-framework';
import {Router} from "aurelia-router";
import {Auth} from "./resources/data/auth";

@inject(Router, Auth)
export class Login {
    username = "";
    password = "";

    constructor(router, auth){
        this.router = router;
        this.auth = auth;
    }

    // login(){
    //     console.log('asjdf;l')
    //     this.router.navigate("mainPage");
       
    // }

    async login(){
        let response = await this.auth.login(this.username, this.password)
        if(!response.error){
            this.loginError = "";
            this.loginSuccess();
            this.isAuthenticated = this.auth.isAuthenticated();
        } else {
            this.loginError = "Invalid credentials.";
        }
    }

    logout(){
        if(this.userObj) this.auth.logout(this.userObj.email);
        this.userObj = new Object();
        this.isAuthenticated = this.auth.isAuthenticated();
        this.router.navigate("home");
    }

    async loginSuccess() {
        this.userObj = JSON.parse(sessionStorage.getItem('user'));
        if (this.userObj) {
            if (!this.userObj.userRole)  this.logout();
            sessionStorage.setItem('role',this.userObj.userRole)
            this.router.navigate("mainPage");
        } else {
            this.utils.showNotification("There was a problem validating your account")
            this.router.navigate("login");
        }
    }
}