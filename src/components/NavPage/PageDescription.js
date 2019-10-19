import React from 'react';
import {makeStyles} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Markdown from "../Markdown";

const useIndexStyles = makeStyles(theme => ({
    header: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        backgroundImage: 'url(/static/navpage/background-night-forest.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'left center',
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


function PageDescription(props) {
    const classes = useIndexStyles();
    const {description} = props;
    return (
        <Paper className={classes.header}>
            {/*  Increase background image priority  */}
            {
                <img
                    style={{display: 'none'}}
                    src='/static/navpage/background-night-forest.jpg'
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

export default PageDescription;