import React from "react";
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import {Button, Card, CardActions, CardContent, CardHeader, Divider} from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";

import {data, options} from './chart';
import {Bar} from "react-chartjs-2";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    chartContainer: {
        height: 400,
        position: 'relative',
    },
    actions: {
        justifyContent: 'flex-end',
    },
}));

function LatestSales(props) {
    const {className, ...rest} = props;
    const classes = useStyles();

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader
                action={
                    <Button size="small" variant="text">
                        Last 7 days <ArrowDropDownIcon/>
                    </Button>
                }
                title="Latest Sales"

            />
            <Divider/>
            <CardContent>
                <div className={classes.chartContainer}>
                    <Bar
                        data={data}
                        options={options}
                    />
                </div>
            </CardContent>
            <Divider/>
            <CardActions className={classes.actions}>
                <Button
                    color="primary"
                    size="small"
                    variant="text"
                >
                    Overview <ArrowRightIcon/>
                </Button>
            </CardActions>
        </Card>
    );
}

LatestSales.propTypes = {
    className: PropTypes.string,
};

export default LatestSales;