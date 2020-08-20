import React, {useEffect, useState} from 'react';
import './App.css';
import {Route, Redirect} from "react-router-dom";
import Login from "./Components/Login/Login";
import {connect} from "react-redux";
import NavBar from "./Components/NavBar/NavBar";
import {Container} from "@material-ui/core";
import {localStorageAPI} from "./utils/localStorage/localStorage";
import {setUser} from "./Redux/Reducers/AuthReducer";

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
    return (<Container>
            {isAuth ? <>
                    <NavBar/>
                    <Route exact path="/login">
                        <Redirect to="/terminals" />
                    </Route>

                    <Route path="/terminals"/>
                    <Route path="/buyers"/>
                    <Route path="/buyers/:id?"/>
                </>
                : <Route path="/login" render={() => <Login/>}/>
            }
        </Container>

    );
}

const mapState = (state) => ({
    isAuth: state.AuthReducer.isAuth
})
export default connect(mapState, {setUser})(App);
