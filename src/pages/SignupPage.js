import React from "react";
import SplashImage from '../Images/SplashImage.png';

import Signup from '../components/Signup'
import NavBar from '../components/NavBar'


function SignupPage() {
    return (
      <div>
        <NavBar text1={'Sign In'} link1={'/signin'}/>
          <div style={{backgroundImage: `url(${SplashImage})`, backgroundPosition: 'center', backgroundSize: 'cover ', backgroundRepeat: 'no-repeat', width: '100vw', height: '93vh'}}>
            <Signup/>
          </div>
      </div>

    );
}


export default SignupPage;
