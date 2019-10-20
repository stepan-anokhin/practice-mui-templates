import React from "react";
import PropTypes from 'prop-types';
import PeopleIcon from "@material-ui/icons/People";
import ValueChange from "../ValueChange/ValueChange";


function TotalUsers(props) {
    const {diffPercent, ...rest} = props;
    return (
        <ValueChange
            title="Total Users"
            icon={PeopleIcon}
            diffPercent={diffPercent}
            success={diffPercent > 0}
            {...rest}
        />
    );
}

TotalUsers.propTypes = {
    value: PropTypes.number.required,
    diffPercent: PropTypes.number.required,
    className: PropTypes.string,
};

export default TotalUsers;