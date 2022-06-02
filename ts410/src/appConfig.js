export class AppConfig {

    constructor(){
        this.screenHeight = $(window).height();
    }

    HOST = location.origin;

    // BASE_URL = "http://localhost";

    BASE_URL = this.HOST;
}