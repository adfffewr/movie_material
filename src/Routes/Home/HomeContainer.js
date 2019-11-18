import React from 'react';
import HomePresenter from './HomePresenter';
import { moviesApi } from '../../api'

export default class extends React.Component {
    state = {
        nowPlaying : null,
        error : null,
        loading : true,
        
    };
    async componentDidMount() {
        try{
            const {data : { results : nowPlaying} } = await moviesApi.nowPlaying();
            this.setState({
                nowPlaying
            })
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
        const { nowPlaying , error , loading } = this.state
        return (
            <HomePresenter 
            nowPlaying={nowPlaying} 
            error={error} 
            loading={loading} 
            />
        )
    }
}

