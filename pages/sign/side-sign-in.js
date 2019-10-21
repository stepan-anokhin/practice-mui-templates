import React from "react";
import theme from "../../src/dashboard/theme";
import nextJsPage from "../../src/components/nextJsPage";
import SignIn from "../../src/components/SignIn";
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
        overflow: 'auto',
    },
    grid: {
        height: '100%',
    },
    formContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        padding: theme.spacing(2),
    },
    image: {
        backgroundImage: 'url(/static/sign/sign-background-foggy-forest.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
}));

function Page() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container className={classes.grid}>
                <Grid item lg={8} md={6} sm={4} xs={0} className={classes.image}/>
                <Grid item lg={4} md={6} sm={8} xs={12}>
                    <div className={classes.formContainer}>
                        <SignIn/>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default nextJsPage(Page, theme);