import { TaskPreview } from './TaskPreview.jsx'
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import MuiTableHead from "@material-ui/core/TableHead";
import MuiTableCell from "@material-ui/core/TableCell";
import { withStyles, createStyles, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    head: {
        color: '#dedede',
        borderTop: '1px solid #dedede',
        borderBottom: 'none'
    }
  });

export function TaskList({ tasks }) {

    const classes = useStyles();

    // const TableHead = withStyles({
    //     root: {
    //       borderBottom: "none",
    //     }
    //   })(MuiTableHead);

    //   const TableCell = withStyles({
    //     root: {
    //       borderBottom: "none",
    //       color: "#dedede"
    //     }
    //   })(MuiTableCell);



    return (
        <Table size="small">
        {/* <Table styles={{maxWidth: 400}}> */}
            <TableHead>
                <TableRow>
                    <TableCell className={classes.head}>
                    Head
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {tasks.map(task =>
                    <TaskPreview key={task._id} task={task} id={task._id} />
                )}
            </TableBody>
        </Table>
    )
}