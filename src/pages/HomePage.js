import React from "react";
import SignOut from '../components/SignOut'
import {Redirect} from 'react-router-dom';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import firebase from 'firebase/compat/app';

import Button from '@mui/material/Button';

const auth = firebase.auth();

function Title() {
    return <h1>1Announce</h1>;
}

function Home() {
  const [user] = useAuthState(auth);
  if(!user){
    return <Redirect to ='/'/>;
  }
    return (
        <body>
            <h1>Home Screen</h1>
            <Title />
            <SignOut/>
            <Button
                variant='contained'
                color='primary'>
                    Create Announcement
            </Button>


            <h2>Upcoming Announcements</h2>

            <h2>Past Announcements</h2>
        </body>
    );
}

export default Home;
