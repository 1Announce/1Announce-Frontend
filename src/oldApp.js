import {useState} from 'react'
import Announcements from './components/Announcements'
import Cards from './components/Cards'
import AddAnnouncement from './components/AddAnnouncement'
import AddSchedule from './components/AddSchedule'

function App() {
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
return (
    <div className="container">
      <Cards title = '1. Draft Announcement' onAdd={()=>setShowAddAnn(!showAddAnn)} showAdd={showAddAnn}/>
      {showAddAnn && <AddAnnouncement onAdd={addAnnouncement}/>}
      <Cards title = '2. Schedule' onAdd={()=>setShowAddSche(!showAddSche)} showAdd={showAddSche}/>
      {showAddSche && <AddSchedule/>}
      <Cards title = '3. Submit' />
      {announcements.length > 0 ? <Announcements announcements={announcements} onDelete={deleteAnnouncement}/> : 'No Announcements Created'}
    </div>
  );
}

export default App;