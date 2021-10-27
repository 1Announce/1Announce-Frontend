import Announcement from './Announcement'

const Announcements = ({announcements, onDelete}) => {
  return(
    <>
      {announcements.map((announcement) => (
        <Announcement key={announcement.id} announcement={announcement} onDelete = {onDelete} />
      ))}
    </>
  )
}

export default Announcements
