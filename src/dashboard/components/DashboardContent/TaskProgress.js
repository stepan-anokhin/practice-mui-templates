import React from "react";
import PropTypes from 'prop-types';
import ProgressReport from "../ProgressReport";
import InsertChartIcon from '@material-ui/icons/InsertChartOutlined';


function TaskProgress(props) {
    return (
        <ProgressReport
            title="Task Progress"
            icon={InsertChartIcon}
            {...props}
        />
    )
}

TaskProgress.propTypes = {
    value: PropTypes.number.required,
    className: PropTypes.string,
};

export default TaskProgress;