import './App.css';

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import MicIcon from '@mui/icons-material/Mic';
import { Link } from 'react-router-dom';


export default function Home() {
  return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}>

        <Stack spacing={2} direction="column" alignItems="center">
          <Stack direction="row" spacing={5} justifyContent="center">
            <Link to="/Items" style={{ textDecoration: 'none' }}>
              <Button variant="contained" color="secondary">Start</Button>
            </Link>
          </Stack>
          <Stack direction="column" spacing={2} alignItems="center">
            <TextField id="search" label="Search for items" variant="outlined" sx={{width: '500px', height: '40px', color: 'primary.main'}} />
            <IconButton color="secondary" aria-label="voice recording" sx={{width: '70px', height: '70px'}}>
              <MicIcon />
            </IconButton>
          </Stack>
        </Stack>
      </div>
  );
}
