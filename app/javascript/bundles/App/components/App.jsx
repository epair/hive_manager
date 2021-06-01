import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

import MenuBar from '../../MenuBar/components/MenuBar'
import HivesTable from '../../HivesTable/components/HivesTable'
import InspectionsTable from '../../InspectionsTable/components/InspectionsTable'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 8
  }
}));

export default function App(props) {
  const classes = useStyles();

  return (
    <Router>
      <MenuBar
        current_user={props.current_user}
        signed_in={props.signed_in}
      />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Switch>
            <Route exact path="/">
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
            </Route>
            <Route path="/hives/:hive_id">
              <Grid item xs={12}>
                <InspectionsTable inspections={props.inspections} />
              </Grid>
            </Route>
          </Switch>
        </Grid>
      </div>
    </Router>
  );
}
