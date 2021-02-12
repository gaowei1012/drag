import React from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import Login from '../pages/Login'

const MainRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Login} />
            </Switch>
        </BrowserRouter>
    )
}

export default MainRouter
