import * as React from 'react';
import TextField from '@mui/material/TextField';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';
import {useState} from 'react'


const AddSchedule = () =>{
  const [value, setValue] = useState(new Date())
  return(
    <LocalizationProvider dateAdapter={DateAdapter}>
      <Stack spacing={3}>
        <DateTimePicker
          renderInput={(params) => <TextField {...params} />}
          label="Ignore date and time"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          minDateTime={new Date()}
        />
      </Stack>
    </LocalizationProvider>
  )
}

export default AddSchedule
