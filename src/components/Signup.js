import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import {useAuth} from '../contexts/AuthContext'
import {Link, useHistory} from "react-router-dom"

import {useRef,useState} from 'react'


function Signup(){
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const {signup} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('disable')
  const history = useHistory()


  async function handleSubmit(e){
    e.preventDefault()
     if (passwordRef.current.value !== passwordConfirmRef.current.value) {
       return setError("Passwords do not match")
     }
     if(passwordRef.current.value.length < 6 || passwordRef.current.value.length > 18){
       return setError("Password length must be between 6-18 characters")
     }
     try {
       setError("")
       setLoading('enable')
       await signup(emailRef.current.value, passwordRef.current.value)
       history.push('/')
     } catch {
       setError("Failed to create an account")
     }
     setLoading('disable')
   }

  return(
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
       <Avatar sx={{ m: 1, bgcolor: '#4c8bf5',  marginTop: 16}}>
         <LockOutlinedIcon />
       </Avatar>
       <Typography component="h1" variant="h5">
         Sign Up to Improve Your Announcement Experience
       </Typography>
       <Box className='SignInBox' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={{width:'700px'}}>
         {error && <Alert severity="error">{error}</Alert>}
         <TextField
           margin="normal"
           required
           fullWidth
           label="Email Address"
           name="email"
           autoComplete="email"
           autoFocus
           inputRef={emailRef}
           style={{background:"#ffbb3f"}}
         />
         <TextField
           margin="normal"
           required
           fullWidth
           name="password"
           label="Password"
           type="password"
           inputRef={passwordRef}
           style={{background:"#ffbb3f"}}
         />
         <TextField
           margin="normal"
           required
           fullWidth
           name="password-confirm"
           label="Password Confirmation"
           type="password"
           inputRef={passwordConfirmRef}
           style={{background:"#ffbb3f"}}
         />
         <Button
           type="submit"
           fullWidth
           variant="contained"
           disable={loading}
           sx={{ mt: 3, mb: 2 }}
         >
           Sign Up
         </Button>
         <Grid container>
           <Grid item xs>
             <Link to="/signin" >
             Already have an account? Sign In
             </Link>
           </Grid>
         </Grid>
       </Box>
      </Box>
  )
}

export default Signup
