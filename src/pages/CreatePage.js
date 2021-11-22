import React,  {useState} from "react";

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';

import 'firebase/compat/auth';
import NavBar from '../components/NavBar';
import Announcements from '../components/Announcements'
import Cards from '../components/Cards'
import AddAnnouncement from '../components/AddAnnouncement'
import AddSchedule from '../components/AddSchedule'


function Create () {
  const [showAddAnn, setShowAddAnn] = useState(false)
  const [showAddSche, setShowAddSche] = useState(false)
  const[announcements, setAnnoucements] = useState([
    {
      id: 1,
      value: 'Meeting Starting Now!',
      //file: true,
    },
    {
      id: 2,
      value: 'Meeting Starting in 10 minutes',
      //file: false,
    }
  ])

  // add announcement
  const addAnnouncement = (announcement) =>{
    const id = Math.floor(Math.random() * 10000)+1
    const newAnnouncment = {id, ...announcement}
    setAnnoucements([...announcements, newAnnouncment])
  }

  //delete announcement
  const deleteAnnouncement = (id) =>{
    setAnnoucements(announcements.filter((announcement) => announcement.id !== id))
  }
  return(
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
      <NavBar text1={'Home'}  link1={'/'}/>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: '80vh',
            position: 'relative'
          }}
        >
        <Cards className='card' title = '1. Draft Announcement' onAdd={()=>setShowAddAnn(!showAddAnn)} showAdd={showAddAnn}/>
        {showAddAnn && <AddAnnouncement onAdd={addAnnouncement}/>}
        <Cards title = '2. Schedule' onAdd={()=>setShowAddSche(!showAddSche)} showAdd={showAddSche}/>
        {showAddSche && <AddSchedule/>}
        <header className='header'>
          <h1>3. Submit</h1>
          <Button variant='contained' color='primary'>
              Submit
          </Button>
        </header>
        {announcements.length > 0 ? <Announcements announcements={announcements} onDelete={deleteAnnouncement}/> : 'No Announcements Created'}
        </Paper>
        </Container>
      </Box>
    </Box>
  )
}

export default Create;
