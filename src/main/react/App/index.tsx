import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Controller, ControllerContext, IController } from '../_core/Controller'
import { Login } from './Login'
import { Dashboard } from './Dashboard'


export const Routes = {
    Login: '/login',
    Dashboard: '/',
}
const App = () => {
    const [controller, setController] = useState<IController>()

    useEffect(() => {
        console.log('controller initialed')
        Controller.create().then(_controller => {
            console.log('controller created')
            setController(_controller)
        })
    }, [])

    if (!controller) {
        return null
    }
    return (
        <ControllerContext.Provider value={controller}>
            <Router ref={(router: any) => controller?.setHistoryEntry(router.history)}>
                <Switch>
                    <Route path={Routes.Login} exact>
                        <Login />
                    </Route>
                    <Route path={Routes.Dashboard} exact>
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        </ControllerContext.Provider>)
}
export default App
