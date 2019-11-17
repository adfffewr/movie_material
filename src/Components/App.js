import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import GlobalStyles from './GlobalStyles'
import Router from './Router'


class App extends React.Component{
    
    render(){
        return(
            <>
                <CssBaseline />
                <GlobalStyles></GlobalStyles>
                <Router></Router>
                
            </>
        )
    }
}

export default App;
