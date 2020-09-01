import React, { Fragment, useState } from 'react';

import Cart from './Cart/Cart';

import { Typography, Tab, Tabs, Box } from '@material-ui/core';
import '../css/Orders/Orders.css';

const changeTabs = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    }
}

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3} className="order-panel">
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const Orders = () => {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }
    return (
        <Fragment>
            <div className="orders-container">
                <Typography variant="h5">
                    Orders
                </Typography>
                <div className="orders-body">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                    >
                        <Tab label="Cart" {...changeTabs(0)} />
                        <Tab label="Preparing" {...changeTabs(1)} />
                        <Tab label="For Delivery" {...changeTabs(2)} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Cart />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Typography>2</Typography>
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Typography>3</Typography>
                    </TabPanel>
                </div>
            </div>
        </Fragment>
    )
}

export default Orders;