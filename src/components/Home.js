import React from 'react';
import {makeStyles, Typography} from '@material-ui/core';
import picture from '../assets/image_picture.png';

const useStyles = makeStyles({
    content: {
        display: 'flex',
        flexFlow: 'row wrap',
        margin: '0',
    },
    image: {
        flexBasis: '50rem',
        filter: 'drop-shadow(12px 4px 6px rgba(0, 0, 0, 0.1))',
        overflow: 'hidden',
        borderRadius: '50%',
        '& > img': {
            width: "85%"
        }
    },
    title: {
        flexBasis: '50rem'
    },
    h2: {
        fontSize: '6rem',
        fontWeight: '700',
        lineHeight: '1.0',
        letterSpacing: '-0.033rem',
        margin: '30px 0'
    },
    h3: {
        fontSize: '2.3rem',
        fontWeight: 'Lighter'
    }
});


export default function Carrousel(){

    const classes = useStyles();

    return (
        <article className={classes.content}>
            <div className={classes.image}>
                <img src={picture} alt="Logo" />
            </div>
            <div className={classes.title}>
                <Typography variant="h2" className={classes.h2}>
                    Seja bem-vindo ao meu site
                </Typography>
                <Typography variant="h3" className={classes.h6}>
                    Esse site apresenta as informações relacionadas a minhas vida pessoal, profissional e também outros detalhes. Veja e confira
                </Typography>
            </div>
        </article>
    );
}