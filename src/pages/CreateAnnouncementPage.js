import React, { useState } from "react";
import { useHistory, Link } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';

import 'firebase/compat/auth';
import { useAuth } from '../contexts/AuthContext'
import NavBar from '../components/NavBar';
import ApiManager from '../api/api-manager';
import DraftAnnouncementComponent from "../components/DraftAnnouncement";

function CreateAnnouncementPage() {
    const { currentUser, logout } = useAuth();
    const [error, setError] = useState("");
    const history = useHistory();

    async function handleSignout() {
        setError('')

        try {
            await logout()
            history.push('/signin')
        } catch {
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
                <NavBar bText={'Sign Out'} bClick={handleSignout} link1={'/'} />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                        <h1>Create Announcement</h1>
                        <hr></hr>
                        <h2>1. Draft</h2>
                            <DraftAnnouncementComponent/>
                        <h2>2. Schedule</h2>

                        <h2>3. Review</h2>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
}

export default CreateAnnouncementPage;