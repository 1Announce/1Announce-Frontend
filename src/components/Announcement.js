import {FaTimes} from 'react-icons/fa'

const Announcement = ({announcement, onDelete}) =>{
  return(
    <div className='announcement'>
      <h3>
        {announcement.text}
        <FaTimes style={{color:'red', cursor: 'pointer', margin:'0px 0px 0px 90%'}}
        onClick={()=>onDelete(announcement.id)}/>
      </h3>
      {/*need to add file here*/}
    </div>
  )
}

export default Announcement
