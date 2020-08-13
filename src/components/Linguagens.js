import React, { useState} from 'react';
import { makeStyles} from '@material-ui/core';
import Code from './Code';
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion';

import ReactMarkdown from 'react-markdown/with-html';
import htmlParser from 'react-markdown/plugins/html-parser';
import toc from 'remark-toc';
import { getLanguageById } from '../hooks/GetData';


const useStyles = makeStyles({
    content: {
        height: '60vh',
        lineHeight: '1.5',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    sample: {
        display: 'flex',
        justifyContent: 'left',
        backgroundColor: '#181917',
        marginRight: '20px',
        overflow: 'hidden',
        padding: '12px 0',
        borderRadius: '10px'
    },
    code: {
        width: '380px',
        transition: 'all 0.5s ease-in'
    }
});


export default function Linguagens(){
    const classes = useStyles();

    const [view, setView] = useState(true);
    const [pos, setPos] = useState(1);

    const variants = {
        active: {opacity: 1, scale: 1, x: 0, width: 450},
        disabled: {opacity: 0, scale: 0, x: -500, width: 0},
    }

    const parseHtml = htmlParser({
        isValidNode: node => node.type !== 'script',
        processingInstructions: [/* ... */]
    })

    const codeSamples = {
        1: `
        \`\`\`{cs}
        using System;

        class MainClass {
            public static void Main (string[] args) {
                Console.WriteLine ("Hello World");
            }
        }
        \`\`\`
        `,
        2: `
        \`\`\`java
        class Main {
            public static void main(String[] args) {
            System.out.println("Hello world!");
            }
        }
        \`\`\`
        `,
        3: `
        \`\`\`sql
        SELECT 'The time is ' || time('now');
        SELECT 'Tomorrow will be ' || 
            date('now', '+1 day');
        SELECT 'Today is day ' ||
            (cast(
                julianday('now')
                - julianday('now', 'start of year')
                as int) + 1)
            || ' of ' || strftime('%Y', date('now'));
        \`\`\`
        `,
    };

    let result = getLanguageById(pos);
    let element = result[0];

    return(
        <div className={classes.content}>
            <motion.div className={classes.sample} animate={view ? "active" : "disabled"} variants={variants}>
                <ReactMarkdown title="codeSample" 
                source={codeSamples[pos]} escapeHtml={false} 
                astPlugins={[parseHtml]} 
                skipHtml={false}
                plugins={[toc]}
                />
            </motion.div>
            <motion.div>
                <AnimateSharedLayout>
                    <AnimatePresence>
                        <motion.div layout key={element.id}>
                            <Code className={classes.code} 
                            setView={(view) => setView(view)} view={view}
                            setPos={(pos) => setPos(pos)} pos={pos}
                            />
                        </motion.div>
                    </AnimatePresence>
                </AnimateSharedLayout>
            </motion.div>
        </div>
    );
}