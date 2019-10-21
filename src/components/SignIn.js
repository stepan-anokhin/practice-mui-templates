import React from "react";
import {makeStyles} from "@material-ui/styles";
import LockIcon from "@material-ui/icons/Lock";
import {Avatar, Button, Checkbox, FormControlLabel, TextField, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(5),
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        height: 36,
        width: 36,
    },
    icon: {
        height: 20,
        width: 20,
    },
    form: {
        width: '100%',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function SignIn() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Avatar className={classes.avatar}>
                <LockIcon className={classes.icon}/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign In
            </Typography>
            <form className={classes.form}>
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="password"
                    label="Password"
                    name="password"
                    autoComplete="current-password"
                    type="password"
                />
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary"/>}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                    Sign In
                </Button>
            </form>
        </div>
    );
}


export default SignIn;