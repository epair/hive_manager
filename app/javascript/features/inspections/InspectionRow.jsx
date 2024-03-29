import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const InspectionRow = (props) => {
  return (
    <TableRow key={props.id}>
      <TableCell component="th" scope="row">
        {props.date}
      </TableCell>
      <TableCell align="right">{props.honey_stores}</TableCell>
      <TableCell align="right">{props.queen_status}</TableCell>
      <TableCell align="right">{props.condition}</TableCell>
      <TableCell align="right">{props.number_of_frames}</TableCell>
      <TableCell align="right">{props.number_of_boxes}</TableCell>
      <TableCell align="right">{props.brood.join(", ")}</TableCell>
      <TableCell align="right">{props.feeder ? "Yes" : "No"}</TableCell>
      <TableCell align="right">{props.potential_swarm ? "Yes" : "No"}</TableCell>
      <TableCell align="right">{props.notes}</TableCell>
    </TableRow>
  );
}
