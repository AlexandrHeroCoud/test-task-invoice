import React from "react";
import {Container, Grid} from "@material-ui/core";
import {Field, reduxForm} from "redux-form";
import {renderTextField} from "../../common/FormsControl/FormsControl";
import Button from "@material-ui/core/Button";
import useStyles from "./TerminalFormStyles";



const TerminalForm = (props) => {
    const classes = useStyles();
    const {handleSubmit, pristine, submitting} = props;
    return (
        <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={3} lg={6} xs={12} alignContent={{stretch: 'flex-start'}}>
                        <Grid item lg={5}>
                            <Field name="nameTerminal" id="login"
                                   variant="outlined"
                                   margin="normal"
                                   required
                                   fullWidth
                                   label="Named"
                                   autoComplete="Named"
                                   autoFocus component={renderTextField}/>
                        </Grid>
                        <Grid item lg={5}>
                        <Field name="description" variant="outlined"
                               margin="normal"
                               required
                               fullWidth
                               label="Description"
                               autoComplete="Description" component={renderTextField}/>
                        </Grid>
                        <Grid item lg={2}>
                        <Button
                            disabled={pristine || submitting}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Add
                        </Button>
                        </Grid>
                    </Grid>
                </form>
        </Container>
    )
}


const TerminalReduxForm = reduxForm({
    form: "Terminal",
})(TerminalForm)
export default TerminalReduxForm