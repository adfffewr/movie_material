import React from 'react';
import { HashRouter as Router , Route , Redirect , Switch } from 'react-router-dom';
import Movie from '../Routes/Movie';
import MoviePopular from '../Routes/MoviePopular';
import Detail from '../Routes/Detail';
import Search from '../Routes/Search';
import Header from './Header';

export default () => (
    <Router>
        <>
            <Header></Header>
            <Switch>
                <Route path='/' exact component={Movie}></Route>
                <Route path='/movie_popular' exact component={MoviePopular}></Route>
                <Route path='/movie/:id' component={Detail} ></Route>
                <Route path='/search' component={Search}></Route>
                <Redirect from='*' to='/'></Redirect>
            </Switch>
        </>
    </Router>
)