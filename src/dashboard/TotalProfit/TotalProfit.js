import React from "react";
import PropTypes from 'prop-types';
import ValueReport from "../ValueReport";
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

function TotalProfit(props) {
    return (
        <ValueReport
            title="Total Profit"
            icon={AttachMoneyIcon}
            {...props}
        />
    );
}

TotalProfit.propTypes = {
    value: PropTypes.number.isRequired,
    className: PropTypes.string,
};

export default TotalProfit;