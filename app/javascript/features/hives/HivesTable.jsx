import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { HiveRow } from './HiveRow'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export const HivesTable = () => {
  const classes = useStyles();
  const hives = useSelector((state) => state.hives)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Hive Name</TableCell>
            <TableCell align="right">Honey Stores</TableCell>
            <TableCell align="right">Queen Status</TableCell>
            <TableCell align="right">Condition</TableCell>
            <TableCell align="right">Number of Frames</TableCell>
            <TableCell align="right">Number of Boxes</TableCell>
            <TableCell align="right">Brood Present</TableCell>
            <TableCell align="right">Feeder</TableCell>
            <TableCell align="right">Potential Swarm</TableCell>
            <TableCell align="right">Address</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {hives.map((hive) => (
            <HiveRow {...hive} key={hive.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
