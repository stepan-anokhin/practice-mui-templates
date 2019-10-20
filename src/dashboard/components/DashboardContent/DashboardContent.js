import React from "react";
import PropTypes from 'prop-types';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import clsx from "clsx";

import LatestSales from "./LatestSales";
import Budget from "./Budget";
import TotalUsers from "./TotalUsers";
import TaskProgress from "./TaskProgress";
import TotalProfit from "./TotalProfit";
import UsersByDevice from "./UsersByDevice";
import Locations from "./Locations";

const useStyles = makeStyles(theme => ({
    root: {},
}));


function DashboardContent(props) {
    const {className, ...rest} = props;
    const classes = useStyles();

    return (
        <Grid
            className={clsx(classes.root, className)}
            container
            spacing={4}
            {...rest}
        >
            <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
            >
                <Budget value={17000} diffPercent={-12}/>
            </Grid>
            <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
            >
                <TotalUsers value={2300} diffPercent={+3}/>
            </Grid>
            <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
            >
                <TaskProgress value={75.4}/>
            </Grid>
            <Grid
                item
                xl={3}
                lg={3}
                sm={6}
                xs={12}
            >
                <TotalProfit value={53000}/>
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
            >
                <LatestSales/>
            </Grid>
            <Grid
                item
                lg={4}
                md={6}
                xl={3}
                xs={12}
            >
                <UsersByDevice />
            </Grid>
            <Grid
                item
                lg={8}
                md={12}
                xl={9}
                xs={12}
            >
                <Locations/>
            </Grid>
        </Grid>
    );
}

DashboardContent.propTypes = {
    className: PropTypes.string,
};

export default DashboardContent;