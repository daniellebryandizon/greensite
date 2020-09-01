import React, { Fragment } from 'react';

import { Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@material-ui/core';
import CartItem from './CartItem';

const Cart = () => {
    return (
        <Fragment>
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell>
                                <Typography variant="h6">Name</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Quantity</Typography>
                            </TableCell>
                            <TableCell>
                                <Typography variant="h6">Price</Typography>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                        <CartItem />
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    )
}

export default Cart;