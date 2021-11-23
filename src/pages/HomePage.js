import React,  {useState} from "react";
import {useHistory, Link} from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import 'firebase/compat/auth';
import {useAuth} from '../contexts/AuthContext'
import NavBar from '../components/NavBar';
import ApiManager from '../api/api-manager';
import Announcement from "../components/Announcement";

function Home() {
  const {currentUser, logout} = useAuth()
  const[error,setError] = useState("")
  const history = useHistory();

  const observable = ApiManager.getAnnouncements();
  

  async function handleSignout(){
    setError('')

    try{
      await logout()
      history.push('/signin')
    }catch{
      setError('Failed to Sign Out')
    }
  }

    return (
    //  <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
        <NavBar bText={'Sign Out'} bClick={handleSignout} link1={'/'}/>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {error && <Alert severity="error">{error}</Alert>}
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 120,
                  }}
                >
                <h2>Email: {currentUser.email}</h2>

                <Button
                    variant='contained'
                    color='primary'
                    component={Link}
                    to='/create'
                    sx={{ mt: 1, mb: 1 }}
                    style={{maxWidth:'300px', float:'right'}}>
                        Create Announcement
                </Button>
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                <h1> Upcoming Announcements</h1>
                <hr></hr>
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}>
                <h1> Past Announcements</h1>
                <hr></hr>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    );
}

export default Home;
