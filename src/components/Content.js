import React from 'react';
import {Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//articles
import Contato from './Contato';
import Linguagens from './Linguagens';
import Footer from './Footer';
import Sobre from './Sobre';
import Modelos from './Modelos';
import Home from './Home';
import ArticleHeader from './ArticleHeader';
import { useViewportScroll } from 'framer-motion';

const useStyles = makeStyles({
    container: {
        height: '100vh',
        paddingTop: '20px',
        color: '#51802d',
        backgroundImage: 'linear-gradient(356deg, #51802d 15%, transparent 15.2%)',
        overflow: 'hidden'
    },
    containerReverse: {
        height: '100vh',
        backgroundColor: '#51802d',
        backgroundImage: 'linear-gradient(356deg, #dce6d5 15%, transparent 15.2%)',
        paddingTop: '20px',
        color: '#dce6d5',
        overflow: 'hidden'
    },
    main: {
        backgroundColor: '#dce6d5',
    }
});


export default function Content(props) {
    const classes = useStyles();

    const { articleId } = props;

    const {scrollYProgress} = useViewportScroll();

    function scroll(){
        return console.log(scrollYProgress);
    };

    return (
        <main className={classes.main}>
            <Container onClick={() => scroll} id="home" className={classes.container} maxWidth={false}>
                    <Home />
            </Container>
            <Container id="portfolio" className={classes.containerReverse} maxWidth={false}>
                    <ArticleHeader title="Portfólio" subtitle="Galeria de imagens" />
                    <Modelos />
            </Container>
            <Container id="about" className={classes.container} maxWidth={false}>
                <ArticleHeader title="Sobre" subtitle="História do autor" />
                <Container maxWidth="sm">
                    <Sobre />
                </Container>
            </Container>
            <Container id="languages" className={classes.containerReverse} maxWidth={false}>
                <ArticleHeader title="Linguagem" subtitle="Espectro de conhecimento" />
                <Container maxWidth="md">
                    <Linguagens />
                </Container>
            </Container>
            <Container id="contact" className={classes.container} maxWidth={false}>
                <ArticleHeader title="Contato" subtitle="Obtenha mais informações" />
                <Container maxWidth="sm">
                    <Contato />
                </Container>
                <Footer />
            </Container>
        </main>
    );
}