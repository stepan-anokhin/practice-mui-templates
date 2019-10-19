import React from "react";
import PropTypes from 'prop-types';
import PeopleIcon from "@material-ui/icons/People";
import MonthDifference from "./MonthDifference";


function TotalUsers(props) {
    return (
        <MonthDifference
            title="Total Users"
            icon={PeopleIcon}
            {...props}
        />
    );
}

TotalUsers.propTypes = {
    value: PropTypes.number.required,
    diffPercent: PropTypes.number.required,
    className: PropTypes.string,
};

export default TotalUsers;