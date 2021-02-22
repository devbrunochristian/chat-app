import {
  Button,
  Select,
  TextField,
  Typography,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Image } from './styles';
import register from '../../assets/register.svg';
import AuthService from '../../Services/authService';
import { registerUser } from '../../store/actions';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState<string>('');
  const dispatch = useDispatch();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    dispatch(
      registerUser({
        email,
        password,
        firstName,
        gender,
        lastName,
      })
    );

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setGender('');
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Image src={register} />
      <TextField
        id="outlined-basic"
        label="First Name"
        variant="outlined"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFirstName(e.target.value)
        }
      />
      <TextField
        id="outlined-basic"
        label="Last Name"
        variant="outlined"
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setLastName(e.target.value)
        }
      />

      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        type="email"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEmail(e.target.value)
        }
      />

      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPassword(e.target.value)
        }
      />

      <TextField
        id="outlined-basic"
        label="Confirm password"
        variant="outlined"
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setConfirmPassword(e.target.value)
        }
      />
      <FormControl variant="outlined">
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>

        <Select
          label="Gender"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          displayEmpty
          onChange={(e: React.ChangeEvent<{ value: unknown }>) =>
            setGender(e.target.value as string)
          }
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained" type="submit">
        Create new account
      </Button>
      <Typography component="p">Already have an account ? Login</Typography>
    </Form>
  );
};

export default Register;
