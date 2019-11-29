import React , {useState , useEffect} from 'react';
import { TVApi } from '../../api'

import TvNowPresenter from './TvNowPresenter';

const TvNowContainer = () => {
    const [topRated , setTopRated] = useState(null);
    const [error , setError] = useState(null);
    const [loading , setLoading] = useState(true);

    const topRatedAPI = async () => {
        try{
            const {data : { results : topRated} } = await TVApi.topRated();
            setTopRated(topRated);
            // console.log(topRated)
        } catch{
            setError('에러입니다. 다시 시도해주세요.')
        } finally{
            setLoading(false);
        }
    }

    useEffect( () => {
        topRatedAPI()

        return () => {

        }
    }, [])

    return(
        <>
            <TvNowPresenter 
                topRated={topRated}
                error={error}
                loading={loading}
            />
        </>
    )
}


export default TvNowContainer;