import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    hr:{
        overflow: 'visible',
        boxSizing: 'content-box',
        height: '0',
        border: '1px solid',
        width: '150px',
    },
    articleTitle: {
        color: 'inherit',
        letterSpacing: '-1.3px',
        textAlign: 'center',
        marginTop: '10vh',
        '& h1': {
            fontSize: '2em',
            margin: '0.67em 0',
        }
    },
})

function ArticleHeader(props) {
    const classes = useStyles();

    const content = {
        title: props.title,
        subtitle: props.subtitle
    };

    return(
        <div className={classes.articleTitle}>
            <h1>{content.title}</h1>
            <hr className={classes.hr}/>
            <h2>{content.subtitle}</h2>
        </div>
    );
}

export default ArticleHeader;