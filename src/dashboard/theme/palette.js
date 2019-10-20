import {colors} from "@material-ui/core";

const white = '#FFFFFF';

const palette = {
    white,
    success: {
        contrastText: white,
        dark: colors.green[900],
        main: colors.green[600],
        light: colors.green[400]
    },
    warning: {
        contrastText: white,
        dark: colors.orange[900],
        main: colors.orange[600],
        light: colors.orange[400]
    },
};

export default palette;