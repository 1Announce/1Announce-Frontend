import React from "react";
import { Link } from "react-router-dom";
import SplashImage from '../Images/SplashImage.png';
import {Redirect} from 'react-router-dom';

import SignIn from '../components/SignIn'
import NavBar from '../components/NavBar'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import {useAuthState} from 'react-firebase-hooks/auth';


const auth = firebase.auth();


function Splash() {
  const [user] = useAuthState(auth);
    if(user){
      return <Redirect to ='/Home'/>;
    }

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
