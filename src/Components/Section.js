import React from 'react';
import styled from 'styled-components';

import GridList from '@material-ui/core/GridList';

const Title = styled.h1`
    font-weight:bold;
    margin:10px 0;
    font-size:26px;
`;
const GridListCss = {
    flexWrap: 'nowrap',
    transform: 'translateZ(0)',
}


const Section = ({title , children}) => (
    <div>
        <Title>{title}</Title>
        <GridList style={GridListCss}>{children}</GridList>
    </div>
); 


export default Section;