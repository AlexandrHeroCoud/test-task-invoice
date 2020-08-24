import React, {useEffect} from "react";
import {Container} from "@material-ui/core";
import BuyersTable from "./BuyersTable/BuyersTable";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import {getRows} from "../../Redux/Reducers/BuyersReducer";

const Buyers = (props) => {
    useEffect(()=>{
        props.getRows()
    },[])
    return (
        <Container>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant={"h1"}>Buyers</Typography>
                </Grid>
                <Grid item>
                    <BuyersTable/>
                </Grid>
            </Grid>
        </Container>
    )
}

const mapState = (state) =>({})
export default connect(mapState,{getRows})(Buyers)
