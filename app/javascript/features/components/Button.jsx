import React from 'react';
import { Button as MuiButton, Grid } from '@material-ui/core';

export const Button = ({ text, ...rest }) => {
  return (
    <Grid {...rest} item>
      <MuiButton
        fullWidth
        color="primary"
        variant="contained"
        type="submit"
      >
        {text}
      </MuiButton>
    </Grid>
  )
}
