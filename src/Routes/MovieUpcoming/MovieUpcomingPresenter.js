import React from 'react';
// import styled from 'styled-components';
import Loading from '../../Components/Loading';
import Container from '@material-ui/core/Container';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster'


const MovieUpcomingPresenter = ({upcoming ,error ,loading}) => (
    <>
        {loading ? (
            <Loading></Loading>
        ) : (
            <Container maxWidth="lg">
                {upcoming && upcoming.length > 0 && (
                    <Section title="개봉예정 영화">
                        {upcoming.map(movie => (
                            <Poster
                                key={movie.id}
                                id={movie.id}
                                title={movie.original_title}
                                imageUrl={movie.poster_path}
                                rating={movie.vote_average}
                                // year={movie.release_date.substring(0,4)}
                                year={movie.release_date.split('-')}
                            >
                            </Poster>
                        ))}
                    </Section>
                )}
                
            </Container>
        )}
        
        
    </>
)



export default MovieUpcomingPresenter;