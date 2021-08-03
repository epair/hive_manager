import React from 'react';
import Grid from '@material-ui/core/Grid';

import InspectionsTable from './InspectionsTable'

export default function InspectionsPage() {
  return (
    <Grid item xs={12}>
      <InspectionsTable inspections={props.inspections} />
    </Grid>
  )
}
