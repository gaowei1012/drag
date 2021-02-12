import React from 'react'
import {Switch, Route, HashRouter as Router} from 'react-router-dom'
import DefaultLayout from '../pages/DefaultLayout/DefaultLayout'
import Login from '../pages/Login/Login'
import { history } from "../utils/history"

function MainRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route path='/home' component={DefaultLayout} />
            </Switch>
        </Router>
    )
}

export default MainRouter
