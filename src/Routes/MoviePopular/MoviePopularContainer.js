import React from 'react';
import MoviePopularPresenter from './MoviePopularPresenter';
import { moviesApi } from '../../api'

export default class extends React.Component {
    state = {
        popular : null,
        error : null,
        loading : true,
        
    };
    async componentDidMount() {
        try{
            const {data : { results : popular} } = await moviesApi.popular();
            
            this.setState({
                popular
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
        const { popular , error , loading } = this.state
        return (
            <MoviePopularPresenter 
            popular={popular} 
            error={error} 
            loading={loading} 
            />
        )
    }
}

