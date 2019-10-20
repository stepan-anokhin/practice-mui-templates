import React from "react";
import PropTypes from 'prop-types';
import {Avatar, Card, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
    },
    content: {
        display: 'flex',
        alignItems: 'center',
    },
    title: {
        fontWeight: 700,
    },
    avatar: {
        backgroundColor: theme.palette.white,
        color: theme.palette.primary.main,
        height: 56,
        width: 56,
    },
    icon: {
        height: 32,
        width: 32,
    },
}));

function ValueReport(props) {
    const {title, value, icon: Icon, className, ...rest} = props;
    const classes = useStyles();

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >

            <CardContent>
                <Grid
                    container
                    justify="space-between"
                >
                    <Grid item>
                        <Typography
                            className={classes.title}
                            color="inherit"
                            gutterBottom
                            variant="body2"
                        >
                            {title.toUpperCase()}
                        </Typography>
                        <Typography
                            color="inherit"
                            variant="h4"
                        >
                            ${value.toLocaleString()}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}/>
                        </Avatar>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

ValueReport.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    icon: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default ValueReport;