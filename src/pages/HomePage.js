import React,  {useState, useEffect} from "react";
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
import BuildTable from '../components/Tables'

function Home() {
  const {currentUser, logout} = useAuth()
  const[error,setError] = useState("")
  const[announcements, setAnnoucements] = useState([])
  const history = useHistory();

  useEffect(() => {
    const observable = ApiManager.getAnnouncements();
    observable.subscribe({
      next: () => {
        console.log('Successful!', ApiManager.announcements);
        setAnnoucements(ApiManager.announcements)
      },
      error: err => {
        console.log('Error!', err);
      }
    });
  }, [currentUser]);

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

              <Grid item xs={12}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    minHeight: 240,
                  }}
                >
                <h1> Upcoming Announcements</h1>
                <hr></hr>
                <BuildTable data={announcements}/>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: 240,

                }}>
                <h1> Past Announcements</h1>
                <hr></hr>
                <BuildTable data={announcements}/>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    );
}

export default Home;
