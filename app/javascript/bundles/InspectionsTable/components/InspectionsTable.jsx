import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function InspectionsTable(inspections) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell align="right">Honey Stores</TableCell>
            <TableCell align="right">Queen Status</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Number of Frames</TableCell>
            <TableCell align="right">Number of Boxes</TableCell>
            <TableCell align="right">Brood Present</TableCell>
            <TableCell align="right">Feeder</TableCell>
            <TableCell align="right">Potential Swarm</TableCell>
            <TableCell align="right">Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.values(inspections).map((inspection) => (
            <TableRow key={inspection.id}>
              <TableCell component="th" scope="row">
                {inspection.date}
              </TableCell>
              <TableCell align="right">{inspection.honey_stores}</TableCell>
              <TableCell align="right">{inspection.queen_status}</TableCell>
              <TableCell align="right">{inspection.condition}</TableCell>
              <TableCell align="right">{inspection.number_of_frames}</TableCell>
              <TableCell align="right">{inspection.number_of_boxes}</TableCell>
              <TableCell align="right">{inspection.brood.join(", ")}</TableCell>
              <TableCell align="right">{inspection.feeder ? "Yes" : "No"}</TableCell>
              <TableCell align="right">{inspection.potential_swarm ? "Yes" : "No"}</TableCell>
              <TableCell align="right">{inspection.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
