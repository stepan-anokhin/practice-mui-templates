import React from 'react';
import {makeStyles, Toolbar, Typography} from "@material-ui/core";

const useIndexStyles = makeStyles(theme => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
}));


function PageToolbar() {
    const classes = useIndexStyles();
    return (
        <Toolbar className={classes.toolbar}>
            <Typography component="h2" variant="h5" color="inherit" noWrap>
                Material-UI Templates
            </Typography>
        </Toolbar>
    );
}

export default PageToolbar;