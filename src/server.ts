/* eslint-disable no-console */
import morgan from 'morgan';
import * as bodyparser from 'body-parser';
import cors from 'cors';
import App from './App';
import { APP_PORT } from './config/constants';
import UserController from './controllers/userController';

const appInit = {
  port: Number(APP_PORT),
  controllers: [new UserController()],
  middlewares: [morgan('tiny'), cors(), bodyparser.json()],
};

const app = new App(appInit);

app
  .initializeDB()
  .then(() => console.log('[App] Connected to Database'))
  .then(() => app.listen())
  .catch(err => console.log(`[App] ${err}`));
