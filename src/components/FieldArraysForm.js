import React from 'react'
import {Field, FieldArray, reduxForm} from 'redux-form'
import {useState} from 'react'

import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import Container from '@mui/material/Container';
import DateAdapter from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Stack from '@mui/material/Stack';




const uploadImage = async (e) => {
  console.log(e.target.files)
  const file = e.target.files[0]
  // add check for file type
  const base64 = await convertBase64(file);
  return {filename: file.name, base64};
}

const convertBase64 = async (file) => {
  // add check for file type
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (() => {
      resolve(fileReader.result);
    });

    fileReader.onerror = ((error) => {
      reject(error);
    })
  })
}

const RenderDateTimePickerField = ({input})=>{
  const [value, setValue] = useState(new Date())
  return(
    <Paper className='announcementPaper' sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        m: 2,
        //border: 1
      }}
      style={{width:'325px'}}>
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Stack spacing={3}>
          <DateTimePicker
            minDateTime={new Date()}
            renderInput={(params) => <TextField {...params} size='small'/>}
            label="Schedule your announcement"
            value={input.value ? value : null}
            onChange={(newValue) => {
              setValue(newValue);
              input.onChange(value.getTime())
            }}
          />
        </Stack>
      </LocalizationProvider>
    </Paper>
  )
}

const RenderTextField = ({input, label}) => (
  <TextField size='small' label={label} placeholder={label} {...input} multiline minRows='5' sx={{mb:2}}/>
)

const fileField = ({input, type, meta: { touched, error}}) => (
  <input id="file" type="file" onChange={(e) => {
    uploadImage(e).then(metadata => {
      console.log('output=', metadata)
      input.onChange(metadata)
    }).catch(err => {
      console.log('Upload Image failed! err=', err);
    });
  }}/>)

const RenderAttachmentField = ({fields, meta: {error}}) => (
  <ul>
    <li>
      <Button variant="contained" endIcon={<AttachFileIcon />} onClick={() => fields.push()}>
        Add Attachment
      </Button>
    </li>
    {
      fields.map((attachment, index) => (<li key={index}>
        <IconButton aria-label="delete" onClick={() => fields.remove(index)}>
          <DeleteIcon/>
        </IconButton>
        <Field name={attachment} type="file" component={fileField} label={`Attachment #${index + 1}`}/>
      </li>))
    }
    {error && <li className="error">{error}</li>}
  </ul>)

const renderAnnouncement = ({fields, meta: { error, submitFailed }}) => (
  <ul>
  {
    fields.map((announcement, index) => (<li key={index}>
      <Paper className='announcementPaper' sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          m: 2,
          //border: 1
        }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row'
          }}>
          <h3 className='AnnouncementNumber'>Message #{index + 1}</h3>
          <IconButton aria-label="delete" onClick={() => fields.remove(index)}>
            <DeleteIcon/>
          </IconButton>
        </div>

        <Field name={`${announcement}.text`} type="text" component={RenderTextField} label="Announcement"/>
        <FieldArray name={`${announcement}.message`} component={RenderAttachmentField}/>
      </Paper>
    </li>))
  }
  <li>
    <Button variant="contained" component="span" sx={{
        m: 1
      }} onClick={() => fields.push({})}>
      Add Announcement
    </Button>
    {submitFailed && error && <span>{error}</span>}
  </li>
</ul>)

const MyForm = ({handleSubmit, reset, submitting}) => {
  return (<Container maxWidth={false} sx={{
      mt: 4,
      mb: 4,
      width: '85%'
    }}>
    <form onSubmit={handleSubmit}>
      <Paper style={{
          backgroundColor: '#cccccc'
        }} sx={{
          mb: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}>
        <h1>1. Draft Announcements</h1>
        <FieldArray name="messages" component={renderAnnouncement} />

      </Paper>
      <Paper style={{
          backgroundColor: '#cccccc'
        }} sx={{
          mb: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}>
        <h1>2. Schedule</h1>
        <Field name="schedule" value={new Date()} type="dateTime" component={RenderDateTimePickerField} label="schedule"/>
      </Paper>

      <Paper style={{
          backgroundColor: '#cccccc'
        }} sx={{
          mb: 2,
          p: 2,
          display: 'flex',
          flexDirection: 'column'
        }}>
        <h1>3. Submit</h1>
          <div>
            <button type="submit" disabled={submitting} className='btn btn-block'>
              Schedule
            </button>
          </div>
      </Paper>

    </form>
  </Container>)
}

export default reduxForm({
  form: 'MyForm', // a unique identifier for this form
})(MyForm)
