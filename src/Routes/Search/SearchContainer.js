import React , { useState , useEffect } from 'react';
import { useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';
import SearchPresenter from './SearchPresenter';
import {moviesApi , TVApi} from '../../api'

const SearchContainer = () => {
    const params = useParams();
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    // console.log(params)

    const [movieResult , setMovieResult] = useState('');
    const [tvResult , setTvResult] = useState('');
    const [loading , setLoading] = useState(true);
    const [error , setError] = useState(null);

    const SearchApi = async () => {
        const { item } = params
        try{
            const { data : { results : movieResult } } = await moviesApi.search(item);
            const { data : { results : tvResult } } = await TVApi.search(item);
            setMovieResult(movieResult);
            setTvResult(tvResult) 
        } catch {
            setError('검색 에러 입니다.')
        } finally {
            setLoading(false)
        }
    }
    useEffect( () => {
        SearchApi()
    }, [params])

    return(
        <>
            <SearchPresenter 
                movieResult={movieResult}
                tvResult={tvResult}
                loading={loading}
                error={error}
            />
        </>
    )
}


export default SearchContainer