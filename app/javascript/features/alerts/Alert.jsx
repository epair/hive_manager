import React, { useEffect, useState } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';

import { clearAlert } from './reducer'

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function ErrorAlert() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const dispatch = useDispatch()
  const shouldRender = useSelector((state) => state.alerts.error)
  const errorMessage = useSelector((state) => state.alerts.message)

  useEffect(() => {
    if (shouldRender) {
      setOpen(true)
    }
  }, [shouldRender])

  const handleClose = (_, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(clearAlert())
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          {errorMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
