import React, {useState} from "react";
import {Link, useHistory} from 'react-router-dom';
import 'firebase/compat/auth';
import {useAuth} from '../contexts/AuthContext'

import Button from '@mui/material/Button';


function Title() {
    return <h1>1Announce</h1>;
}

function Home() {
  const {currentUser, logout} = useAuth()
  const[error,setError] = useState("")
  const history = useHistory()

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
        <div>
            <h1>Home Screen</h1>
            <Title />
            <strong>Email: </strong>{currentUser.email}
              <Button
                  variant="contained" onClick={handleSignout}>
                      Sign out
              </Button>
            <Button
                variant='contained'
                color='primary'>
                    Create Announcement
            </Button>


            <h2>Upcoming Announcements</h2>

            <h2>Past Announcements</h2>
        </div>
    );
}

export default Home;
