import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./LoginStyles";
import LoginReduxForm from "./Form/FormLogin";
import {connect} from "react-redux";
import {logIn} from "../../Redux/Reducers/AuthReducer";

const Login = (props) => {
    const classes = useStyles();

    const handleSubmit = (data) =>{
        props.logIn(data)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <LoginReduxForm onSubmit={handleSubmit}/>
            </div>
        </Container>
    );
}

const mapState = (state)=>({
  ...state
})

export default connect(mapState,{logIn})(Login)