import {useState} from 'react'

const AddAnnouncement = ({onAdd}) =>{
  const [text, setText] = useState('')
  //const [file, setFile] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()

    if(!text) {
      alert('Please add an Announcement')
      return
    }

    //need to add file to onAdd
    onAdd({text})

    setText('')
    //need to clear file
  }
  return(
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control' >
        <label>Announcement</label>
        <input type='text' placeholder='Add Announcement' value={text} onChange={(e)=> setText(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label>Attachment</label>
        <input type='file' placeholder='Add Announcement'/>
      </div>
      <input type='submit' value='Add Announcement' className='btn btn-block'/>
    </form>
  )
}

export default AddAnnouncement
