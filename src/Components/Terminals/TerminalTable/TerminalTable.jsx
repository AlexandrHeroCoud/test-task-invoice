import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import useStyles from "./TerminalTableStyles";
import {Container} from "@material-ui/core";


function createData(name, description) {
    return { name, description };
}

const rows = [
    createData('Frozen yoghurt', 159, ),
    createData('Ice cream sandwich', 237, ),
    createData('Eclair', 262, ),
    createData('Cupcake', 305, ),
    createData('Gingerbread', 356, ),
];

export default function TerminalTable() {
    const classes = useStyles();

    return (
        <Container>
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="left">Description</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="left">{row.description}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        </Container>
    );
}
