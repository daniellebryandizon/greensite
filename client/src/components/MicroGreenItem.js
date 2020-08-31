import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Paper, Avatar, Typography, Dialog, DialogTitle } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './css/DialogItem.css';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(13),
        height: theme.spacing(13),
    },
    dialogAvatar: {
        width: theme.spacing(30),
        height: theme.spacing(30),
    },
}));


const MicrogreenItem = ({ microgreen }) => {

    const [open, setOpen] = useState(false);

    const classes = useStyles();

    return (
        <Fragment>
            <Paper elevation={0} className="microgreen-item" onClick={() => setOpen(true)}>
                <center><Avatar alt={microgreen.name} src={microgreen.imageSrc} className={classes.large} /></center>
                <div className="microgreen-label">
                    <Typography variant="subtitle2" className="microgreen-name">{microgreen.name}</Typography>
                    <Typography className="microgreen-desc">{microgreen.description}</Typography>
                </div>
            </Paper>
            <DialogItem open={open} onClose={() => setOpen(!open)} microgreen={microgreen} />
        </Fragment>
    )
}

const DialogItem = (props) => {

    const { microgreen } = props;

    const classes = useStyles();

    return (
        <Dialog {...props} aria-labelledby="simple-dialog-title" className="dialog-item">
            <div className="dialog-avatar">
                <center>
                    <Avatar alt={microgreen.name} src={microgreen.imageSrc} className={classes.dialogAvatar} />
                </center>
            </div>
            <DialogTitle id="simple-dialog-title" className="dialog-title">{microgreen.name}</DialogTitle>
            <div className="dialog-label">
                <Typography className="dialog-desc">{microgreen.description}</Typography>
            </div>
            <div className="dialog-info">
                <Typography>{microgreen.info}</Typography>
            </div>
        </Dialog>
    )
}

MicrogreenItem.propTypes = {
    microgreen: PropTypes.array.isRequired
}


export default MicrogreenItem;