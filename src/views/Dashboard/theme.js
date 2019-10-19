import {colors, createMuiTheme} from "@material-ui/core";

const white = '#FFFFFF';

const theme = createMuiTheme({
    palette: {
        success: {
            contrastText: white,
            dark: colors.green[900],
            main: colors.green[600],
            light: colors.green[400]
        },
    },
});

export default theme;