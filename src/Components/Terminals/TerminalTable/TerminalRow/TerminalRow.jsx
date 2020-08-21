import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";

const TerminalRow = (props) =>{
    return(
        <TableRow key={props.id}>
            <TableCell component="th" scope="row">{props.nameTerminal}</TableCell>
            <TableCell align="left">{props.description}</TableCell>
            <TableCell align="center">
                <Button onClick={()=>{props.handleDelete(props.id)}} color="secondary" variant="contained">Delete</Button>
            </TableCell>
        </TableRow>
    )
}
export default TerminalRow