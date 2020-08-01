import React, { useState, useEffect } from 'react';
import { CardHeader, Avatar, CardContent, Typography, CardActions, IconButton, makeStyles, Card} from '@material-ui/core';

//icons
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import CodeIcon from '@material-ui/icons/Code';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

//data
import { getLanguageById } from '../hooks/GetData';

const useStyles = makeStyles({
    card: {
        backgroundColor: '#dce6d5',
        flex: '3',
        maxWidth: '50vh',
        height: '280px',
        textAlign: 'left',
        display: 'flex',
        flexFlow: 'column'
    },
    avatar: {
        backgroundColor: '#51802d'
    },
    cardActions: {
       justifyContent: 'center'
    },
    content: {
        flexBasis: '50%'
    }
});


export default function Code(props){
    const classes = useStyles();

    const {view, setView} = props;
    const [pos, setPos] = useState(1);

    let result = getLanguageById(pos);
    let element = result[0];

    useEffect(() => {
    });

    return(
        <Card className={classes.card}>
            <CardHeader avatar={
                <Avatar className={classes.avatar} aria-label="recipe"><CodeIcon /></Avatar>
            }
            title={element.title}
            subheader={element.description}>
            </CardHeader>
            <CardContent className={classes.content}>
                <Typography variant="body2" component="p" color="textSecondary">
                    {element.content}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <IconButton 
                    onClick={() => setPos(pos - 1)} arial_label="Voltar" 
                    disabled={pos === 1}>
                    <ArrowBackIosIcon />
                </IconButton>
                <IconButton onClick={() => setView(!view)} aria-label="Ver mais">
                    {view ? <VisibilityIcon /> :
                    <VisibilityOffIcon />}
                </IconButton>
                <IconButton 
                    onClick={() => setPos(pos + 1)} arial_label="Avançar"
                    disabled={pos === 3}>
                    <ArrowForwardIosIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}