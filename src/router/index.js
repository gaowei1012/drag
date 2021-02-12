import React from 'react'
import {Switch, Route, HashRouter as Router} from 'react-router-dom'
import Login from '../pages/Login'
import App from '../pages/App'

import {createBrowserHistory} from 'history'

const history = createBrowserHistory()

const MainRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/home' component={App} />
            </Switch>
        </Router>
    )
}

export default MainRouter
