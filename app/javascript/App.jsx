import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

import { MenuBar } from './app/MenuBar'
import { PrivateRoute } from './app/PrivateRoute'
import { SignInForm } from './features/user/SignInForm'
import { HivesPage } from './features/hives/HivesPage'
import { HiveForm } from './features/hives/HiveForm'
import { InspectionsPage } from './features/inspections/InspectionsPage'
import { InspectionForm } from './features/inspections/InspectionForm'
import Alert from './features/alerts/Alert'

const useStyles = makeStyles(() => ({
  root: {
    margin: '24px'
  }
}));

export const App = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <MenuBar/>
      <Alert/>
      <div className={classes.root}>
        <Switch>
          <PrivateRoute exact path="/" component={HivesPage} />
          <PrivateRoute exact path="/hives/:hiveId" component={InspectionsPage} />
          <PrivateRoute exact path="/hive/:hiveId/new_inspection" component={InspectionForm} />
          <PrivateRoute exact path="/new_hive" component={HiveForm} />
          <Route exact path="/sign_in" component={SignInForm} />
        </Switch>
      </div>
    </React.Fragment>
  );
}
