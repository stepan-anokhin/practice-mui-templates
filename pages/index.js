import React from 'react';
import {CardContent, CssBaseline, Hidden, makeStyles, Typography} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import LandingToolbar from "../src/landing/LandingToolbar";
import LandingDescription from "../src/landing/LandingDescription";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
}));

const templates = [
    {
        title: 'Basic Dashboard',
        image: '/static/landing/preview/sm-basic-dashboard.png',
        description:
            'Basic Material-UI dashboard with adaptive sidebar display.',
    },
    {
        title: 'Basic Sign-Up Page',
        image: '/static/landing/preview/sm-basic-sign-up.png',
        description:
            'Basic sign-up page from material-ui examples.',
    },
    {
        title: 'Paperbase',
        image: '/static/landing/preview/sm-paperbase.png',
        description:
            'Material-UI team\'s free premium theme.',
    },
    {
        title: 'Onepirate',
        image: '/static/landing/preview/sm-onepirate.png',
        description:
            'Another Material-UI team\'s free premium theme.',
    },
    {
        title: 'Devias Kit',
        image: '/static/landing/preview/sm-devias.png',
        description:
            'Independent free (MIT) MUI-based dashboard template.',
    },
];


function Index() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline/>
            <Container maxWidth="lg">
                <LandingToolbar/>
                <main>
                    <LandingDescription/>
                    <Grid container spacing={4}>
                        {templates.map(template => (
                            <Grid item key={template.title} xs={12} md={6}>
                                <CardActionArea component="a" href="">
                                    <Card className={classes.card}>
                                        <div className={classes.cardDetails}>
                                            <CardContent>
                                                <Typography component="h2" variant="h5">
                                                    {template.title}
                                                </Typography>
                                                <Typography variant="subtitle1" paragraph>
                                                    {template.description}
                                                </Typography>
                                            </CardContent>
                                        </div>
                                        <Hidden xsDown>
                                            <CardMedia
                                                className={classes.cardMedia}
                                                image={template.image}
                                                title={template.title}
                                            />
                                        </Hidden>
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </main>
            </Container>
        </React.Fragment>
    );
}

export default Index;