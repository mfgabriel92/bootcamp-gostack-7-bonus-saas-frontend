import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Main from '../pages/Main'
import SignIn from '../pages/SignIn'
import SignUp from '../pages/SignUp'

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/" component={Main} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
