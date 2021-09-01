import { StockPreview } from './StockPreview.jsx'
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import {makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    head: {
        color: '#dedede',
        borderTop: '1px solid #ccc9c9',
        borderBottom: 'none'
    }
});

export function StockList({ stocks }) {

    const classes = useStyles();

    return (
        <div className="table-container">
        <Table size="small">
            <TableHead>
                <TableRow>
                    <TableCell className={classes.head}>XRP</TableCell>
                    <TableCell className={classes.head}></TableCell>
                    <TableCell className={classes.head}></TableCell>
                    <TableCell className={classes.head}></TableCell>
                    <TableCell className={classes.head}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {stocks.map(stock => { if (stock.type === "XRP") return <StockPreview key={stock._id} stock={stock} id={stock._id} /> }
                )}
            </TableBody>
            <TableHead>
                <TableRow>
                    <TableCell className={classes.head}>BCH</TableCell>
                    <TableCell className={classes.head}></TableCell>
                    <TableCell className={classes.head}></TableCell>
                    <TableCell className={classes.head}></TableCell>
                    <TableCell className={classes.head}></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {stocks.map(stock => { if (stock.type === "BCH") return <StockPreview key={stock._id} stock={stock} id={stock._id} /> }
                )}
            </TableBody>
        </Table>
        </div>
    )
}