import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Logo from '../Images/Slicing/Logo.jpg'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background:'white'
  },
  header:{
      background:'white'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Header=() =>{
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <img src={Logo} alt="Logo"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header
