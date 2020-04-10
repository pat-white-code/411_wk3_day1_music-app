import React from 'react';
import {TextField, Button, Container, Typography} from '@material-ui/core';
import './login.css';

const LogIn = (props) => {
  const {logIn} = props
  return(
      <div className='login'>
        <Typography variant='h5'>Log In</Typography>
        <form onSubmit={logIn}>
          <TextField required id='username' label='username' />
          <TextField required id='password' label='password' />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="primary">Login</Button>
        </form>
      </div>
  )
}

export default LogIn;