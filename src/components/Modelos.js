import React from 'react';
import { makeStyles} from '@material-ui/core';
import {motion, AnimatePresence, AnimateSharedLayout} from 'framer-motion';
import ModelImage from './ModelImage';

//images
import todosApp from '../assets/todosApp.png';
import car from '../assets/car.png';
import gun from '../assets/gun.png';
import quizer from '../assets/quizer.png';
import sind from '../assets/sind.png';
import mercosul from '../assets/mercosulBoard.jpg';
import baby from '../assets/baby.png';

const useStyles = makeStyles({
    content: {
        height: '60vh',
        textAlign: 'center',
        lineHeight: '1.5',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'center',
        overflowY: 'auto',
        borderRadius: '20px',
        padding: '20px',
        backgroundColor: '#dce6d5',
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
        <AnimateSharedLayout>
            <AnimatePresence>
                <motion.div className={classes.content} layout>
                    <ModelImage content={todosApp}/>
                    <ModelImage content={car}/>
                    <ModelImage content={gun}/>
                    <ModelImage content={quizer}/>
                    <ModelImage content={sind}/>
                    <ModelImage content={mercosul}/>
                    <ModelImage content={baby}/>
                </motion.div>
            </AnimatePresence>
        </AnimateSharedLayout>
    );
}