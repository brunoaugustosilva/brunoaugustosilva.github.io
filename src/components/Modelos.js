import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    content: {
        height: '60vh',
        textAlign: 'center',
        lineHeight: '1.5',
        display: 'flex',
        flexFlow: 'column',
    },
});


export default function Modelos(){
    const classes = useStyles();

    return(
        <div className={classes.content}>
        </div>
    );
}