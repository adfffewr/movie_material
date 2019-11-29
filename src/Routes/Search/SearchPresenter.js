import React from 'react';
import Loading from '../../Components/Loading';
import Container from '@material-ui/core/Container';
import Section from '../../Components/Section';
import Poster from '../../Components/Poster';



const SearchPresenter = ({
    movieResult,
    tvResult,
    loading,
    error
}) => (
    <>
        { loading ? (
            <Loading></Loading>
        ) : (
            <>
                {movieResult && movieResult.length > 0 && (
                    <Container>
                        <Section title="영화">
                            {movieResult.map(movie => (
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
                    </Container>
                    
                )}
                {tvResult && tvResult.length > 0 && (
                    <Container>
                        <Section title="드라마">
                            {tvResult.map(tv => (
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
                    </Container>
                )}
            </>
        )}
       
    </>
)



export default SearchPresenter;