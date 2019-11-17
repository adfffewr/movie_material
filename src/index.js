import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { MuiThemeProvider , createMuiTheme } from '@material-ui/core'

const theme = createMuiTheme({
    palette : {
        type: 'dark'
    }
});


ReactDOM.render(
    <MuiThemeProvider theme={theme}>
        <App />
    </MuiThemeProvider>, 
    document.getElementById('root')
);

