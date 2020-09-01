import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import {
    Typography, Button
} from '@material-ui/core';
import CustomTextField from './custom/CustomTextField';
import './css/Login.css';

const Login = () => {
    return (
        <Fragment>
            <div className="login-container">
                <div className="login-form">
                    <Typography variant="h4">ARKIP Gardens</Typography>
                    <Typography className="login-subtitle">MicroGreens Manila</Typography>
                    <form autoComplete="off" onSubmit="">
                        <CustomTextField id="standard-basic" label="Username" className="login-text" />
                        <br />
                        <CustomTextField id="standard-basic" type="password" label="Password" className="login-text" />
                        <br />
                        <Button className="login-button">Login</Button>
                    </form>
                    <br />
                    <Typography className="register-link">
                        Don't have an account? Register 
                        <Link to="/register"> here</Link>
                    </Typography>
                </div>
            </div>
        </Fragment>
    )
}

export default Login;