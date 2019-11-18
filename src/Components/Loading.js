import React from 'react';
import styled from 'styled-components';
import CircularProgress from '@material-ui/core/CircularProgress';

const Container = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    z-index:1100;
    background-color:rgba(0,0,0,0.5);
    display:flex;
    align-items:center;
    justify-content:center;
`;

const Loading = () => (
    <Container>
        <CircularProgress color="secondary"></CircularProgress>
    </Container>
)

export default Loading;