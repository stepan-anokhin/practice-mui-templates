import React, {useEffect, useState} from "react";
import PropTypes from 'prop-types';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {Card, CardHeader, Divider} from "@material-ui/core";
import clsx from "clsx";
import CardContent from "@material-ui/core/CardContent";
import dynamic from "next/dynamic";

const DynamicLeafletMap = dynamic(() => import("./LeafletMap"), {ssr: false});

const useStyles = makeStyles(theme => ({
    root: {},
    mapContainer: {
        height: 400,
        position: 'relative',
    },
    map: {
        height: 400,
    }
}));

function Locations(props) {
    const {className, ...rest} = props;
    const classes = useStyles();
    const [clientSide, setClientSide] = useState(false);

    useEffect(() => {
        setClientSide(true);
    });

    return (
        <Card
            className={clsx(classes.root, className)}
            {...rest}
        >
            <CardHeader
                title="Locations"
            />
            <Divider/>
            <CardContent>
                <div className={classes.mapContainer}>
                    <DynamicLeafletMap className={classes.map}/>
                </div>
            </CardContent>
        </Card>
    );
}

Locations.propTypes = {
    className: PropTypes.string,
};

export default Locations;