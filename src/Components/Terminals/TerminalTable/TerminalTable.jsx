import React, {useEffect, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from "./TerminalTableStyles";
import {Container} from "@material-ui/core";
import TerminalRow from "./TerminalRow/TerminalRow";
import {connect} from "react-redux";
import {deleteRow} from "../../../Redux/Reducers/TerminalsReducer";


const TerminalTable=(props)=> {
    const classes = useStyles();
    const [rows,setRows] = useState(props.rows)

    useEffect(()=>{
        setRows(props.rows)
    })
    const handleDelete = (id) =>{
        props.deleteRow(id)
    }
    return (
        <Container>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                        <TableCell align="center">Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TerminalRow key={row.id} id={row.id} nameTerminal={row.nameTerminal} description={row.description} handleDelete={handleDelete}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    );
}
const mapState = (state)=>({
    rows: state.TerminalsReducer.rows
})
export default connect(mapState, {deleteRow})(TerminalTable)
