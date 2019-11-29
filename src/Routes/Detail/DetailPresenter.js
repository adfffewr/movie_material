import React from 'react';
import styled from 'styled-components';
import Loading from '../../Components/Loading';

import Container from '@material-ui/core/Container';


const ContainerBox = styled.div`
    width:100%;
`;
const BackCover = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-image:url(${props => props.backImage});
    background-size:cover;
    background-repeat:no-repeat;
    background-position:center center;
    filter:blur(3px);
    opacity:0.3;
    z-index:-1;
`;
const ContentBox = styled.div`
    width:100%;
`;
const Title = styled.h1`
    margin:30px 0;
    font-size:30px;
    color:#FFF;
    font-weight:bold;
    text-align:center;
`;
const VideoBox = styled.div`
    width:100%;
    border-radius:10px;
    overflow:hidden;
    position:relative;
    padding-bottom:56.25%;
`;
const Iframe = styled.iframe`
    position:absolute;
    left:0;
    top:0;
    width:100%;
    height:100%;
`;

const ItemTextBox = styled.div`
    margin:30px 0;
    font-size:16px;
    color:#FFF;
    font-weight:bold;
`;

class DetailPresenter extends React.Component{
    state = {

    }

    render() {
        const {result ,loading} = this.props;
        {console.log(result)}
        return(
            <>
                {loading ? (
                    <Loading></Loading>
                ) : (
                    <ContainerBox>
                        <BackCover
                        backImage = {`https://image.tmdb.org/t/p/original/${result.backdrop_path}`}
                        ></BackCover>
                        <ContentBox>
                            <Title>{result.original_title}</Title>
                            <Container maxWidth='md'>
                                <VideoBox>
                                    {result.videos.results && result.videos.results.length > 0 && (
                                        <Iframe src={`https://www.youtube.com/embed/${result.videos.results[0].key}?controls=0`} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                                        </Iframe>
                                    )}
                                    
                                </VideoBox>
                                <ItemTextBox>
                                    {result.overview}
                                </ItemTextBox>
                            </Container>
                        </ContentBox>
                    </ContainerBox>
                )}
            </>
            
        )
    }
};

export default DetailPresenter;