import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import { Paper, Avatar, Typography, Dialog, Button } from '@material-ui/core';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import './css/DialogItem.css';

const useStyles = makeStyles((theme) => ({
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
    },
    large: {
        width: theme.spacing(25),
        height: theme.spacing(25),
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
                    <Typography variant="subtitle1" className="microgreen-name">{microgreen.name}</Typography>
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
            <Typography className="dialog-title-name">{microgreen.name}</Typography>
            <div className="dialog-label">
                <Typography className="dialog-desc">{microgreen.description}</Typography>
            </div>
            <div className="dialog-info">
                <Typography>{microgreen.info}</Typography>
            </div>
            <div className="dialog-quantity">
                <div className="dialog-quantity-controls">
                    <RemoveCircleIcon className="dialog-control" />
                    <Typography className="quantity-count">1</Typography>
                    <AddCircleIcon className="dialog-control" />
                </div>
            </div>
            <div className="dialog-buy">
                <Button className="dialog-buy-button">Add To Cart</Button>
            </div>
        </Dialog >
    )
}

MicrogreenItem.propTypes = {
    microgreen: PropTypes.array.isRequired
}


export default MicrogreenItem;