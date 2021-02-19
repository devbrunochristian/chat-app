import Api from './api';

interface LoginProps {
  email: string;
  password: string;
}

interface CreateUserProps {
  email: string;
  password: string;
  firstName:string;
  lastName:string;
  gender:string;
}


const AuthService = {
   
  loginUser : async (data: LoginProps) => {
    const { email, password } = data;
    try {
      const res = await Api.post('/api/auth/login', { email, password });
      return res;
    } catch (error) {
      return error;
    }
  },

  createUser : async (data: CreateUserProps) => {
    const { email, password, firstName, lastName, gender  } = data;
    try {
      const res = await Api.post('/api/auth/register', { email, password, firstName, lastName, gender });
      return res;
    } catch (error) {
      return error;
    }
  }

};


export default AuthService;