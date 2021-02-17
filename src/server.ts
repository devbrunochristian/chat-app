/* eslint-disable no-console */
import morgan from 'morgan';
import App from './App';
import { APP_PORT } from './config/constants';

const appInit = {
  port: Number(APP_PORT),
  controllers: [],
  middlewares: [morgan('tiny')],
};

const app = new App(appInit);

app
  .initializeDB()
  .then(() => console.log('[App] Connected to Database'))
  .then(() => app.listen())
  .catch(err => console.log(`[App] ${err}`));
