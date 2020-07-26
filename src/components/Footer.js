import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    footer: {
        textAlign: 'center',
        padding: '8px 12px'
    }
});

export default function Footer(){
    const classes = useStyles();

    return(
        <footer className={classes.footer}>
            <p>Website by bruno</p>
        </footer>
    );
}