import 'firebase/compat/auth';

import {useRef,useState} from 'react'
import {Link} from "react-router-dom"
import {useAuth} from '../contexts/AuthContext'

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';
import {AuthProvider} from "../contexts/AuthContext"


function ForgotPassword(){
  const emailRef = useRef()
  const {resetPassword} = useAuth()
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState('disable')

  async function handleSubmit(e){
    e.preventDefault()

     try {
       setMessage("")
       setError("")
       setLoading('enable')
      await resetPassword(emailRef.current.value)
      setMessage('Check your inbox for further instrictions')
     } catch {
       setError("Failed to reset password")
     }
     setLoading('disable')
   }

  return(
    <AuthProvider>
    <Box
         sx={{
           display: 'flex',
           flexDirection: 'column',
           alignItems: 'center',
         }}
       >
         <Avatar sx={{ m: 1, bgcolor: '#4c8bf5',  marginTop: 16}}>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Password Rest
         </Typography>
         <Box className='SignInBox' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
         {error && <Alert severity="error">{error}</Alert>}
         {message && <Alert severity="info"> {message}</Alert>}
           <TextField
             margin="normal"
             required
             fullWidth
             label="Email Address"
             name="email"
             autoComplete="email"
             inputRef={emailRef}
             autoFocus
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
             disable={loading}
           >
             Reset Password
           </Button>
           <Grid container>
             <Grid item xs>
               <Link to="/signin">
                 Sign In
               </Link>
             </Grid>
             <Grid item>
               <Link to="/signup" >
               Don't have an account? Sign Up
               </Link>
             </Grid>
           </Grid>
         </Box>
        </Box>
      </AuthProvider>
  )

}

export default ForgotPassword
