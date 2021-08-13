import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

import { InspectionsTable } from './InspectionsTable'

export const InspectionsPage = () => {
  const { hiveId } = useParams()
  return (
    <Grid item xs={12}>
      <Fab
        variant="extended"
        color="secondary"
        size="small"
        aria-label="add"
        component={Link}
        to={`/hive/${hiveId}/new_inspection`}
      >
        <AddIcon />
        Add Inspection
      </Fab>

      <InspectionsTable />
    </Grid>
  )
}
