import React from 'react'
import {
    Button,
    TextField,
    Grid,
    Paper,
    AppBar,
    Typography,
    Toolbar,
    Link,
    Card,
    Box
} from '@mui/material'

import { LockOpenIcon } from '@mui/icons-material'
import { useState } from 'react';

function Login() {

    const userData={id:"",password:""};
    const [inputData,setinputData]=useState(userData);

    const handleData =()=>{

    }
  return (

    <Box
    sx={{
      marginTop: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Typography variant='h5'>LOGIN</Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            </Box>
    </Box>
    )
}

export default Login
