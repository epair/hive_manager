import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'

import { login } from './currentUserSlice'

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
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('idle');

  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch()

  const canLogin =
    [email, password].every(Boolean) && loginStatus === 'idle'


  const onLoginClick = async () => {
    if (canLogin) {
      try {
        setLoginStatus('pending')
        const resultAction = await dispatch(
          login({ email, password })
        )
        unwrapResult(resultAction)
        localStorage.setItem('token', resultAction.payload.token)
        setEmail('')
        setPassword('')
        history.push('/')
      } catch (err) {
        console.error('Failed to login: ', err)
      } finally {
        setLoginStatus('idle')
      }
    }
  };

  return (
    <Grid className={classes.root} container justifyContent="center">
      <Grid className={classes.title} item xs={12}>
        <Typography variant="h3" gutterBottom>Sign In</Typography>
      </Grid>
      <form className={classes.form}>
        <Grid className={classes.field} item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            id="email"
            name="email"
            label="Email"
            onChange={(event) => setEmail(event.target.value)}
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
            onChange={(event) => setPassword(event.target.value)}
          />
        </Grid>
        <Grid className={classes.submitButton} item xs={12}>
          <Button
            fullWidth
            color="primary"
            variant="contained"
            type="submit"
            disabled={!canLogin}
            onClick={onLoginClick}
          >
            Sign in
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};
