import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {useTheme} from "@material-ui/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Divider from "@material-ui/core/Divider";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import RefreshIcon from "@material-ui/icons/Refresh";
import {Doughnut} from "react-chartjs-2";

import {data, devices, options} from "./chart";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        height: '100%',
    },
    chartContainer: {
        position: 'relative',
        height: '300px',
    },
    stats: {
        marginTop: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
    },
    device: {
        textAlign: 'center',
        padding: theme.spacing(1),
    },
    deviceIcon: {
        color: theme.palette.icon,
    },

}));


function UsersByDevice(props) {
    const {className, ...rest} = props;
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader
                action={
                    <IconButton size="small">
                        <RefreshIcon/>
                    </IconButton>
                }
                title="Users By Device"
            />
            <Divider/>
            <CardContent>
                <div className={classes.chartContainer}>
                    <Doughnut
                        data={data(theme)}
                        options={options(theme)}
                    />
                </div>
                <div className={classes.stats}>
                    {devices(theme).map(device => (
                        <div className={classes.device} key={device.title}>
                            <span className={classes.deviceIcon}>{device.icon}</span>
                            <Typography variant="body1">{device.title}</Typography>
                            <Typography variant="h5" style={{color: device.color}}>
                                {device.value}%
                            </Typography>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}

UsersByDevice.propTypes = {
    className: PropTypes.string,
};


export default UsersByDevice;