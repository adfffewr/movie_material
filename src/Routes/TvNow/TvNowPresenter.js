import React , {} from 'react';
// import styled from 'styled-components';
import Loading from '../../Components/Loading';
import Container from '@material-ui/core/Container';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster'

const TvNowPresenter = ({topRated ,error ,loading}) => {

    return(
        <>
            {loading ? (
                <Loading></Loading>
            ) : (
                <Container maxWidth="lg">
                    {topRated && topRated.length > 0 && (
                        <Section title="드라마">
                            {topRated.map(tv => (
                                <Poster
                                    key={tv.id}
                                    id={tv.id}
                                    title={tv.original_name}
                                    imageUrl={tv.poster_path}
                                    rating={tv.vote_average}
                                    // year={tv.release_date.substring(0,4)}
                                    year={tv.first_air_date.split('-')}
                                    isMovie={false}
                                >
                                </Poster>
                            ))}
                        </Section>
                    )}
                </Container>
            )}
        </>
    )
}



export default TvNowPresenter;