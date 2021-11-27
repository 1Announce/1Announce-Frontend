import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import TextField from '@mui/material/TextField';

import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AttachFileIcon from '@mui/icons-material/AttachFile';


const uploadImage = async(e) =>{
  console.log(e.target.files)
  const file = e.target.files[0]
  const base64 = await convertBase64(file)
  console.log(base64)
}

const convertBase64=(file)=>{
  return new Promise((resolve,reject)=>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = (()=>{
      resolve(fileReader.result);
    });

    fileReader.onerror = ((error)=>{
      reject(error);
    })
  })
}

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <TextField
    label = {label}
    placeholder = {label}
    error={error}
    helperText={error}
    {...input}
  />
)

const fileField = ({ input, label, type, meta: { touched, error } }) => (
<input  id="file" type="file" onChange={(e) => {
    input.onChange(uploadImage(e));
  }}/>
)

const renderAttachment = ({ fields, meta: { error } }) => (
  <ul>
    <li>
      <Button variant="contained" endIcon={<AttachFileIcon />} onClick={() => fields.push()}>
        Add Attachment
      </Button>
    </li>
    {fields.map((attachment, index) => (
      <li key={index}>
        <IconButton aria-label="delete" onClick={() => fields.remove(index)} >
          <DeleteIcon />
        </IconButton>
        <Field
          name={attachment}
          type="file"
          component={fileField}
          label={`Attachment #${index + 1}`}
        />
      </li>
    ))}
    {error && <li className="error">{error}</li>}
  </ul>
)

const renderAnnouncement = ({ fields, meta: { error, submitFailed } }) => (
  <ul>
    {fields.map((announcement, index) => (
      <li key={index}>
        <Paper
          className='announcementPaper'

          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            m: 2,
            //border: 1
          }}
        >
        <div style={{display: 'flex', flexDirection: 'row'}}>
          <h3 className='AnnouncementNumber'>Announcement #{index + 1}</h3>
            <IconButton aria-label="delete" onClick={() => fields.remove(index)}>
              <DeleteIcon />
            </IconButton>
        </div>

        <Field
          name={`${announcement}.text`}
          type="text"
          component={renderField}
          label="Announcement"
        />
      <FieldArray name={`${announcement}.attachments`} component={renderAttachment} />
        </Paper>
      </li>
    ))}
    <li>
      <Button variant="contained" component="span" sx={{m:1}} onClick={() => fields.push({})}>
        Add Announcement
      </Button>
      {submitFailed && error && <span>{error}</span>}
    </li>
  </ul>
)

const MyForm = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <Paper
      style ={{backgroundColor:'#cccccc'}}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
    <h1>1. Draft Announcements</h1>

    <form onSubmit={handleSubmit}>
      <FieldArray name="announcment" component={renderAnnouncement} />
      <div>
        <button type="submit" disabled={submitting} className='btn btn-block'>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset} className='btn btn-block'>
          Clear Values
        </button>
      </div>
    </form>
    </Paper>

  )
}

export default reduxForm({
  form: 'MyForm', // a unique identifier for this form
})(MyForm)
