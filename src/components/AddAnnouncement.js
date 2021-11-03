import {useState} from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';


const AddAnnouncement = ({onAdd}) =>{

  const [value, setValue] = useState('');
  const Input = styled('input')({
  display: 'none',
});

  const onSubmit = (e) => {
    e.preventDefault()

    if(!value) {
      alert('Please add an Announcement')
      return
    }

    //need to add file to onAdd
    onAdd({value, Input})

    setValue('')
    //need to reset Input
  }
  return(
    <div className='form-control' >
      <label>Announcement</label>
      <Box component="form" sx={{'& .MuiTextField-root': { m: 1, width: '100%' },}} noValidate autoComplete="off" onSubmit={onSubmit}>
        <TextField
          id="outlined-multiline-flexible"
          label="Add Announcement"
          multiline
          maxRows={4}
          value={value}
          onChange={(e)=> setValue(e.target.value)}
        />
        <label>Attachment</label>
        <Stack direction="row" alignItems="center" spacing={2}>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
          </label>
        </Stack>
        <input type='submit' value='Add Announcement' className='btn btn-block'/>
      </Box>

    </div>
  )
}

export default AddAnnouncement
