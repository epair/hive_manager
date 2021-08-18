import React from 'react'
import { TextField as MuiTextField } from '@material-ui/core';

export const TextField = ({ value, label, formik, ...rest }) => {
  return (
    <MuiTextField
      fullWidth
      variant="outlined"
      id={value}
      name={value}
      label={label}
      onChange={formik.handleChange}
      value={formik.values[value]}
      helperText={formik.touched[value] && formik.errors[value]}
      error={formik.touched[value] && Boolean(formik.errors[value])}
      {...rest}
    />
  )
}
