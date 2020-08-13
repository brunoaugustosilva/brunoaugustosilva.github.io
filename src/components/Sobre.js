import React, { useState} from 'react';
import { makeStyles, Typography, Slider} from '@material-ui/core';
import {AnimateSharedLayout, AnimatePresence, motion} from 'framer-motion';

//data
import { getLifeById } from '../hooks/GetData';

const useStyles = makeStyles({
    content: {
        height: '60vh',
        textAlign: 'center',
        lineHeight: '1.5',
        display: 'flex',
        flexFlow: 'column',
    },
    mark: {
        backgroundColor: '#51802d',
        color: '#dce6d5',
        padding: '2px 3px',
        borderRadius: '6px',
        boxShadow: '1px 2px 6px #0000007a',
    },
    description: {
        flexBasis: '20rem',
        overflow: 'hidden',
    },
    slider: {
        marginTop: '5vh',
        color: '#51802d',
    },
    body: {
        fontSize: '1.6rem'
    }
});

const marks = [
    {
        value: 1,
        label: 'Sobre',
    },
    {
        value: 2,
        label: 'Etec',
    },
    {
        value: 3,
        label: 'CEL'
    },
    {
        value: 4,
        label: 'Fatec',
    },
    {
        value: 5,
        label: 'Cisco'
    },
    {
        value: 6,
        label: 'Qualifica',
    },
    {
        value: 7,
        label: 'Liax'
    }
];

function valuetext(value) {
    return `${value}`;
}

export default function Sobre(){
    const classes = useStyles();

    const [value, setValue] = useState(1);
    
    let result = getLifeById(value);
    let content = result[0];

    const handleChange = (event, value) => {
        setValue(value);
    }

    return(
        <div className={classes.content}>
            <div className={classes.description}>
                <AnimateSharedLayout>
                    <AnimatePresence>
                        <motion.div layout 
                        key={content.id} initial={{x: [-100, 0]}}>
                            <Typography variant="body1" className={classes.body}>
                                {content.description}
                            </Typography>
                        </motion.div>
                    </AnimatePresence>
                </AnimateSharedLayout>
            </div>
            <Slider className={classes.slider}
                defaultValue={1}
                value={value}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                min={1}
                max={7}
                onChangeCommitted={handleChange}
                marks={marks}
                valueLabelDisplay="off"
            />
        </div>
    );
}