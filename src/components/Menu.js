import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//icons
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import DirectionsCarIcon from '@material-ui/icons/DirectionsCar';
import CodeIcon from '@material-ui/icons/Code';
import PhoneIcon from '@material-ui/icons/Phone';
import { IconButton, AppBar, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  appBar: {
    backgroundColor: '#dce6d5',
    display: 'flex',
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-around'
  }
});

export default function Menu() {
  const classes = useStyles();

  return (
    <AppBar position="sticky" color="default" className={classes.appBar}>
      <Toolbar component="div" className={classes.toolBar}>
        <Typography variant="h6">
          Bruno
        </Typography>
        <IconButton href="#home" className={classes.buttons}>
          <HomeIcon />
        </IconButton>
        <IconButton href="#about">
          <InfoIcon />
        </IconButton>
        <IconButton href="#portfolio">
          <DirectionsCarIcon />
        </IconButton>
        <IconButton href="#languages">
          <CodeIcon/>
        </IconButton>
        <IconButton href="#contact">
          <PhoneIcon />
        </IconButton>
      </Toolbar>
  </AppBar>
  );
}