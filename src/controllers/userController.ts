/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Router } from 'express';
import UserService from '../services/userService';

export default class UserController {
  private authUserRoute = '/api/auth/login';

  private registerRoute = '/api/auth/register';

  private router = Router();

  private userService = new UserService();

  constructor() {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    this.router.post(this.registerRoute, this.userService.registerUser);
  }
}
