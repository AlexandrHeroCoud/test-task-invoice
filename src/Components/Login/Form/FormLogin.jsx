import React from "react";
import {renderTextField} from "../../common/FormsControl/FormsControl";
import {Field,reduxForm} from "redux-form";
import Button from "@material-ui/core/Button";
import useStyles from "../LoginStyles";
import {validate} from "../../../utils/validate/validate";


const FormLogin = (props) =>{
    const classes = useStyles();
    const { handleSubmit, pristine, submitting } = props;
    return(
        <form onSubmit={handleSubmit}>
            <Field name="login" id="login"
                   variant="outlined"
                   margin="normal"
                   required
                   fullWidth
                   label="Login"
                   autoComplete="login"
                   autoFocus component={renderTextField}/>
            <Field name="password" variant="outlined"
                   margin="normal"
                   required
                   fullWidth
                   label="Password"
                   type="password"
                   id="password"
                   autoComplete="current-password" component={renderTextField}/>
            <Button
                disabled={pristine || submitting}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                Sign In
            </Button>
        </form>
    )
}
const LoginReduxForm = reduxForm({
    form: "Login",
    validate,
})(FormLogin)
export default LoginReduxForm