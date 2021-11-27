import React from "react";
import MyForm from "../components/FieldArraysForm"
import showResults from "../components/ShowResults";

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

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
      <Container maxWidth={false}  sx={{ mt:4, mb:4, width: '85%'}}>
        <MyForm onSubmit={showResults}/>
      </Container>
    </Box>

  )
}

export default Create;
