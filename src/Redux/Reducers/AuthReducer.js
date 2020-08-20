import {userAPI} from "../../API/API";
import {localStorageAPI} from "../../utils/localStorage/localStorage";

const SET_AUTH_USER = "auth/SET_AUTH_USER"
const SET_AUTH_ERROR = "auth/SET_AUTH_ERROR"

const stateInitDefault = {
    login:null,
    avatar: null,
    isAuth: false,
    error: false,
    errorText: null
}
const AuthReducer = (state = stateInitDefault, action) => {
    switch (action.type) {
        case  SET_AUTH_USER:
            return {...state, login: action.login, avatar: action.avatar, isAuth: action.isAuth}
        case SET_AUTH_ERROR:
            return {state}
        default:
            return state
    }
}

/**
 * @function setUserData()
 * @param {Object} userData
 * @param {Boolean} isAuth
 * @return {Object}
 * **/
const setUserData = (userData, isAuth) => ({
    type: SET_AUTH_USER,
    login: userData.login,
    avatar: userData.avatar_url,
    isAuth: userData.isAuth
})

/**
 * @function setError()
 * @param {String} errorText
 * @param {Boolean} error
 * @return {Object}
 * **/
const setError = (errorText, error) =>({
    type: SET_AUTH_USER,
    errorText,
    error: error
})

/**
 * @function logIn()
 * @param {Object} data
 * **/
export const logIn = (data) =>async (dispatch) => {
    const response = await userAPI.getUser(data.login)
    if(response.status === 200 && response.data){
        const userData = {
            login: response.data.login,
            avatar_url: response.data.avatar_url,
            isAuth: true
        }
        dispatch(setUserData(userData))
        localStorageAPI.setUser(userData)
    } else {
        dispatch(setError(response.message, true))
    }
}

/**
 * @function setUser()
 * @param {Object} data
 * **/
export const setUser = (data) => (dispatch) => {
    const userData = {
        login: data.login,
        avatar_url: data.avatar,
        isAuth: data.isAuth
    }
    dispatch(setUserData(userData))
}
export default AuthReducer