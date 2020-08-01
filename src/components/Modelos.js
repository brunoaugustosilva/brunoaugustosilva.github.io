import React from 'react';
import { makeStyles, Paper } from '@material-ui/core';
import {motion} from 'framer-motion';

const useStyles = makeStyles({
    content: {
        height: '40vh',
        textAlign: 'center',
        lineHeight: '1.5',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center'
    },
    paper: {
        flexBasis: '200px',
        padding: '20px 10px',
        margin: '10px 10px',
        borderRadius: '4px',
        backgroundColor: '#dce6d5'
    }
});


export default function Modelos(){
    const classes = useStyles();

    return(
        <div className={classes.content}>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={0} >A</Paper>
            </motion.div>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={1} >B</Paper>
            </motion.div>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={1} >C</Paper>
            </motion.div>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={2} >D</Paper>
            </motion.div>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={2} >E</Paper>
            </motion.div>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={2} >F</Paper>
            </motion.div>
            <motion.div className={classes.paper} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Paper elevation={2} >G</Paper>
            </motion.div>
        </div>
    );
}