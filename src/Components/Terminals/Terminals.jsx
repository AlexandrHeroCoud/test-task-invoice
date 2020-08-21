import React from "react";
import {Container} from "@material-ui/core";
import TerminalReduxForm from "./TerminalForm/TerminalForm";
import TerminalTable from "./TerminalTable/TerminalTable";


const Terminals = () =>{
    const handleSubmit = (data) =>{
        console.log(data)
    }
    return(
        <Container>
            <TerminalReduxForm onSubmit={handleSubmit}/>
            <TerminalTable/>
        </Container>
    )
}
export default Terminals