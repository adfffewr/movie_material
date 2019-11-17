import React from 'react';
import { HashRouter as Router , Route , Redirect , Switch } from 'react-router-dom';
import Home from '../Routes/Home'
import Search from '../Routes/Search'
import Header from './Header'

export default () => (
    <Router>
        <>
            <Header></Header>
            <Switch>
                <Route path='/' exact component={Home}></Route>
                <Route path='/search' component={Search}></Route>
                <Redirect from='*' to='/'></Redirect>
            </Switch>
        </>
    </Router>
)