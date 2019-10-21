import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Avatar, Checkbox, FormControlLabel, Grid, TextField, Typography} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: theme.spacing(5),
    },
    form: {
        width: '100%',
        margin: theme.spacing(4),
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
    },
    icon: {},
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignUp() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Avatar className={classes.avatar}>
                <LockIcon/>
            </Avatar>
            <Typography variant="h5" component="h1">
                Sign Up
            </Typography>
            <form className={classes.form}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            variant="outlined"
                            id="firstName"
                            name="firstName"
                            required
                            label="First Name"
                            autoComplete="first-name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <TextField
                            variant="outlined"
                            id="lastName"
                            name="lastName"
                            required
                            label="Last Name"
                            autoComplete="last-name"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="email"
                            name="email"
                            required
                            label="Email Address"
                            autoComplete="email"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="password"
                            name="password"
                            required
                            label="Password"
                            autoComplete="password"
                            type="password"
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            id="repeatPassword"
                            name="repeatPassword"
                            required
                            label="Repeat Password"
                            autoComplete="repeat-password"
                            type="password"
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <FormControlLabel
                    control={<Checkbox value="spam" color="primary"/>}
                    label="Receive spam"
                />
                <Button
                    className={classes.submit}
                    variant="contained"
                    type="submit"
                    color="primary"
                    fullWidth
                >
                    Sign Up
                </Button>
            </form>
        </div>
    );
}

export default SignUp;