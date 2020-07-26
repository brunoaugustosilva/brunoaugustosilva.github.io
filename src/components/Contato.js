import React from 'react';
import {Chip} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

//icons
import MailIcon from '@material-ui/icons/Mail';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles({
    content: {
        textAlign: 'center',
        overflowY: 'auto',
    },
    buttons: {
        margin: '10px',
        color: '#1d1d1d',
        padding: '20px 8px',
        backgroundColor: '#c2ccbb',
    }
});

export default function Contato(){
    const classes = useStyles();

    return(
        <div className={classes.content}>
            <Chip className={classes.buttons} icon={<MailIcon />} target="blank" component="a" href="mailto:bruno_augusto560@hotmail.com" clickable label="Mail" />
            <Chip className={classes.buttons} icon={<FacebookIcon />}  target="blank" component="a" href="https://www.facebook.com/brunoaugustosilva8" clickable label="Facebook" />
            <Chip className={classes.buttons} icon={<InstagramIcon />} target="blank" component="a" href="https://www.instagram.com/bruno_augusto560/" clickable label="Instagram" />
            <Chip className={classes.buttons} icon={<TwitterIcon />} target="blank" component="a" href="https://twitter.com/BrunoAugusto560" clickable label="Twitter" />
            <Chip className={classes.buttons} icon={<GitHubIcon />} target="blank" component="a" href="https://github.com/brunoaugustosilva" clickable label="Github" />
            <Chip className={classes.buttons} icon={<LinkIcon />} target="blank" component="a" href="https://stackoverflow.com/users/13741331/bruno-augusto-sillva" clickable label="StackOverflow" />
            <Chip className={classes.buttons} icon={<LinkedInIcon />} target="blank" component="a" href="https://www.linkedin.com/in/bruno-silva-25a824181/" clickable label="Linkedin" />
        </div>
    );
}