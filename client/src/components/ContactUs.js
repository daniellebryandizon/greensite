import React, { Fragment } from 'react';

import { Typography, Container, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ContactLogo from './css/images/ARKIP_GARDENS-removebg-preview.png';
import './css/ContactUs.css';

const useStyles = makeStyles((theme) => ({
    large: {
        width: '300px',
        height: '200px;',
        borderRadius: '20px !important',
        borderColor: 'red'
    },
}));

const ContactUs = () => {
    const classes = useStyles();

    return (
        <Fragment>
            <Container>
                <div className="contact-container">
                    <div className="contact-body">
                        <Grid>
                            <Grid item xs={12}>
                                <img alt="ARKIP Gardens" src={ContactLogo} className={classes.large} />
                                <Typography variant="h4">ARKIP Gardens</Typography>
                                <Typography className="subtitle-header">MicroGreens Manila</Typography>
                                <br />
                                {/*<Divider className="divider"></Divider>*/}
                                <br />
                                <Typography variant="h5" className="contact-header"><strong>Contact Numbers</strong></Typography>
                                <div className="contact-item">
                                    <Typography variant="subtitle1">0929-791-9734 </Typography>
                                    <Typography variant="subtitle1">0918-230-8694</Typography>
                                    (Smart)
                                </div>
                                <br />
                                <Typography variant="h5" className="contact-header"><strong>Social Media</strong></Typography>
                                <div className="contact-item">
                                    <Typography variant="subtitle1">Facebook Page</Typography>
                                    <a href="//www.facebook.com/arkipgardens" target="_blank" rel="noopener noreferrer" className="contact-link">
                                        <Typography variant="subtitle1">www.facebook.com/arkipgardens</Typography>
                                    </a>
                                </div>
                            </Grid>
                        </Grid>

                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export default ContactUs;