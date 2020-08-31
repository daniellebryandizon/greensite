import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Home from './components/Home';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';

import {
    Container
} from '@material-ui/core';

const App = () => {
    return (
        <Router>
            <Switch>
                <Container>
                    <NavigationBar />
                    <Route exact path="/" component={Home} />
                    <Route exact path="/faq" component={FAQ} />
                    <Route exact path="/contact-us" component={ContactUs} />
                </Container>
            </Switch>
        </Router>
    )
}

export default App;