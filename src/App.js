import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Redirect} from "react-router-dom";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import NavBar from "./Components/NavBar/NavBar";
import {Container} from "@material-ui/core";
import {localStorageAPI} from "./utils/localStorage/localStorage";
import {setUser} from "./Redux/Reducers/AuthReducer";
import Page404 from "./Components/Page404/Page404";
import Terminals from "./Components/Terminals/Terminals";

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
                        <Route exact path="/login">
                            <Redirect to="/terminals" />
                        </Route>
                        <Route path="/terminals"render={() => <Terminals />}/>
                        <Route path="/buyers"/>
                        <Route path="/buyers/:id?" render={() => <Page404 />}/>
                        <Route path="*" render={() => <Page404 />}/>
                    </>
                    : <>
                    <Route exact path="/">
                        <Redirect to="/login" />
                    </Route>
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
