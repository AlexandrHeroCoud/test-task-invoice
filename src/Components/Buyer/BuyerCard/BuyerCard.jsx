import React from "react";
import {Grid} from "@material-ui/core";
import {connect} from "react-redux";
import {useStyles} from "./ByuerCardStyles";
import Box from "@material-ui/core/Box";


const BuyerCard = (props) => {
    const classes = useStyles();
    return (
        <Grid className={classes.root} container justify="space-around"
              alignItems="center">
            <Grid item xs={9}>
                <Box boxShadow={3} padding={'25px'}>
                    <Grid container justify="space-around"
                          alignItems="center" spacing={2}>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid className={classes.paper} item>ID:</Grid>
                                <Grid item>{props.buyer.id}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid  container spacing={2}>
                                <Grid className={classes.paper} item>Name Buyer:</Grid>
                                <Grid item>{props.buyer.nameBuyer}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid className={classes.paper} item>Count Bue:</Grid>
                                <Grid item>{props.buyer.countBue}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>

                                <Grid className={classes.paper} item>Average Check:</Grid>
                                <Grid item>{props.buyer.averCheck}</Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2}>
                                <Grid className={classes.paper} item>Total Take:</Grid>
                                <Grid item>{props.buyer.totalTake}</Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
        </Grid>
    )
}
const mapState = (state) => ({
    buyer: state.BuyerReducer.buyer
})
export default connect(mapState, {})(BuyerCard)