import React, { Fragment, useState } from 'react'


import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import TestImage from '../../css/images/radish_microgreen.jpg'
import { TableRow, TableCell, Avatar, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../../css/Orders/CartItem.css';

const useStyles = makeStyles((theme) => ({
    size: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));


const CartItem = () => {

    const [count, setCount] = useState(1);
    const classes = useStyles();

    return (
        <Fragment>
            <TableRow>
                <TableCell>
                    <Avatar src={TestImage} className={classes.size} />
                </TableCell>
                <TableCell>
                    <Typography>Radish</Typography>
                </TableCell>
                <TableCell>
                    <div className="cart-quantity">
                        <RemoveCircleIcon className="cart-control" onClick={() => count !== 1 ? setCount(count - 1) : setCount(1)} />
                        <Typography className="cart-quanity-count">{count}</Typography>
                        <AddCircleIcon className="cart-control" onClick={() => setCount(count + 1)} />
                    </div>
                </TableCell>
                <TableCell>
                    <Typography>1000</Typography>
                </TableCell>
                <TableCell>
                    <Button className="cart-remove">Remove</Button>
                </TableCell>
            </TableRow>
        </Fragment>
    )
}

export default CartItem;