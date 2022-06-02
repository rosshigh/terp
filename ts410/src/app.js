import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router";

@inject(Router)
export class App {

  constructor(router){
    this.router = router;
  }

  configureRouter(config, router) {
    this.router = router;
    config.title = 'KB';
    config.map([
      {
        route: ['', 'quiz'],
        moduleId: PLATFORM.moduleName('./modules/quiz/quiz'),
        name: 'Quiz',
        settings: { auth: false, roles: [] }
      },
      {
        route: 'admin',
        moduleId: PLATFORM.moduleName('./modules/quiz/editQuiz'),
        name: 'EdistQuiz',
        settings: { auth: false, roles: [] }
      }
    ]);
  }
}