import React, { useState } from 'react';
import { makeStyles} from '@material-ui/core';
import Code from './Code';

const useStyles = makeStyles({
    content: {
        height: '60vh',
        lineHeight: '1.5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    sandBox: {
        height: '100%',
        flex: '5',
        borderRadius: '4px',
        margin: '0 50px 0 0',
        border: 0
    },
});

export default function Linguagens(){
    const classes = useStyles();

    const [view, setView] = useState(true);

    return(
        <div className={classes.content}>
            {view ? <iframe className={classes.sandBox} title="sandBox"
                src="https://codesandbox.io/embed/new?codemirror=1"
                allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
                sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
                hidenavigation="true"
            ></iframe> : null}
            <Code />
        </div>
    );
}