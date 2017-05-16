export class App {

  configureRouter(config, router) {
    this.router = router;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'todo'],       name: 'todo',       moduleId: 'todoList/index' },
      { route: ['http'],       name: 'http',       moduleId: 'httpRequest/index' }
    ]);
  }
}
