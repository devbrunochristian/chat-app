import { Button, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React from 'react';
import { Container, Image } from './styles';
import auth from '../../assets/auth.svg';


const Auth = () => {

  const history = useHistory();

  return (
        <Container>
            <Image src={auth} />
            <Typography>
                Welcome to the BChat
            </Typography>
            <Button color="primary" variant='contained' onClick={() => history.push('/login')}>Login</Button>
            <Button color="primary" variant='contained' onClick={() => history.push('/register')}>Register</Button>

        </Container>
  );
};
export default Auth;
