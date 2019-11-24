import React from 'react';
import { Link , withRouter } from 'react-router-dom';
import styled , {css, keyframes , createGlobalStyle} from 'styled-components';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import TheatersIcon from '@material-ui/icons/Theaters';
import VideocamIcon from '@material-ui/icons/Videocam';
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import StarIcon from '@material-ui/icons/Star';
import TvIcon from '@material-ui/icons/Tv';
import LiveTvIcon from '@material-ui/icons/LiveTv';


const GlobalStyle = createGlobalStyle`
    body{
        overflow : ${props => (props.show ? 'hidden' : 'visible')};
    }
`;

const HeaderCss = {
    left: "0",
    top : "0"
}
const TitleCSs = {
    marginLeft : "20px",
    flexGrow: 1,
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
const SearchBoxCss = {
    width:'auto',
    marginLeft:'8px',
    position:'relative',
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius:'4px',
};
const SearchIconCss = {
    width: '56px',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};
const InputBox = styled.div`
    cursor: text;
    display: inline-flex;
    position: relative;
    box-sizing: border-box;
    align-items: center;
`;
const Input = styled.input`
    width: 120px;
    padding: 8px 8px 8px 56px;
    transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    background: none;
    background-color:none;
    box-sizing: content-box;
    display:block;
    border:none;
    outline:none;
    color:#FFF;
    &:hover{
        width:150px;
    };
`;
const ListCss = {
    paddingLeft : '32px'
}

class HeaderTag extends React.Component{
    state = {
        homeProps : 'props',
        show : false,
        open : false,
        open2 : false,
        headerTitle : '',
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
            open : false,
            open2 : false,
        })
    };
    handleClick = () => event => {
        this.setState({
            open : !this.state.open,
        })
    };
    handleClick2 = () => event => {
        this.setState({
            open2 : !this.state.open2,
        })
    };
    
    render() {
        const { show , open , open2 } = this.state;
        const pathname = this.props.location.pathname
        return (
            <>
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
                    <Typography style={TitleCSs}  variant="h6" noWrap>
                        <Title current={pathname === '/'}>개봉중 영화</Title>
                        <Title current={pathname === '/movie_popular'}>베스트 영화</Title>
                        <Title current={pathname === '/movie_upcoming'}>개봉예정 영화</Title>
                        <Title current={pathname === '/search'}>Search</Title>
                        {/* <SLink to="/" current={pathname === '/'}>Home</SLink>
                <SLink to="/search" current={pathname === '/search'}>search</SLink> */}
                    </Typography>
                    <div style={SearchBoxCss}>
                        <div style={SearchIconCss}>
                            <SearchIcon />
                        </div>
                        <InputBox>
                            <Input type="text" />
                        </InputBox>
                        
                    </div>
                    {show === true && (
                        <Sidebar>
                            <Sideul show={show}>        
                                <ListItem button onClick={this.handleClick()}>
                                    <ListItemIcon><TheatersIcon /></ListItemIcon>
                                    <ListItemText primary="영화" />
                                    {open ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={open} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button style={ListCss}>
                                            <SLink to="/" onClick={this.closeSide()}>
                                                <ListItemIcon>
                                                    <VideocamIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="개봉중 영화" />
                                            </SLink>
                                        </ListItem>
                                    </List>
                                    <List component="div" disablePadding>
                                        <ListItem button style={ListCss}>
                                            <SLink to="/movie_upcoming" onClick={this.closeSide()}>
                                                <ListItemIcon>
                                                    <AccessAlarmIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="개봉예정 영화" />
                                            </SLink>
                                        </ListItem>
                                    </List>
                                    <List component="div" disablePadding>
                                        <ListItem button style={ListCss}>
                                            <SLink to="/movie_popular" onClick={this.closeSide()}>
                                                <ListItemIcon>
                                                    <StarIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="베스트 영화" />
                                            </SLink>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                <ListItem button onClick={this.handleClick2()}>
                                    <ListItemIcon><TvIcon /></ListItemIcon>
                                    <ListItemText primary="드라마" />
                                    {open2 ? <ExpandLess /> : <ExpandMore />}
                                </ListItem>
                                <Collapse in={open2} timeout="auto" unmountOnExit>
                                    <List component="div" disablePadding>
                                        <ListItem button style={ListCss}>
                                            <SLink to="/" onClick={this.closeSide()}>
                                                <ListItemIcon>
                                                    <LiveTvIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="방영중 드라마" />
                                            </SLink>
                                        </ListItem>
                                    </List>
                                    <List component="div" disablePadding>
                                        <ListItem button style={ListCss}>
                                            <SLink to="/" onClick={this.closeSide()}>
                                                <ListItemIcon>
                                                    <AccessAlarmIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="방영예정 드라마" />
                                            </SLink>
                                        </ListItem>
                                    </List>
                                    <List component="div" disablePadding>
                                        <ListItem button style={ListCss}>
                                            <SLink to="/" onClick={this.closeSide()}>
                                                <ListItemIcon>
                                                    <StarIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="베스트 드라마" />
                                            </SLink>
                                        </ListItem>
                                    </List>
                                </Collapse>
                                
                            </Sideul>
                            <Sideback onClick={this.closeSide()}></Sideback>
                        </Sidebar>
                    )}
                </Toolbar>
            </AppBar>
            </>
        )
    }
}



export default withRouter(HeaderTag)