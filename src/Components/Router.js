import React from 'react';
import { HashRouter as Router , Route , Redirect , Switch } from 'react-router-dom';
import Movie from '../Routes/Movie';
import MoviePopular from '../Routes/MoviePopular';
import MovieUpcoming from '../Routes/MovieUpcoming';
import TvNow from '../Routes/TvNow';
import Detail from '../Routes/Detail';
import Search from '../Routes/Search';
import Header from './Header';

export default () => (
    <Router>
        <>
            <Header></Header>
            <Switch>
                <Route path='/' exact component={Movie}></Route>
                <Route path='/movie_popular' component={MoviePopular}></Route>
                <Route path='/movie_upcoming' component={MovieUpcoming}></Route>
                <Route path='/tv_now' component={TvNow}></Route>
                <Route path='/movie/:id' component={Detail} ></Route>
                <Route path='/tv/:id' component={Detail} ></Route>
                <Route path='/search/:item' component={Search}></Route>
                {/* <Redirect from='*' to='/'></Redirect> */}
            </Switch>
        </>
    </Router>
)