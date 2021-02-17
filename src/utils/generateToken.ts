import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/constants';

const generateToken = (id: string) => {
  return jwt.sign({ id }, JWT_SECRET!);
};

export default generateToken;
