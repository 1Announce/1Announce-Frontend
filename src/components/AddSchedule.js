import React from 'react'
import {useState} from 'react'
import DateTimePicker from 'react-datetime-picker'

const AddSchedule = () =>{
  const [value, onChange] = useState(new Date())
  return(
    <div>
      <DateTimePicker onChange={onChange} value={value}/>
    </div>
  )
}

export default AddSchedule
