import React from "react";
import PropTypes from 'prop-types';
import MoneyIcon from "@material-ui/icons/Money";
import MonthDifference from "./MonthDifference";


function Budget(props) {
    const {value, ...rest} = props;

    return (
        <MonthDifference
            title="budget"
            value={`$${value.toLocaleString()}`}
            icon={MoneyIcon}
            {...rest}
        />
    );
}

Budget.propTypes = {
    value: PropTypes.number.required,
    diffPercent: PropTypes.number.required,
    className: PropTypes.string,
};

export default Budget;