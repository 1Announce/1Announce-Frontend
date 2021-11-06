import React from "react";
import { Link } from "react-router-dom";
import SplashImage from '../Images/SplashImage.png'

import SignIn from '../components/SignIn'
import NavBar from '../components/NavBar'

import Button from '@mui/material/Button';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';


const auth = firebase.auth();

function Splash() {

    return (
      <div>
        <NavBar/>
          <div style={{backgroundImage: `url(${SplashImage})`, backgroundPosition: 'center', backgroundSize: 'cover ', backgroundRepeat: 'no-repeat', width: '100vw', height: '93vh'}}>
            
            <SignIn/>
          </div>
      </div>

    );
}


export default Splash;
