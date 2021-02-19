import { Button, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { Form, Image } from './styles';
import login from '../../assets/login.svg';

const Login = () => (
  <Form noValidate autoComplete="off">
    <Image src={login} />
    <TextField id="outlined-basic" label="Email" variant="outlined" />
    <TextField
      id="outlined-basic"
      label="Password"
      variant="outlined"
      type="password"
    />
    <Button color="primary" variant="contained">
      Login
    </Button>
    <Typography component="p">Don't have an account ? Register</Typography>
  </Form>
);

export default Login;
