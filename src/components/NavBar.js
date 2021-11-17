import React from "react";
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles,} from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  navlinks: {
    marginLeft: theme.spacing(10),
    display: "flex",
  },
 logo: {
    flexGrow: "1",
    cursor: "pointer",
    color:'black'
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "red",
      borderBottom: "1px solid white",
    },
  },
}));

function NavBar({text1, link1, bClick, bText}) {
  const classes = useStyles();
    return (
      <AppBar position="static" style={{background:'white'}}>
      <CssBaseline />
      <Toolbar >
        <Typography variant="h4" className={classes.logo}>
          1<span style={{color: "red"}}>A</span>NNOUNCE
        </Typography>
          <div className={classes.navlinks}>
            <Link to={link1} className={classes.link}>
              {text1}
            </Link>
            if(bClick){

            }
          <Button variant="text" onClick={bClick}>
            {bText}
          </Button>
          </div>
      </Toolbar>
    </AppBar>
    );
}


export default NavBar;
