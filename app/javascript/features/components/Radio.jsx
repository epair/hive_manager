import React from 'react';
import { FormControlLabel, Radio as MuiRadio } from '@material-ui/core'

export const Radio = ({ value, label }) => {
  return (
    <FormControlLabel
      control={<MuiRadio color="primary" />}
      value={value}
      label={label}
    />
  )
}
