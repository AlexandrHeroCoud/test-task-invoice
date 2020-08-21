import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import AuthReducer from "./Reducers/AuthReducer"
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import NavBarReducer from "./Reducers/NavBarReducer";
import TerminalsReducer from "./Reducers/TerminalsReducer";

let reducers = combineReducers({
    AuthReducer: AuthReducer,
    NavBarReducer: NavBarReducer,
    TerminalsReducer:TerminalsReducer,
    form: formReducer,
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//let store = createStore(reducers, applyMiddleware(thunkMiddleware));
//window.store = store
export default store;