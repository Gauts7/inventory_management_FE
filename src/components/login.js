import React from 'react'
import axios from 'axios';
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

import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useState } from 'react';

function Login() {

    const userData={id:"", password:""};
    const [inputData,setinputData]=useState(userData);

    const handleData =(e)=>{
        setinputData({...inputData,[e.target.name]:e.target.value})
    }

    
    const submitData =(e)=>{
        e.preventDefault();

        if (inputData.password.length < 8) {
            alert("Password must be at least 8 characters long.");
          } else if (!/[a-z]/.test(inputData.password)) {
            alert("Password must contain at least one lowercase letter.");
          } else if (!/[A-Z]/.test(inputData.password)) {
            alert("Password must contain at least one uppercase letter.");
          } else if (!/[^a-zA-Z0-9]/.test(inputData.password)) {
            alert("Password must contain at least one special character.");
          } else {
            console.log(inputData)

            //make API call here
            axios
            .post('https://jsonplaceholder.typicode.com/posts', inputData)
            .then((response) => {
              console.log(response.data); // Log the response data
            })
            .catch((error) => {
            
              console.error('An error occurred:', error);
            });
          }
        
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
              label="Store_id/Employee_id"
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
