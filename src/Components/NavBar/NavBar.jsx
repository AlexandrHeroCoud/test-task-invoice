import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "./navBarStyles";
import NavigationDrawer from "./NavigationDrawer/NavigationDrawer";
import {connect} from "react-redux";
import AuthReducer, {logOut} from "../../Redux/Reducers/AuthReducer";

const NavBar = (props) => {
    const classes = useStyles();
    const anchor = 'left'
    const [open, setOpen] = React.useState({
        [anchor]: false,
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpen({ ...open, [anchor]: open });
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton onClick={toggleDrawer(anchor, true)} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {props.login}
                    </Typography>
                    <Button onClick={props.logOut} color="inherit">Log Out</Button>
                </Toolbar>
            </AppBar>
            <NavigationDrawer avatarUrl={props.avatarUrl} links={props.links} anchor={anchor} toggleDrawer={toggleDrawer} open={open[anchor]}/>
        </div>
    );
}
const mapState = (state) =>({
    links: state.NavBarReducer.pages,
    login: state.AuthReducer.login,
    isAuth: state.AuthReducer.isAuth,
    avatarUrl: state.AuthReducer.avatar
})

export default connect(mapState,{logOut})(NavBar)