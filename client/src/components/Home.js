import React, { Fragment } from 'react';

import MicrogreenItem from './MicroGreenItem';
import { microgreens } from './data/microgreens';

import { Typography, Grid } from '@material-ui/core';

import './css/Home.css';

const Home = () => {

    return (
        <Fragment>
            <div className="home-container">
                <div className="home-body">
                    <Grid container spacing={3}>
                        {
                            microgreens.map(microgreen =>
                                (
                                    <Grid item xs={12} sm={3}>
                                        <MicrogreenItem key={microgreen.id} microgreen={microgreen} />
                                    </Grid>
                                )
                            )
                        }
                    </Grid>
                </div>
                <div className="home-footer">
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <div className="pricing">
                                <Typography>
                                    All of our products are P150 per pack (70 grams).
                            <strong> Minimum order of P1,000</strong>. We also deliver live microgreens in growing
                            trays to regular customers at P500/tray (1 sq ft).
                        </Typography>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Fragment>
    )
}

export default Home;