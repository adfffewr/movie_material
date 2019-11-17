import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import styled , {css, keyframes , createGlobalStyle} from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';

const GlobalStyle = createGlobalStyle`
    body{
        overflow : ${props => (props.show ? 'hidden' : 'visible')};
    }
`;

const HeaderCss = {
    left: "0",
    top : "0"
}
const Center = {
    position: "absolute",
    left : "50%",
    top:"50%",
    transform:"translate(-50% , -50%)"
}
const SLink = styled(Link)`
    color:#FFF;
    text-decoration:none;
    display:flex;
    align-items:center;
    width:100%;
`;
const Title = styled.span`
    display : ${props => (props.current ? 'block' : 'none')};
    font-size:20px;
    font-weight:bold;
`;
const Sidebar = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    overflow:hidden; 
    /* transition:width 0.3s; */
`;
const Sideback = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    left:0;
    top:0;
    background-color:rgba(0,0,0,0.5);
    z-index:900;
`;
const Sideul = styled.ul`
    position:absolute;
    /* width:${props => (props.show ? '250px' : '0') }; */
    width:250px;
    height:100%;
    left:0;
    top:0;
    padding-top:8px;
    padding-bottom:8px;
    background-color:#424242;
    overflow:hidden;
    z-index:1000;
    ${props => {
        if(props.show ) {
            return css `animation: ${Openframes} 0.2s ease-in-out`;
        } 
    }};
    

`;
const Openframes = keyframes`
    from{
        width:0;
    }
    to{
        width:250px;
    }
`;

class HeaderTag extends React.Component{
    state = {
        homeProps : 'props',
        show : false,
    };
    opneSide = () => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({
            show : true,
        })
    };
    closeSide = () => event => {
        this.setState({
            show : false,
        })
    }
    
    render() {
        const { show } = this.state;
        const pathname = this.props.location.pathname
        return (
            <AppBar position="sticky" color="default" style={HeaderCss}>
                <GlobalStyle show={show}></GlobalStyle>
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        color="inherit" 
                        aria-label="menu" 
                        onClick={this.opneSide()}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={Center}>
                        <Title current={pathname === '/'}>Home</Title>
                        <Title current={pathname === '/search'}>Search</Title>
                        {/* <SLink to="/" current={pathname === '/'}>Home</SLink>
                <SLink to="/search" current={pathname === '/search'}>search</SLink> */}
                    </Typography>
                    {show === true && (
                        <Sidebar>
                            <Sideul show={show}>        
                                <ListItem button>
                                    <SLink to="/" onClick={this.closeSide()}>
                                        <ListItemIcon><HomeIcon></HomeIcon></ListItemIcon>
                                        <ListItemText>Home</ListItemText>
                                    </SLink>
                                </ListItem>
                                <ListItem button>
                                    <SLink to="/search" onClick={this.closeSide()}>
                                        <ListItemIcon><SearchIcon></SearchIcon></ListItemIcon>
                                        <ListItemText>Search</ListItemText>
                                    </SLink>
                                </ListItem>
                            </Sideul>
                            <Sideback onClick={this.closeSide()}></Sideback>
                        </Sidebar>
                    )}
                </Toolbar>
            </AppBar>
        )
    }
}



export default withRouter(HeaderTag)