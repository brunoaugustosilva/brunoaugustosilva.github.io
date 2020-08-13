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
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        margin: '3rem 0',
        '& h1': {
            fontSize: '5rem',
            margin: '0.7rem 0',
            textAlign: 'center',
        },
        '& h2': {
            fontWeight: '100',
            marginTop: '2rem',
        }
    }
})

function ArticleHeader(props) {
    const classes = useStyles();

    const {title, subtitle} = props;

    return(
        <div className={classes.articleTitle}>
            <h1>{title}</h1>
            <hr className={classes.hr}/>
            <h2>{subtitle}</h2>
        </div>
    );
}

export default ArticleHeader;