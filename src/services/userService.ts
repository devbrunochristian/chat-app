/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable no-underscore-dangle */
import { Request, Response } from 'express';
import * as bcrypt from 'bcryptjs';
import User from '../models/user';
import generateToken from '../utils/generateToken';

export default class UserService {
  public registerUser = async (req: Request, res: Response) => {
    const { firstName, lastName, gender, avatar, email, password } = req.body;

    try {
      const isUserExists = await User.findOne({ email });
      if (isUserExists) {
        return res.status(401).json({ message: 'User Already exist!' });
      }

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const user: any = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
        gender,
        avatar,
      });

      if (user) {
        return res.status(201).json({
          _id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          gender: user.gender,
          avatar: user.avatar,
          token: generateToken(user._id),
        });
      }
      return res.status(401).json({ message: 'User not Found!' });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  };
}
