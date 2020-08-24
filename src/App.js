import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Redirect,Switch} from "react-router-dom";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import NavBar from "./Components/NavBar/NavBar";
import {localStorageAPI} from "./utils/localStorage/localStorage";
import {setUser} from "./Redux/Reducers/AuthReducer";
import Page404 from "./Components/Page404/Page404";
import Terminals from "./Components/Terminals/Terminals";
import Buyers from "./Components/Buyers/Buyers";
import Buyer from "./Components/Buyer/Buyer";

function App(props) {
    const [isAuth, setAuth] = useState(props.isAuth);

    useEffect(() => {
        setAuth(props.isAuth)
        sessionCurrentUser()
    });

    const sessionCurrentUser = (isAuth) =>{
        if(isAuth){
            return
        } else {
            props.setUser(localStorageAPI.getUser())
        }
    }
    return (<>
            {isAuth ? <>
                        <NavBar/>
                        <Switch>
                            <Route exact path="/login">
                                <Redirect to="/buyers" />
                            </Route>
                            <Route exact path="/">
                                <Redirect to="/buyers" />
                            </Route>
                            <Route path="/terminals"render={() => <Terminals />}/>
                            <Route path="/buyers/:id" >
                                <Buyer/>
                            </Route>
                            <Route path="/buyers" render={() => <Buyers />}/>
                            <Route path="*" render={() => <Page404 />}/>
                        </Switch>
                    </>
                    : <>
                        <Route path="/login" render={() => <Login/>}/>
                        <Route path="*" render={() => <Page404 />}/>
                      </>
            }
        </>

    );
}

const mapState = (state) => ({
    isAuth: state.AuthReducer.isAuth
})
export default connect(mapState, {setUser})(App);
