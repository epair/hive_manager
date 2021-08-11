import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useFormik } from 'formik';
import * as yup from 'yup';

import { addNewHive } from './hivesSlice'
import { setAlert } from '../alerts/reducer'

const validationSchema = yup.object({
  name: yup
    .string('Enter the hive name')
    .required('Hive Name is required'),
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  form: {
    width: '100%'
  },
  field: {
    padding: '5px'
  },
  submitButton: {
    padding: '20px 0 0 0'
  },
  selectField: {
    minWidth: 120,
  }
}));

export const HiveForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      name: '',
      installed_colony: false,
      breed: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onCreateHiveClick(values)
    },
  });

  const onCreateHiveClick = async (values) => {
    try {
      const resultAction = await dispatch(
        addNewHive(values)
      )
      unwrapResult(resultAction)
      history.push('/')
    } catch (err) {
      dispatch(setAlert(err))
    }
  };

  return (
    <Grid className={classes.root} container>
      <Grid className={classes.title} item xs={6}>
        <Typography variant="h3" gutterBottom>Create Hive</Typography>
      </Grid>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid className={classes.field} item xs={6}>
          <TextField
            fullWidth
            variant="outlined"
            id="name"
            name="name"
            label="Name"
            onChange={formik.handleChange}
            value={formik.values.name}
            helperText={formik.touched.name && formik.errors.name}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
        </Grid>
        <Grid className={classes.field} item xs={6}>
          <FormControlLabel
            control={
              <Checkbox
                name="installed_colony"
                color="primary"
                checked={formik.values.installed_colony}
                onChange={formik.handleChange}
              />
            }
            label="Installed Colony Already?"
          />
        </Grid>
        {formik.values.installed_colony &&
          <Grid className={classes.field} item xs={6}>
            <FormControl className={classes.selectField}>
              <InputLabel>Queen Breed</InputLabel>
              <Select
                name="breed"
                value={formik.values.breed}
                onChange={formik.handleChange}
              >
                <MenuItem value={'italian'}>Italian</MenuItem>
                <MenuItem value={'russian'}>Russian</MenuItem>
                <MenuItem value={'carniolan'}>Carniolan</MenuItem>
                <MenuItem value={'saskatraz'}>Saskatraz</MenuItem>
                <MenuItem value={'home_grown'}>Home Grown</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        }
        <Grid className={classes.submitButton} item xs={6}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
          >
            Create Hive
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
