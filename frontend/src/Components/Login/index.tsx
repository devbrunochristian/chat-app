import { Button, TextField, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, Image } from './styles';
import login from '../../assets/login.svg';
import AuthService from '../../Services/authService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const res = await AuthService.loginUser({ email, password });
    console.log('res', res);
  } 

  return (
    <Form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <Image src={login} />
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
        label="Email"
        variant="outlined"
        type='email'
      />
      <TextField
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        label="Password"
        variant="outlined"
        type="password"
      />
      <Button color="primary" variant="contained" type='submit'>
        Login
      </Button>
      <Typography component="p">Don't have an account ? Register</Typography>
    </Form>
  )
  ;
};

export default Login;
