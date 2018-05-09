import {inject} from 'aurelia-framework';
import {Router} from "aurelia-router";

@inject(Router)
export class MainPage{

    title="Terp10";
    
    constructor(router){
        this.router = router;
        this.user = JSON.parse(sessionStorage.getItem('user'));
    }
    
    configureRouter(config, router) {
        config.map([
            { route: ['home',''],     name: 'home',       moduleId: 'home' },
            { route: 'Schedule',        name: 'schedule',    moduleId: 'schedule',   nav: true,    title: 'Schedule', settings: { auth: true, roles: 'user' } },
            { route: 'Resources',      name: 'resources',  moduleId: 'resources', nav: true,    title: 'Resources', settings: { auth: true, roles:'user' } },
            { route: 'Videos',      name: 'videos',  moduleId: 'videos', nav: true,    title: 'Videos', settings: { auth: true, roles: 'user' } },
            { route: 'QuizTool',      name: 'quiz',  moduleId: 'quizTool', nav: true,    title: 'Quiz Tool', settings: { auth: true, roles: 'user' } },
            { route: 'Admin',      name: 'admin',  moduleId: 'admin', nav: true,    title: 'Admin', settings: { auth: true, roles: 'admin' } },
            { route: 'login',     name: 'login',       moduleId: './login' },
        ]);

        this.router = router;
    }

    logout(){
        sessionStorage.removeItem('user');
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('role');
        this.router.navigate("login");
    }

    goAdmin(){
        this.router.navigate("admin");
    }
    
}

