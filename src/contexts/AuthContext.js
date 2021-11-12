import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../firebase'
import firebase from 'firebase/compat/app'

const AuthContext = React.createContext()

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({children}){
  const[currentUser, setCurrentUser] = useState()
  const[loading,setLoading] = useState(true)

  function signup(email, password){
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email,password){
    return auth.signInWithEmailAndPassword(email,password)
  }

  function logout(){
    return auth.signOut()
  }

  function resetPassword(email){
    return auth.sendPasswordResetEmail(email)
  }

  function socialMediaAuth(provider){
    firebase.auth().signInWithPopup(provider).then((res)=>{
      return res.user;
    }).catch((er)=>{
      return er
    })
  }

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(user =>{
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value ={
    currentUser, signup, login, logout, resetPassword, socialMediaAuth
  }
  return(
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
