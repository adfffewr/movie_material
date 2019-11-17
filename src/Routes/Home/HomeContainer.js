import React from 'react';
import HomePresenter from './HomePresenter';


export default class extends React.Component {
    state = {
        homeProps : 'props',
        
    };

    

    render() {
        const { homeProps } = this.state
        console.log(this.state)
        return (
            <HomePresenter 
                homeProps={homeProps} 
            />
        )
    }
}

