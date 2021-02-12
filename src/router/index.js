import React from 'react'
import {Switch, Route, Router} from 'react-router-dom'
import DefaultLayout from '../pages/DefaultLayout'
import Login from '../pages/Login'
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
