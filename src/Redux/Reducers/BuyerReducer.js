import {BuyerIdAPI} from "../../API/API";

const SET_BUYER = 'terminals/SET_BUYER'

const stateInitDefault = {
    buyer:{}

}
const BuyerReducer = (state = stateInitDefault, action) => {
    switch (action.type) {
        case SET_BUYER:{
            return {...state, buyer: action.data}
        }
        default:
            return state
    }
}

/**
 * @function setBuyerSuccess()
 * @param {Object} data
 * **/
const setBuyerSuccess = (data) =>({
    type: SET_BUYER,
    data
})
/**
 * @function getBuyer()
 * @param {Number} id
 * **/
export const getBuyer = (id) => async (dispatch) =>{
    const response = await BuyerIdAPI.getBuyerById(id)
    if(response.status == 200){
        dispatch(setBuyerSuccess(response.data))
    } else {
        console.log('Server Error')
    }
}


export default BuyerReducer