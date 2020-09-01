import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//PAGES
import NavigationBar from './components/Navbar/Navbar';
import Login from './components/Login';
import Home from './components/Home';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Orders from './components/Orders/Orders';

//CSS
import {
    Container
} from '@material-ui/core';
import './components/css/App.css'
import './components/custom/CustomTextField.css'

const App = () => {
    return (
        <Router>
            <Switch>
                <Container>
                    {<NavigationBar />}
                    <Route exact path="/login" component={Login}></Route>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/faq" component={FAQ} />
                    <Route exact path="/contact-us" component={ContactUs} />
                    <Route exact path="/orders" component={Orders} />
                </Container>
            </Switch>
        </Router>
    )
}

export default App;