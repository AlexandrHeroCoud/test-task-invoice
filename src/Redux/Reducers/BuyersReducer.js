import {BuyersAPI, terminalsAPI, userAPI} from "../../API/API";

const SET_ROWS = 'terminals/SET_ROWS'
const SET_HEADERS = 'terminals/SET_HEADERS'
const SET_SEARCH_TEXT = 'terminals/SET_SEARCH_TEXT'
const SET_SEARCH_RESULT = 'terminals/SET_SEARCH_RESULT'
const stateInitDefault = {
    headers:[],
    rows:[],
    resultsSearch:[],
    searchText: null
}
const BuyersReducer = (state = stateInitDefault, action) => {
    switch (action.type) {
        case SET_ROWS:{
            return {...state, rows: action.data}
        }
        case SET_HEADERS:{
            return {...state, headers: action.data}
        }
        case SET_SEARCH_TEXT:{
            return {...state, searchText: action.data}
        }
        case SET_SEARCH_RESULT:{
            return {...state, resultsSearch: (function(searchText, rows){
                if(searchText != ''){
                   return rows.filter(row => row.nameBuyer.includes(searchText))
                } else return []})(state.searchText, state.rows)}
        }
        default:
            return state
    }
}

/**
 * @function setRowsSuccess()
 * @param {Array} data
 * **/
const setRowsSuccess = (data) =>({
    type: SET_ROWS,
    data
})
/**
 * @function setHeadersSuccess()
 * @param {Array} data
 * **/
const setHeadersSuccess = (data) =>({
    type: SET_HEADERS,
    data
})

/**
 * @function setSearchTextSuccess()
 * @param {String} data
 * **/
const setSearchTextSuccess = (data) =>({
    type: SET_SEARCH_TEXT,
    data
})

/**
 * @function setSearchResultSuccess()
 * **/
const setSearchResultSuccess = () =>({
    type: SET_SEARCH_RESULT,
})


/**
 * @function getRows()
 * @description get table data server and set rows and set headers in state
 * **/
export const getRows = () => async (dispatch) =>{
    const response = await BuyersAPI.getRows()
    const rows = response.data.table.rows
    const headers = response.data.table.headers
    if(response.status == 200){
        dispatch(setRowsSuccess(rows))
        dispatch(setHeadersSuccess(headers))
    } else{
        console.log('Server error')
    }
}

/**
 * @function setSearchText()
 * @description set Search
 * **/
export const setSearchText = (data) => (dispatch) =>{
    dispatch(setSearchTextSuccess(data))
    dispatch(setSearchResultSuccess())
}

export default BuyersReducer