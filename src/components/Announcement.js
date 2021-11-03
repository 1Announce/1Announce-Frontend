import {FaTimes} from 'react-icons/fa'

const Announcement = ({announcement, onDelete}) =>{
  return(
    <div className='announcement'>
      <FaTimes style={{color:'red', cursor: 'pointer', position:'absolute', right: '5%', float:'right'}} onClick={()=>onDelete(announcement.id)}/>
      <h3 className='message'>
        {announcement.value}
      </h3 >

      {/*need to add file here*/}
    </div>
  )
}

export default Announcement
