import React, {useEffect, useState} from "react";
import {Container} from "@material-ui/core";
import TerminalReduxForm from "./TerminalForm/TerminalForm";
import TerminalTable from "./TerminalTable/TerminalTable";
import {connect} from "react-redux";
import {addRow, getRows} from "../../Redux/Reducers/TerminalsReducer";

const Terminals = (props) =>{
    useEffect(()=>{
        props.getRows()
    },[])
    const submitTerminalForm = (data) =>{
        props.addRow(data)
    }
    return(
        <Container>
            <TerminalReduxForm onSubmit={submitTerminalForm}/>
            <TerminalTable />
        </Container>
    )
}
const mapState = (state) =>({
    state
})
export default connect(mapState,{getRows, addRow})(Terminals)
