import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import StarIcon from '@material-ui/icons/Star';
import MuiTableCell from "@material-ui/core/TableCell";
import { withStyles, createStyles } from '@material-ui/core';


export function TaskPreview({ task, id }) {

    const dispatch = useDispatch()

    const TableCell = withStyles({
      root: {
        borderBottom: "none",
        color: "#dedede"
      }
    })(MuiTableCell);

    useEffect(() => {
        console.log(id)
        console.log('render!')
        return () => {
        }
    }, [id])

    const getColor = () => {
        return (task.third.charAt(0) === '-')? "percent red" : "percent green"
    }
    

    if (!task) return <div>...LOADING</div>
    return (
        <TableRow>
            <TableCell style={{color: "#b1b0b0"}}>{task.first}</TableCell>
            <TableCell style={{textAlign: "right"}}>{task.second}</TableCell>
            <TableCell className={getColor()}>{task.third}</TableCell>
            <TableCell>{task.fourth}</TableCell>
            <TableCell>
            <StarIcon
                className={`star-i ${task.star? 'yellow' : 'grey'}`}/>
            </TableCell>
        </TableRow>
    )
}