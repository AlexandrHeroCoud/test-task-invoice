import {createMuiTheme} from "@material-ui/core";
export const globalThemeSettings = createMuiTheme({
    overrides: {
        MuiCssBaseline: {
            '@global': {
                html: {
                    WebkitFontSmoothing: 'auto',
                },
            },
        },
    },
});