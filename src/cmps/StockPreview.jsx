import React, { useEffect, useState } from 'react'
import TableRow from "@material-ui/core/TableRow";
import StarIcon from '@material-ui/icons/Star';
import MuiTableCell from "@material-ui/core/TableCell";
import { withStyles, createStyles } from '@material-ui/core';


export function StockPreview({ stock, id }) {


    const TableCell = withStyles({
      root: {
        borderBottom: "none",
        color: "#dedede"
      }
    })(MuiTableCell);

    useEffect(() => {
        console.log(id)
        return () => {
        }
    }, [id])

    const getColor = () => {
        return (stock.third.charAt(0) === '-')? "percent red" : "percent green"
    }
    

    if (!stock) return <div>...LOADING</div>
    return (
        <TableRow>
            <TableCell style={{color: "#b1b0b0"}}>{stock.first}</TableCell>
            <TableCell style={{textAlign: "right"}}>{stock.second}</TableCell>
            <TableCell className={getColor()}>{stock.third}</TableCell>
            <TableCell>{stock.fourth}</TableCell>
            <TableCell>
            <StarIcon
                className={`star-i ${stock.star? 'yellow' : 'grey'}`}/>
            </TableCell>
        </TableRow>
    )
}