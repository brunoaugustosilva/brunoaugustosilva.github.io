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

export default function Menu(props) {
  const classes = useStyles();

  const {setArticleId} = props;

  return (
    <AppBar position="sticky" color="default" className={classes.appBar}>
      <Toolbar component="div" className={classes.toolBar}>
        <Typography variant="h6">
          Bruno
        </Typography>
        <IconButton href="#home" size="medium" onClick={() => setArticleId(1)}>
          <HomeIcon />
        </IconButton>
        <IconButton href="#portfolio" onClick={() => setArticleId(2)}>
          <DirectionsCarIcon />
        </IconButton>
        <IconButton href="#about"  onClick={() => setArticleId(3)}>
          <InfoIcon />
        </IconButton>
        <IconButton href="#languages"  onClick={() => setArticleId(4)}>
          <CodeIcon/>
        </IconButton>
        <IconButton href="#contact"  onClick={() => setArticleId(5)}>
          <PhoneIcon />
        </IconButton>
      </Toolbar>
  </AppBar>
  );
}