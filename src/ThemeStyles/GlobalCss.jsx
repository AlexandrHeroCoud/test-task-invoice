import {withStyles} from "@material-ui/core";

export const GlobalCss = withStyles({
    '@global': {
        '.MuiButton-root': {
            fontSize: '1rem',
        },
        '.MuiTypography-h1':{
            fontSize:'3rem',
            color:'#0277bd'
        },
        '.MuiTooltip-tooltip':{
            padding: '5px',
            fontSize: '0.8rem'
        }
    },
})(() => null);