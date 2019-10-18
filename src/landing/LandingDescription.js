import React from 'react';
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Markdown from "../components/Markdown";
import description from "./description.md";

const useIndexStyles = makeStyles(theme => ({
    header: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(/static/landing/landing-background-foggy-forest.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left bottom',
    },
    headerContent: {
        position: 'relative',
        padding: theme.spacing(3),
    },
    markdown: {
        ...theme.typography.body2,
        padding: theme.spacing(3, 0),
    },
}));


function LandingDescription() {
    const classes = useIndexStyles();
    return (
        <Paper className={classes.header}>
            {/*  Increase background image priority  */}
            {
                <img
                    style={{display: 'none'}}
                    src='/static/landing/landing-background-foggy-forest.jpg'
                    alt="background"
                />
            }
            <Grid container>
                <Grid item md={6}>
                    <div className={classes.headerContent}>
                        <Markdown className={classes.markdown}>
                            {description}
                        </Markdown>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default LandingDescription;