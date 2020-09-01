import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';

import {
    Button,
    Menu,
    MenuItem,
    Avatar,
    Divider
} from '@material-ui/core';

const NavbarMenu = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Fragment>
            <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <Avatar />
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}>
                <MenuItem>
                    <Link to="/faq" className="application-bar-link">
                        FAQ
                    </Link>
                </MenuItem>
                <Divider></Divider>
                <MenuItem>
                    <Link to="/contact-us" className="application-bar-link">
                        Contact Us
                    </Link>
                </MenuItem>
                <Divider></Divider>
                <MenuItem>
                    <Link to="/logout" className="application-bar-link">
                        Logout
                    </Link>
                </MenuItem>
            </Menu>
        </Fragment>
    )
}

export default NavbarMenu;