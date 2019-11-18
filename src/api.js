import axios from 'axios';

const api = axios.create({
    baseURL : 'https://api.themoviedb.org/3',
});

export const moviesApi = {
    nowPlaying : () => {
        return api({
            method: 'GET',
            url: '/movie/now_playing',  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US'
            }, // 값을 넘긴다
        })
    },
    movieDetail : (id) => {
        return api({
            method: 'GET',
            url: `/movie/${id}`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
                append_to_response : 'videos'
            }, // 값을 넘긴다
        })
    },
    search : (term) => {
        return api({
            method: 'GET',
            url: `/search/movie`,  // api 통신 상세 주소
            params : { 
                api_key : 'a992d1fae6c06b990f53908e421ee199',
                language : 'en-US',
                query : encodeURIComponent(term)
            }, // 값을 넘긴다
        })
    },
}