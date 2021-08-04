import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function HiveRow(props) {
  const classes = useStyles();

export const HiveRow = (props) => {
  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
        <Link component={RouterLink} to={`/hives/${props.id}`}>{props.name}</Link>
      </TableCell>
      <TableCell align="right">{props.honey_stores}</TableCell>
      <TableCell align="right">{props.queen_status}</TableCell>
      <TableCell align="right">{props.condition}</TableCell>
      <TableCell align="right">{props.number_of_frames}</TableCell>
      <TableCell align="right">{props.number_of_boxes}</TableCell>
      <TableCell align="right">{props.brood ? props.brood.join(", ") : ""}</TableCell>
      <TableCell align="right">{props.feeder ? "Yes" : "No"}</TableCell>
      <TableCell align="right">{props.potential_swarm ? "Yes" : "No"}</TableCell>
      <TableCell align="right">{props.one_line_address}</TableCell>
    </TableRow>
  );
}
