import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useFormik } from 'formik';
import * as yup from 'yup';

import { login } from './currentUserSlice'
import { setAlert } from '../alerts/reducer'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .required('Password is required'),
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  form: {
    width: '280px'
  },
  field: {
    padding: '5px'
  },
  submitButton: {
    padding: '20px 0 0 0'
  },
  title: {
    'text-align': 'center'
  }
}));

export const SignInForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onLoginClick(values.email, values.password)
    },
  });

  const onLoginClick = async (email, password) => {
    try {
      const resultAction = await dispatch(
        login({ email, password })
      )
      unwrapResult(resultAction)
      localStorage.setItem('token', resultAction.payload.token)
      history.push('/')
    } catch (err) {
      dispatch(setAlert(err))
    }
  };

  return (
    <Grid className={classes.root} container justifyContent="center">
      <Grid className={classes.title} item xs={12}>
        <Typography variant="h3" gutterBottom>Sign In</Typography>
      </Grid>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <Grid className={classes.field} item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
            helperText={formik.touched.email && formik.errors.email}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
        </Grid>
        <Grid className={classes.field} item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            id="password"
            name="password"
            label="Password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            helperText={formik.touched.password && formik.errors.password}
            error={formik.touched.password && Boolean(formik.errors.password)}
          />
        </Grid>
        <Grid className={classes.submitButton} item xs={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
          >
            Sign in
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
