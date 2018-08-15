import {inject} from 'aurelia-framework';
import {RouterConfiguration, Router,NavigationInstruction, Next, Redirect} from 'aurelia-router';

@inject(Router)
export class App{

    constructor(router){
        this.router = router;
    }
    
    configureRouter(config, router) {
        config.addPipelineStep('authorize', AuthorizeStep);
        config.addAuthorizeStep(AuthorizeStep);
        config.map([
            { route: ['login',''],     name: 'login',       moduleId: './login' },
            { route: 'mainPage',        name: 'mainPage',    moduleId: './mainPage', settings: { auth: true, roles: 'user' } },
            { route: 'home',        name: 'home',    moduleId: './home', settings: { auth: true, roles: 'user' } }
        ]);

        this.router = router;
    }
    
}

class AuthorizeStep {
    run(navigationInstruction, next) {
      if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
        let role = sessionStorage.getItem('role');
        let requiredRoles = navigationInstruction.getAllInstructions()[0].config.settings.roles;
        navigationInstruction.getAllInstructions().map(i => i.config.settings.roles)[1];
        if (!role) {
          return next.cancel(new Redirect('login'));
        } else if (requiredRoles !== role && role !== 'admin') {
            return next.cancel();
        } 
      }
      return next();
    }
  }

// class AuthorizeStep {
//     run(navigationInstruction, next) {
//       if (navigationInstruction.getAllInstructions().some(i => i.config.settings.auth)) {
//           console.log(navigationInstruction.params.childRoute);
//         let role = sessionStorage.getItem('role');
//         let requiredRoles = navigationInstruction.getAllInstructions().map(i => i.config.settings.roles)[0];
//         if (!role) {
//           return next.cancel(new Redirect('login'));
//         }
//       }
//       return next();
//     }
//   }