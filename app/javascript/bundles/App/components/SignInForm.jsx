import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../auth/useAuth'

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

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  let history = useHistory();
  let auth = useAuth();

  let signin = (event) => {
    auth.login(email, password, () => history.push('/'));
    event.preventDefault();
  };

  return (
    <Grid className={classes.root} container justify="center">
      <Grid className={classes.title} item xs={12}>
        <Typography variant="h3" gutterBottom>Sign In</Typography>
      </Grid>
      <form className={classes.form} onSubmit={(e) => signin(e)}>
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
          >
            Sign in
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};