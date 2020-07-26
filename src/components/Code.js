import React, { useState, useEffect } from 'react';
import { CardHeader, Avatar, CardContent, Typography, CardActions, IconButton, makeStyles, Card } from '@material-ui/core';

//icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CodeIcon from '@material-ui/icons/Code';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#dce6d5',
        flex: '3',
        maxWidth: '50vh',
        textAlign: 'left',
    },
    avatar: {
        backgroundColor: '#51802d'
    },
    cardActions: {
       justifyContent: 'center'
    }
});


export default function Code(){
    const classes = useStyles();

    const [view, setView] = useState(true);
    const [language, setLanguage] = useState(1);

    useEffect(() => {
        console.log(view);
        console.log(language);
    });

    return(
        <Card className={classes.card}>
            <CardHeader avatar={
                <Avatar className={classes.avatar} aria-label="recipe"><CodeIcon /></Avatar>
            }
            title="C Sharp"
            subheader="Linguagem de programação">
            </CardHeader>
            <CardContent>
                <Typography variant="body2" component="p" color="textSecondary">
                    Linguagem inicialmente utilizada durante o 1º e 2º semestres da
                    Fatec Guaratinguetá, amplamente utilizada em construção de sofwares de
                    grandes desenvolvedoras
                    e de sistemas operacionais.
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton 
                    onClick={() => setLanguage(language - 1)} arial_label="Voltar" 
                    disabled={language === 1}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton onClick={() => setView(!view)} aria-label="Ver mais">
                    {view ? <VisibilityIcon /> :
                    <VisibilityOffIcon />}
                </IconButton>
                <IconButton 
                    onClick={() => setLanguage(language + 1)} arial_label="Avançar"
                    disabled={language === 3}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}