import React from 'react';
import MovieUpcomingPresenter from './MovieUpcomingPresenter';
import { moviesApi } from '../../api'

export default class extends React.Component {
    state = {
        upcoming : null,
        error : null,
        loading : true,
        
    };
    async componentDidMount() {
        try{
            const {data : { results : upcoming} } = await moviesApi.upcoming();
            
            this.setState({
                upcoming
            });
            
        } catch{
            this.setState({
                error : '에러입니다 다시 시도해 주세요.'
            })
        } finally{
            this.setState({
                loading : false
            })
        }
    }

    render() {
        const { upcoming , error , loading } = this.state
        return (
            <MovieUpcomingPresenter 
            upcoming={upcoming} 
            error={error} 
            loading={loading} 
            />
        )
    }
}

