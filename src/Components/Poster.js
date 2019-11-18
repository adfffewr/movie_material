import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import GridListTile from '@material-ui/core/GridListTile';
import Paper from '@material-ui/core/Paper';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';

const Image = styled.div`
    background-image:url( ${props => props.bgUrl });
    background-size:cover;
    background-position:center center;
    width:100%;
    height:180px;
    position:relative;
    @media screen and (max-width : 768px) {
        height:150px;
    }
    &:before{
        content:'';
        position:absolute;
        left:0;
        top:0;
        width:100%;
        height:100%;
        background-color:rgba(0,0,0,0.5);
        opacity:0;
        transition:opacity 0.3s;
    }
`;
const RatingBox = styled.div`
    position:absolute;
    right:5px;
    bottom:5px;
    text-align:right;
    box-sizing:border-box;
    opacity:0;
    transition:opacity 0.3s;
`;
const Container = styled.div`
    &:hover{
        ${Image} {
            &:before{
                opacity:1;
            }
        }
        ${RatingBox} {
            opacity:1;
        }
    }
`;
const ImageContainer = styled.div`
    position:relative;
    
`;
const Title = styled.span`
    display:block;
    padding:10px 10px 0;
    box-sizing:border-box;
    font-size:16px;
    font-weight:bold;
`;
const YearBox = styled.span`
    display:block;
    padding:10px;
    box-sizing:border-box;
`;
const PaperCss = {
    overflow:"hidden",
};
const LinkCss = {
    textDecoration : "none",
    color: "#FFF",
    fontWeight:"bold",
};
const GridListTileCss = {
    padding:"5px",
    width:"230px"
};
const ButtonBox = styled.div`
    padding:0 5px 5px;
    box-sizing:border-box;
`;



const Poster = ({id , imageUrl , title , rating , year }) => (
    <GridListTile style={GridListTileCss}>
        <Paper style={PaperCss}>
            
                <Container>
                    <ImageContainer>
                        <Image 
                            bgUrl={imageUrl 
                                ? `https://image.tmdb.org/t/p/w300${imageUrl}` 
                                : require("../assets/popcorn.jpg")
                            }
                        >
                        </Image>
                        <RatingBox>
                            <Rating name="customized-10" value={rating} max={10} size="small" readOnly />
                        </RatingBox> 
                    </ImageContainer>
                    <Title>
                        {title.length > 15? `${title.substring(0,15)} ...` : title }
                    </Title>
                    <YearBox>
                        {`${year[0]}년 ${year[1]}월 ${year[2]}일`}
                    </YearBox>
                    <ButtonBox>
                        <Button variant="outlined">
                            <Link to={`/movie/${id}`} style={LinkCss}>
                                자세히 보기
                            </Link>
                        </Button>
                    </ButtonBox>
                    
                </Container>
            
        </Paper>
    </GridListTile>
);

export default Poster;