import React, { useState, useEffect } from 'react';
import { makeStyles} from '@material-ui/core';
import Code from './Code';
import { motion } from 'framer-motion';

const useStyles = makeStyles({
    content: {
        height: '60vh',
        lineHeight: '1.5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sandBox: {
        width: '100%',
        borderRadius: '4px',
        border: 0
    },
    frame: {
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        margin: '0 35px',
        flexBasis: '500px'
    },
    code: {
        flexBasis: '380px'
    }
});

export default function Linguagens(){
    const classes = useStyles();

    const [view, setView] = useState(true);

    useEffect(() => {
    });

    const variants = {
        selected: { opacity: 1, flexBasis: ['500px']},
        unselected: { opacity: 0, flexBasis: ['0']},
    }

    return(
        <div className={classes.content}>
            <motion.div className={classes.frame} animate={view ? "selected" : "unselected"} variants={variants}>
                <iframe 
                className={classes.sandBox} title="sandBox" 
                src="https://repl.it/@brunoaugustosil/Fibonnaci?lite=true" scrolling="no"
                allowtransparency="false" allowFullScreen={false} 
                sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
            </motion.div>
            <Code className={classes.code} setView={(view) => setView(view)} view={view}/>
        </div>
    );
}