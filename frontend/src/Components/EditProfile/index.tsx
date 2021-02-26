import {
  Button,
  Select,
  TextField,
  MenuItem,
  InputLabel,
  FormControl,
} from '@material-ui/core';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form } from './styles';

const EditProfile = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState<string>('');
  const dispatch = useDispatch();
  const history = useHistory();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
    setGender('');
  }

  return (
    <Form onSubmit={handleSubmit}>
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
        Save Changes
      </Button>
    </Form>
  );
};

export default EditProfile;
