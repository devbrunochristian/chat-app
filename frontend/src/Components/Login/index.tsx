import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { Form, Image } from './styles';
import login from '../../assets/login.svg';
import AuthService from '../../Services/authService';
import { LoginUser } from '../../store/actions';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(LoginUser({ email, password }, history));
    setEmail('');
    setPassword('');
  }

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
      <Typography component="p">Don't have an account ?<Link to='/register'>Register</Link> </Typography>
    </Form>
  );
};

export default Login;
