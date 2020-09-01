import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NavbarMenu from './NavbarMenu';

import {
    CssBaseline, useScrollTrigger, AppBar, Toolbar, Typography, Container, IconButton
} from '@material-ui/core';
import gtgLogo from '../css/images/ARKIP_GARDENS-removebg-preview.png';
import '../css/ApplicationBar.css';

const ElevationScroll = (props) => {
    const { children, window } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const NavigationBar = (props) => {
    return (
        <Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar className="application-bar">
                    <Container>
                        <Toolbar>
                            <Link to="/" className="application-bar-link">
                                <IconButton edge="start" color="inherit" aria-label="menu">
                                    <img alt="ARKIP Gardens" src={gtgLogo} className="application-bar-avatar" />
                                </IconButton>
                            </Link>
                            <Typography className="application-bar-title">
                                <Link to="/" className="application-bar-link">
                                    Home
                                </Link>
                            </Typography>
                            <Link to="/orders" className="application-bar-link">
                                Orders
                            </Link>
                            <NavbarMenu />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </Fragment>
    )
}

export default NavigationBar;