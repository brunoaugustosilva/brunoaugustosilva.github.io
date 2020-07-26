import React from 'react';
import { makeStyles, Typography, Slider } from '@material-ui/core';

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
    slider: {
        marginTop: '5vh',
        color: '#51802d',
    }
});

const marks = [
    {
        value: 0,
        label: 'Sobre',
    },
    {
        value: 1,
        label: 'Etec',
    },
    {
        value: 2,
        label: 'CEL'
    },
    {
        value: 3,
        label: 'Fatec',
    },
    {
        value: 4,
        label: 'Cisco'
    },
    {
        value: 5,
        label: 'Qualifica',
    },
    {
        value: 6,
        label: 'Liax'
    }
];

function valuetext(value) {
    return `${value}`;
}

export default function Sobre(){
    const classes = useStyles();

    return(
        <div className={classes.content}>
            <Typography variant="body1">
                Olá sou bruno, programador, técnico de informática pela <br/><mark className={classes.mark}>ETEC Guaratinguetá</mark>, e futuro graduado na <mark className={classes.mark}>Fatec Guaratinguetá</mark>.
                Atualmente trabalho como analista desenvolvedor pela <mark className={classes.mark}>Liax Tecnologia da Informação</mark>. 
                Possuo diversos hobbies relacionados com o ramo da computação nos quais saliento a modelagem 3D, programação de jogos e animação. 
                Tenho diversas propostas que pode satisfazê-lo (claro se quiser falar comigo) logo aqui embaixo é so conferir (não machuca), muito obrigado desde já, por estar aqui.
            </Typography>
            <Slider className={classes.slider}
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                step={1}
                max={6}
                marks={marks}
                valueLabelDisplay="off"
            />
        </div>
    );
}