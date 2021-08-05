import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { MenuBar } from './app/MenuBar'
import { PrivateRoute } from './app/PrivateRoute'
import { SignInForm } from './features/user/SignInForm'
import { HivesPage } from './features/hives/HivesPage'
import { InspectionsPage } from './features/inspections/InspectionsPage'

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    margin: '24px'
  }
}));

export const App = () => {
  const classes = useStyles();

  return (
    <Router>
      <MenuBar/>
      <div className={classes.root}>
        <Switch>
          <PrivateRoute exact path="/" component={HivesPage} />
          <PrivateRoute exact path="/hives/:hive_id" component={InspectionsPage} />
          <Route exact path="/sign_in" component={SignInForm} />
        </Switch>
      </div>
    </Router>
  );
}
