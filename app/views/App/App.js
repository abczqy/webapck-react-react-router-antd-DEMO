import React from 'react';
import './App.less';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from '@components/Header/Header';
import Songs from "@views/Songs/Songs";
import Hcy from "@views/Hcy/Hcy";

class App extends React.Component{

    render() {
        return (
            <Router>
                <Switch>
                    <Redirect from='/' exact to='/index' />
                    <Route path='/index' component={Header} />
                    <Route path='/songs/:name' component={Songs} />
                    <Route path='/hcy' component={Hcy} />
                </Switch>
            </Router>
        )
    }
}

export default App;
