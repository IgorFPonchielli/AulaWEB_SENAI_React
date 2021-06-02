import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';
import HelloMessage from './HelloMessage';
import Teste from './paginas/Teste';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={HelloMessage}/>
                <Route path="/teste" component={Teste}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;