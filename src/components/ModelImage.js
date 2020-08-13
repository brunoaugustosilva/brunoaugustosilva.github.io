import React, { useState } from "react";
import { motion } from "framer-motion";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    bar: {
       padding: '6px 12px'
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: '15px 15px 0 0',
    },
    model: {
        margin: '10px',
        flexBasis: '250px',
        cursor: 'pointer',
        borderRadius: '4px',
        border: '4px solid #dce6d5',
        backgroundColor: '#dce6d5',
        color: '#000',
        overflow: 'hidden',
    }
});


export default function ModelImage (props) {

    const {content} = props;

    const [enabled, setEnabled] = useState(false);

    const classes = useStyles();

    const variants = {
        initial: {
            position: 'inherit',
            height: '150px',
            zIndex: '1'
        },
        modal: {
            position: 'fixed',
            width: '700px',
            height: '400px',
            left: 'calc(50% - 350px)',
            top: 'calc(50% - 200px)',
            zIndex: '2',
        }
    }

    return (
        <>
            <motion.div animate={enabled ? "modal" : "initial"} variants={variants}
            onHoverEnd={(event, info) => console.log(info)}  onClick={() => setEnabled(!enabled)} className={classes.model} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <img className={classes.image} src={content} alt="Logo" />
            </motion.div>
        </>
    );
};