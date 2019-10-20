import React from "react";
import PropTypes from 'prop-types';
import clsx from "clsx";
import {Avatar, Card, CardContent, Grid, LinearProgress, makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    title: {
        fontWeight: 700,
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.contrastText,
        height: 56,
        width: 56,
    },
    icon: {
        height: 32,
        width: 32,
    },
    progress: {
        marginTop: theme.spacing(3),
    },
}));

function ProgressReport(props) {
    const {className, title, value, icon: Icon, ...rest} = props;
    const classes = useStyles();

    return (
        <Card className={clsx(classes.root, className)} {...rest}>
            <CardContent>
                <Grid
                    container
                    justify="space-between"
                >
                    <Grid item>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            {title.toUpperCase()}
                        </Typography>
                        <Typography variant="h4">
                            {value.toFixed(1)}%
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={classes.avatar}>
                            <Icon className={classes.icon}/>
                        </Avatar>
                    </Grid>
                </Grid>
                <LinearProgress
                    className={classes.progress}
                    value={value}
                    variant="determinate"
                />
            </CardContent>
        </Card>
    );
}

ProgressReport.propTypes = {
    title: PropTypes.string.required,
    value: PropTypes.number.required,
    icon: PropTypes.object.required,
    className: PropTypes.string,
};


export default ProgressReport;