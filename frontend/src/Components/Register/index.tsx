import { Button, Select, TextField, Typography, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import React, { useState } from 'react';
import { Form, Image } from './styles';
import register from '../../assets/register.svg';


const Register = () => {
  const [gender, setGender] = useState<string>('');
  
  
  return  (


    <Form noValidate autoComplete="off">
      <Image src={register} />
      <TextField id="outlined-basic" label="First Name" variant="outlined" />
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
    
      <TextField id="outlined-basic" label="Email" variant="outlined" />
    
      <TextField
        id="outlined-basic"
        label="Password"
        variant="outlined"
        type="password"
      />

      <TextField
        id="outlined-basic"
        label="Confirm password"
        variant="outlined"
        type="password"
      />
      <FormControl variant='outlined'>
        <InputLabel id="demo-simple-select-label">Gender</InputLabel>
        
        <Select
          label='Gender'
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={gender}
          displayEmpty
          onChange={(e: React.ChangeEvent<{ value: unknown }>) => setGender(e.target.value as string)}
        >
          
          <MenuItem value='Male'>Male</MenuItem>
          <MenuItem value='Female'>Female</MenuItem>
        </Select>
      </FormControl>
      <Button color="primary" variant="contained">
        Create new account
      </Button>
      <Typography component="p">Already have an account ? Login</Typography>
    </Form>
  );
};

export default Register;
