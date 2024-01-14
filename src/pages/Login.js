import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Paper } from '@mui/material';
import logo from '../components/logo.png';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('Logging in with:', { username, password });
    navigate('/marketplace');
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh', // Set the height of the container to 100% of the viewport height
      }}
    >
      <img src={logo} style={{ width: '100px', marginRight: '10px', marginBottom: '10px' }} />
      <Paper elevation={1} style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography variant="h5">Login</Typography>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" onClick={handleLogin} style={{ marginTop: '20px', backgroundColor: '#489E47' }}>
          Login
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;