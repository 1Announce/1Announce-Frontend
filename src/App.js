import {useState} from 'react'
import Announcements from './components/Announcements'
import Cards from './components/Cards'
import AddAnnouncement from './components/AddAnnouncement'

function App() {
  const [showAddAnn, setShowAddAnn] = useState(false)
  const[announcements, setAnnoucements] = useState([
    {
      id: 1,
      text: 'Meeting Starting Now!',
      //file: true,
    },
    {
      id: 2,
      text: 'Meeting Starting in 10 minutes',
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
      <Cards title = '2. Schedule' />
      <Cards title = '3. Schedule' />
      {announcements.length > 0 ? <Announcements announcements={announcements} onDelete={deleteAnnouncement}/> : 'No Announcements Created'}
    </div>
  );
}

export default App;
