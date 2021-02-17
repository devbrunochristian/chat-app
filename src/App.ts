/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable class-methods-use-this */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application } from 'express';
import mongoose from 'mongoose';
import { APP_DATABASE } from './config/constants';

class App {
  public app: Application;

  public port: number;

  constructor(appInit: { port: number; controllers: any; middlewares: any }) {
    this.app = express();
    this.port = appInit.port;
    this.initializeMiddlewares(appInit.middlewares);
    this.initializeControllers(appInit.controllers);
  }

  private initializeMiddlewares(middlewares: any) {
    middlewares.forEach((middleware: any) => {
      this.app.use(middleware);
    });
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  public listen(): void {
    this.app.listen(this.port, () =>
      // eslint-disable-next-line no-console
      console.info(`[App] Listening on the http://localhost:${this.port}`),
    );
  }

  public initializeDB(): Promise<typeof mongoose> {
    return mongoose.connect(APP_DATABASE!, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    });
  }
}

export default App;
