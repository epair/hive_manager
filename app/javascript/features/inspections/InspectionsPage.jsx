import React from 'react';
import Grid from '@material-ui/core/Grid';

import { InspectionsTable } from './InspectionsTable'

export const InspectionsPage = () => {
  return (
    <Grid item xs={12}>
      <InspectionsTable />
    </Grid>
  )
}
