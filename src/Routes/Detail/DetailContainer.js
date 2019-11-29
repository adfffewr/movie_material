import React from 'react';
import DetailPresenter from './DetailPresenter';
import { moviesApi , TVApi} from '../../api';

export default class extends React.Component{
    constructor(props) {
        super(props);
        const pathname = props.location.pathname
        this.state = {
            result : null,
            error : null,
            loading : true,
            isMovie : pathname.includes('/movie/')
        };
    }
    

    async componentDidMount() {
        // console.log(this.props)
        // const id = this.props.match.params.id
        const { match : {params : {id}} } = this.props;
        const push = this.props.history.push;
        const parsedId = parseInt(id);
        if(isNaN(parsedId)) {
            return push('/');
        };
        let result = null;
        const {isMovie} = this.state;
        try{
            if(isMovie) {
                ({data : result } = await moviesApi.movieDetail(parsedId) )
            } else {
                ({data : result } = await TVApi.showDetail(parsedId) )
            }
        } catch {
            this.setState({ error : '디테일 오류 입니다.' })
        } finally {
            this.setState({
                loading : false,
                result
            })
        }
        
    }

    render() {
        const { result , error , loading  } = this.state;
        return(
            <DetailPresenter
                result={result}
                error={error}
                loading={loading}
            >
            </DetailPresenter>
        )
    }
}