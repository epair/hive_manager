import React from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

import { HivesTable } from './HivesTable'

export const HivesPage = () => {
  return (
    <Grid item xs={12}>
      <Fab
        variant="extended"
        color="secondary"
        size="small"
        aria-label="add"
        component={Link}
        to={'/new_hive'}
      >
        <AddIcon />
        Add Hive
      </Fab>
      <HivesTable />
    </Grid>
  )
}
