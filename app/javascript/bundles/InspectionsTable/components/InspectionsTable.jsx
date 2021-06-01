import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useParams } from "react-router-dom";

import InspectionRow from './InspectionRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function InspectionsTable(props) {
  const { hive_id } = useParams();
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
          {props.inspections.filter((inspection) => inspection.hive_id == hive_id ).map((inspection) => (
            <InspectionRow {...inspection} key={inspection.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
