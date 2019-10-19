import React from "react";
import PropTypes from 'prop-types';
import {Card, CardContent, makeStyles, Typography} from "@material-ui/core";
import clsx from "clsx";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import ArrowDownIcon from "@material-ui/icons/ArrowDownward";
import ArrowUpIcon from "@material-ui/icons/ArrowUpward";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    title: {
        display: 'flex',
        alignItems: 'center',
    },
    avatarDown: {
        backgroundColor: theme.palette.error.main,
        height: 56,
        width: 56,
    },
    avatarUp: {
        backgroundColor: theme.palette.success.main,
        height: 56,
        width: 56,
    },
    icon: {
        height: 32,
        width: 32,
    },
    difference: {
        marginTop: theme.spacing(2),
        display: 'flex',
        alignItems: 'center',
    },
    diffIconDown: {
        color: theme.palette.error.dark,
    },
    diffValueDown: {
        color: theme.palette.error.dark,
        marginRight: theme.spacing(1),
    },
    diffIconUp: {
        color: theme.palette.success.dark,
    },
    diffValueUp: {
        color: theme.palette.success.dark,
        marginRight: theme.spacing(1),
    },
}));


function ValueChange(props) {
    const classes = useStyles();
    const {
        className,
        title, value,
        diffPercent,
        icon: Icon,
        period = 'month',
        success,
        ...rest
    } = props;


    const ArrowIcon = success ? ArrowUpIcon : ArrowDownIcon;

    return (
        <Card
            {...rest}
            className={clsx(classes.root, className)}
        >
            <CardContent>
                <Grid container justify="space-between">
                    <Grid item>
                        <Typography
                            className={classes.title}
                            color="textSecondary"
                            gutterBottom
                            variant="body2"
                        >
                            {title.toUpperCase()}
                        </Typography>
                        <Typography variant="h4">{value}</Typography>
                    </Grid>
                    <Grid item>
                        <Avatar className={success ? classes.avatarUp : classes.avatarDown}>
                            <Icon className={classes.icon}/>
                        </Avatar>
                    </Grid>
                </Grid>
                <div className={classes.difference}>
                    <ArrowIcon className={success ? classes.diffIconUp : classes.diffIconDown}/>
                    <Typography
                        className={success ? classes.diffValueUp : classes.diffValueDown}
                        variant="body2"
                    >
                        {Math.abs(diffPercent)}%
                    </Typography>
                    <Typography variant="caption">
                        Since last month
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
}

ValueChange.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.required,
    value: PropTypes.string.required,
    diffPercent: PropTypes.number.required,
    period: PropTypes.oneOf(['day', 'week', 'month', 'year']),
    success: PropTypes.bool.isRequired,
    icon: PropTypes.elementType.required,
};

export default ValueChange;