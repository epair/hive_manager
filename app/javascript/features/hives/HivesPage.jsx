import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import HivesTable from './HivesTable'

export default function HivesPage() {
  return (
    <Grid item xs={12}>
      <Fab
        variant="extended"
        color="secondary"
        size="small"
        aria-label="add"
      >
        <AddIcon />
        Add Hive
      </Fab>
      <HivesTable />
    </Grid>
  )
}
