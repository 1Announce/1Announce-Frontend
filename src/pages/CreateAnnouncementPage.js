import React from "react";
import MyForm from "../components/FieldArraysForm"

import Box from '@mui/material/Box';

import NavBar from '../components/NavBar';

function Create () {

  return(
    <Box
      component="main"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[900],
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      }}
    >
      <NavBar text1={'Home'}  link1={'/'}/>
      <MyForm />

    </Box>

  )
}

export default Create;
