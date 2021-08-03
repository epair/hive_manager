import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MenuBar from './MenuBar'
import HivesTable from './HivesTable'
import InspectionsTable from './InspectionsTable'
import SignInForm from './SignInForm'
import PrivateRoute from '../auth/PrivateRoute'
import { ProvideAuth } from '../auth/useAuth'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '24px'
  }
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <ProvideAuth>
      <Router>
        <MenuBar/>
        <div className={classes.root}>
          <Switch>
            <PrivateRoute exact path="/">
              <Grid item xs={12}>
                <Fab
                  variant="extended"
                  color="secondary"
                  size="small"
                  aria-label="add"
                >
                  <AddIcon />
                  Add Hive
                </Fab>
                <HivesTable className={classes.table} hives={props.hives} />
              </Grid>
            </PrivateRoute>
            <PrivateRoute path="/hives/:hive_id">
              <Grid item xs={12}>
                <InspectionsTable inspections={props.inspections} />
              </Grid>
            </PrivateRoute>
            <Route path="/sign_in">
              <SignInForm />
            </Route>
          </Switch>
        </div>
      </Router>
    </ProvideAuth>
  );
}
