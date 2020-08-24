import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const BuyersTableRow = (props) =>{
    return(
        <TableRow>
            <TableCell component="th" scope="row">Test</TableCell>
            <TableCell align="left">test</TableCell>
            <TableCell align="center">
                Test
            </TableCell>
        </TableRow>
    )
}
export default BuyersTableRow