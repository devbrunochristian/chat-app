import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form, Image } from './styles';
import login from '../../assets/login.svg';
import { LoginUser } from '../../store/actions';
import { UserStateInterface } from '../../store/reducers/userReducer/types';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userState = useSelector((state: UserStateInterface) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const { token } = userState;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    token && history.push('/chat');
  }, [token]);

  return (
    <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Image src={login} />
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
        value={email}
        label="Email"
        variant="outlined"
        type="email"
      />
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
        label="Password"
        value={password}
        variant="outlined"
        type="password"
      />
      <Button color="primary" variant="contained" type="submit">
        Login
      </Button>
      <Typography component="p">
        Don't have an account ?<Link to="/register">Register</Link>{' '}
      </Typography>
    </Form>
  );
};

export default Login;
