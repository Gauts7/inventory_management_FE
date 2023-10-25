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

    const userData={id:"", password:""};
    const [inputData,setinputData]=useState(userData);

    const handleData =(e)=>{
        setinputData({...inputData,[e.target.name]:e.target.value})
    }

    const submitData =(e)=>{
        e.preventDefault();
        console.log(inputData)
    }
  return (

    <Box
    sx={{
      marginTop: 20,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  ><Typography variant='h4' sx={{mb:3}} >LOGIN</Typography>
    <Paper elevation={3} sx={{p:4}}>
    
      <Box component="form"  sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              value={inputData.id}
              label="Store_is/Employee_id"
              autoFocus
              onChange={handleData}
              name="id"
              type="text"
              id="id"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              value={inputData.password}
              name="password"
              label="Password"
              type="password"
              id="password"
              
              onChange={handleData}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={submitData}
            >
              Sign In
            </Button>
            </Box>
            </Paper>
    </Box>
    )
}

export default Login
