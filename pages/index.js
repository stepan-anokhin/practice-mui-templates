import React from 'react';
import {CssBaseline, makeStyles, Toolbar, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Markdown from "../src/components/Markdown";
import description from "../src/landing/description.md";

const useIndexStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    header: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(/static/landing/landing-background-foggy-forest.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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


function Index() {
    const classes = useIndexStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <Toolbar className={classes.toolbar}>
                    <Typography component="h2" variant="h5" color="inherit" noWrap>
                        Material-UI Templates
                    </Typography>
                </Toolbar>
                <main>
                    {/*  Just a beautiful page header  */}
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
                </main>
            </Container>
        </React.Fragment>
    );
}

export default Index;