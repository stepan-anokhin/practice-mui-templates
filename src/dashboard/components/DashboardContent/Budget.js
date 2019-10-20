import React from "react";
import PropTypes from 'prop-types';
import MoneyIcon from "@material-ui/icons/Money";
import ValueChange from "../ValueChange";


function Budget(props) {
    const {value, diffPercent, ...rest} = props;

    return (
        <ValueChange
            title="budget"
            value={`$${value.toLocaleString()}`}
            icon={MoneyIcon}
            period="month"
            diffPercent={diffPercent}
            success={diffPercent >= 0}
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