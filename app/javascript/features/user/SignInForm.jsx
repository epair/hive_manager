import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useFormik } from 'formik';
import * as yup from 'yup';

import { Button } from '../components/Button'
import { TextField } from '../components/TextField'
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
          <TextField value="email" label="Email" formik={formik}/>
        </Grid>
        <Grid className={classes.field} item xs={12}>
          <TextField value="password" label="Password" type="password" formik={formik}/>
        </Grid>
        <Button text="Sign In" className={classes.submitButton} xs={12}/>
      </form>
    </Grid>
  );
};
