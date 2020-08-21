import {terminalsAPI, userAPI} from "../../API/API";

const ADD_ROW = 'terminals/ADD_ROW'
const SET_ROWS = 'terminals/SET_ROWS'
const DELETE_ROW = 'terminals/DELETE_ROW'

const stateInitDefault = {
    rows:[{}]
}
const TerminalsReducer = (state = stateInitDefault, action) => {
    switch (action.type) {
        case ADD_ROW: {
            return {...state, rows: [...state.rows, action.data]}
        }
        case SET_ROWS:{
            return {...state, rows: action.data}
        }
        case DELETE_ROW:{
            return {...state, rows: state.rows.filter(row => row.id !== action.id)}
        }
        default:
            return state
    }
}

/**
 * @function addRowSuccess()
 * @param {Object} data
 * **/
const addRowSuccess = (data) =>({
    type: ADD_ROW,
    data
})

/**
 * @function setRowsSuccess()
 * @param {Array} data
 * **/
const setRowsSuccess = (data) =>({
    type: SET_ROWS,
    data
})

/**
 * @function setRow()
 * @param {Array} data
 * **/
export const addRow = (data) => async (dispatch)=>{
    const response = await terminalsAPI.addRow(data)
    if(response.status == 201){
        dispatch(addRowSuccess(response.data))
    } else {
        console.log('Server error')
    }
}

/**
 * @function deleteRowSuccess()
 * @param {Number} id
 * **/
const deleteRowSuccess = (id) =>({
    type: DELETE_ROW,
    id
})

/**
 * @function deleteRow()
 * @param {Number} id
 * **/
export const deleteRow = (id) => async (dispatch)=>{
    const response = await terminalsAPI.deleteRow(id)
    if(response.status == 200){
        dispatch(deleteRowSuccess(id))
    } else{
        console.log('Server error')
    }
}

/**
 * @function getRows()
 * @description get rows server and set rows in state
 * **/
export const getRows = () => async (dispatch) =>{
    const response = await terminalsAPI.getRows()
    const rows = response.data
    if(response.status == 200){
        dispatch(setRowsSuccess(rows))
    } else{
        console.log('Server error')
    }
}

export default TerminalsReducer