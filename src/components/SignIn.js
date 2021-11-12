import 'firebase/compat/auth';
import GoogleButton from 'react-google-button';

import {useRef,useState} from 'react'
import {Link, useHistory} from "react-router-dom"
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
import {googleProvider} from "../contexts/AuthMethods"


function SignIn(){
  const emailRef = useRef()
  const passwordRef = useRef()
  const {login} = useAuth()
  const {socialMediaAuth} = useAuth()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState('disable')
  const history = useHistory()

  async function handleSubmit(e){
    e.preventDefault()

     try {
       setError("")
       setLoading('enable')
       await login(emailRef.current.value, passwordRef.current.value)
       history.push('/')
     } catch {
       setError("Failed to sign in")
     }
     setLoading('disable')
   }

  async function signInWithGoogle(provider){
    const res = await socialMediaAuth(provider);
    console.log(res)
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
           Sign In to Improve Your Announcement Experience
         </Typography>
         <Box className='SignInBox' component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} style={{width:'700px'}}>
         {error && <Alert severity="error">{error}</Alert>}
          <GoogleButton className='googleButton' style={{width:'100%'}} onClick={()=>signInWithGoogle(googleProvider)}/>
          <hr></hr>
           <TextField
             margin="normal"
             required
             fullWidth
             label="Email Address"
             name="email"
             autoComplete="email"
             inputRef={emailRef}
             autoFocus
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
             autoComplete="current-password"
             style={{background:"#ffbb3f"}}
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
             disable={loading}
           >
             Sign In
           </Button>
           <Grid container>
             <Grid item xs>
               <Link to="/forgot-password">
                 Forgot password?
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

export default SignIn
