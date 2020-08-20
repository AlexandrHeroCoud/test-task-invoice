import {withStyles} from "@material-ui/core";

export const GlobalCss = withStyles({
    // @global is handled by jss-plugin-global.
    '@global': {
        // You should target [class*="MuiButton-root"] instead if you nest themes.
        '.MuiButton-root': {
            fontSize: '1rem',
            marginTop:'40px',
        },
        '.MuiPaper-root':{

        },
    },
})(() => null);