import React from 'react';
import { FormControlLabel, Checkbox as MuiCheckbox } from '@material-ui/core';

export const Checkbox = ({ formik, name, label, ...rest }) => {
  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          name={name}
          color="primary"
          checked={formik.values[name]}
          onChange={formik.handleChange}
        />
      }
      label={label}
      {...rest}
    />
  )
}
