import React from 'react';
import Table from '@material-ui/core/Table';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import TablePaginationActions from "../../common/TablePagination/TablePagination"
import {useStyles} from "./BuyersTableStyles";
import BuyersTableToolbar from "./BuyersTableToolbar/BuyersTableToolbar";
import BuyersTableHead from "./BuyersTableHead/BuyersTableHead";
import BuyersTableBody from "./BuyersTableBody/BuyersTableBody";
import {connect} from "react-redux";
import {setSearchText} from "../../../Redux/Reducers/BuyersReducer";


const BuyersTable = (props) => {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('id');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.rows.length - page * rowsPerPage);
    const descendingComparator =(a, b, orderBy) =>{
        if (b[orderBy] < a[orderBy]) {
            return -1;
        }
        if (b[orderBy] > a[orderBy]) {
            return 1;
        }
        return 0;
    }

    const getComparator =(order, orderBy)=> {
        return order === 'desc'
            ? (a, b) => descendingComparator(a, b, orderBy)
            : (a, b) => -descendingComparator(a, b, orderBy);
    }

    const stableSort=(array, comparator) => {
        const stabilizedThis = array.map((el, index) => [el, index]);
        stabilizedThis.sort((a, b) => {
            const order = comparator(a[0], b[0]);
            if (order !== 0) return order;
            return a[1] - b[1];
        });
        return stabilizedThis.map((el) => el[0]);
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <BuyersTableToolbar searchResultLength={props.resultsSearch.length} searchText={props.searchText} setSearchText={props.setSearchText} />
                <TableContainer>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <BuyersTableHead
                            classes={classes}
                            order={order}
                            orderBy={orderBy}
                            onRequestSort={handleRequestSort}
                            rowCount={props.rows.length}
                            headCells={props.headers}
                        />
                        <BuyersTableBody
                            stableSort={stableSort}
                            page={page}
                            getComparator={getComparator}
                            order={order}
                            orderBy={orderBy}
                            emptyRows={emptyRows}
                            rows={props.resultsSearch.length != 0
                                ? props.resultsSearch
                                : props.rows}
                            rowsPerPage={rowsPerPage}
                        />

                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    colSpan={3}
                    count={props.rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows per page' },
                        native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </Paper>
        </div>
    );
}
const mapState =(state)=>({
    rows: state.BuyersReducer.rows,
    headers: state.BuyersReducer.headers,
    searchText: state.BuyersReducer.searchText,
    resultsSearch: state.BuyersReducer.resultsSearch
})
export default connect(mapState,{setSearchText})(BuyersTable)
