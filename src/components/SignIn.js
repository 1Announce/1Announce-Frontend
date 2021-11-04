import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import GoogleButton from 'react-google-button';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

firebase.initializeApp({
  apiKey: "AIzaSyBaRLGZvIJY7YZuCHugptmfk0_2FosBU1M",
  authDomain: "announce-d9b77.firebaseapp.com",
  projectId: "announce-d9b77",
  storageBucket: "announce-d9b77.appspot.com",
  messagingSenderId: "252168177348",
  appId: "1:252168177348:web:83d700cc72aabefb24eb91",
  measurementId: "G-H0Q0Y49KQB"
})

const auth = firebase.auth();

function SignIn(){
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return(
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
         <Box className='SignInBox' component="form" /*onSubmit={handleSubmit}*/ noValidate sx={{ mt: 1 }}>
          <GoogleButton className='googleButton' style={{width:'100%'}} onClick={signInWithGoogle}/>
          <hr></hr>
           <TextField
             margin="normal"
             required
             fullWidth
             id="email"
             label="Email Address"
             name="email"
             autoComplete="email"
             autoFocus
           />
           <TextField
             margin="normal"
             required
             fullWidth
             name="password"
             label="Password"
             type="password"
             id="password"
             autoComplete="current-password"
           />
           <FormControlLabel
             control={<Checkbox value="remember" color="primary" />}
             label="Remember me"
           />
           <Button
             type="submit"
             fullWidth
             variant="contained"
             sx={{ mt: 3, mb: 2 }}
           >
             Sign In
           </Button>
           <Grid container>
             <Grid item xs>
               <Link href="#" variant="body2">
                 Forgot password?
               </Link>
             </Grid>
             <Grid item>
               <Link href="#" variant="body2">
                 {"Don't have an account? Sign Up"}
               </Link>
             </Grid>
           </Grid>
         </Box>
        </Box>

  )
}

export default SignIn
