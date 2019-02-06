import React from 'react'
import { Route, Switch } from 'react-router'

import ModalPortfolio from '../components/ModalPortfolio'

export default props =>
    <Switch>
        <Route exact path="/portfolio/:item" render={(props) => <ModalPortfolio data={props} />} />
    </Switch>