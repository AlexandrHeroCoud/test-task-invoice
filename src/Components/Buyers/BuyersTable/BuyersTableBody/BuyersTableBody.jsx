import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import {Link, NavLink} from "react-router-dom";
import Tooltip from "@material-ui/core/Tooltip";

const BuyersTableBody = (props) =>{
    return(
        <TableBody>
            {props.stableSort(props.rows, props.getComparator(props.order, props.orderBy))
                .slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage)
                .map((row) => {
                    return (
                        <TableRow
                            hover
                            role="checkbox"
                            tabIndex={-1}
                            key={row.id}
                        >
                            <TableCell>{row.id}</TableCell>
                            <TableCell>
                                <Tooltip title={"Please click by name buyer for move page buyer"}
                                         placement={'right'}>
                                    <Link to={`/buyers/${row.id}`}>
                                        {row.nameBuyer}
                                    </Link>
                                </Tooltip>
                            </TableCell>
                            <TableCell>{row.averCheck}</TableCell>
                            <TableCell>{row.countBue}</TableCell>
                            <TableCell>{row.totalTake}</TableCell>
                        </TableRow>
                    );
                })}
        </TableBody>
    )
}


export default BuyersTableBody