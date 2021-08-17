import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Radio from '@material-ui/core/Radio'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'
import Checkbox from '@material-ui/core/Checkbox';

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";
import * as yup from 'yup';

import { Button } from '../components/Button';
import { addNewInspection } from './inspectionsSlice'
import { setAlert } from '../alerts/reducer'

const validationSchema = yup.object({
  number_of_boxes: yup.number().integer().min(0).max(3),
  number_of_frames: yup.number().integer().min(0),
  date: yup.date()
});

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  field: {
    padding: '5px',
    textAlign: 'center'
  },
  textField: {
    width: '85%'
  },
  notesField: {
    width: '100%'
  },
  submitButton: {
    padding: '20px 0 0 0'
  },
  selectField: {
    minWidth: 120,
    width: '85%'
  }
}));

export const InspectionForm = () => {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch()
  const { hiveId } = useParams()

  const formik = useFormik({
    initialValues: {
      date: '',
      condition: '',
      queen_status: '',
      honey_stores: '',
      number_of_frames: 0,
      number_of_boxes: 0,
      egg_brood: false,
      larvae_brood: false,
      capped_brood: false,
      potential_swarm: false,
      feeder: false,
      notes: ''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      onCreateInspectionClick(values)
    },
  });

  const onCreateInspectionClick = async (values) => {
    try {
      const resultAction = await dispatch(
        addNewInspection({ ...values, hive_id: hiveId })
      )
      unwrapResult(resultAction)
      history.push(`/hives/${hiveId}`)
    } catch (err) {
      dispatch(setAlert(err))
    }
  };

  return (
    <React.Fragment>
      <Typography variant="h3" gutterBottom>Create Inspection</Typography>
      <form onSubmit={formik.handleSubmit}>
        <Grid container className={classes.form}>
          <Grid item xs={6} className={classes.field}>
            <TextField
              id="date"
              label="Inspection Date"
              type="date"
              className={classes.textField}
              value={formik.values.date}
              onChange={formik.handleChange}
              helperText={formik.touched.date && formik.errors.date}
              error={formik.touched.date && Boolean(formik.errors.date)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormControl
              component="fieldset"
              name="condition"
              onChange={formik.handleChange}
              value={formik.values.condition}
            >
              <FormLabel component="legend">Condition</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  value="needs_attention"
                  control={<Radio color="primary" />}
                  label="Needs Attention"
                />
                <FormControlLabel
                  value="healthy"
                  control={<Radio color="primary" />}
                  label="Healthy"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormControl className={classes.selectField}>
              <InputLabel>Queen Status</InputLabel>
              <Select
                name="queen_status"
                value={formik.values.queen_status}
                onChange={formik.handleChange}
              >
                <MenuItem value={'right'}>Right</MenuItem>
                <MenuItem value={'laying_workers'}>Laying Workers</MenuItem>
                <MenuItem value={'caged'}>Caged</MenuItem>
                <MenuItem value={'virgin'}>Virgin</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormControl
              component="fieldset"
              name="honey_stores"
              onChange={formik.handleChange}
              value={formik.values.honey_stores}
            >
              <FormLabel component="legend">Honey Stores</FormLabel>
              <RadioGroup row aria-label="position" name="position" defaultValue="top">
                <FormControlLabel
                  value="low"
                  control={<Radio color="primary" />}
                  label="Low"
                />
                <FormControlLabel
                  value="moderate"
                  control={<Radio color="primary" />}
                  label="Moderate"
                />
                <FormControlLabel
                  value="high"
                  control={<Radio color="primary" />}
                  label="High"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <TextField
              id="number_of_boxes"
              label="Number of Boxes"
              type="number"
              className={classes.textField}
              value={formik.values.number_of_boxes}
              onChange={formik.handleChange}
              helperText={formik.touched.number_of_boxes && formik.errors.number_of_boxes}
              error={formik.touched.number_of_boxes && Boolean(formik.errors.number_of_boxes)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormLabel component="legend">Brood Present?</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  name="egg_brood"
                  color="primary"
                  checked={formik.values.egg_brood}
                  onChange={formik.handleChange}
                />
              }
              label="Eggs"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="larvae_brood"
                  color="primary"
                  checked={formik.values.larvae_brood}
                  onChange={formik.handleChange}
                />
              }
              label="Larvae"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="capped_brood"
                  color="primary"
                  checked={formik.values.capped_brood}
                  onChange={formik.handleChange}
                />
              }
              label="Capped"
            />
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <TextField
              id="number_of_frames"
              label="Number of Frames"
              type="number"
              className={classes.textField}
              value={formik.values.number_of_frames}
              onChange={formik.handleChange}
              helperText={formik.touched.number_of_frames && formik.errors.number_of_frames}
              error={formik.touched.number_of_frames && Boolean(formik.errors.number_of_frames)}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormLabel component="legend">Alerts & Events</FormLabel>
            <FormControlLabel
              control={
                <Checkbox
                  name="potential_swarm"
                  color="primary"
                  checked={formik.values.potential_swarm}
                  onChange={formik.handleChange}
                />
              }
              label="Potential Swarm"
            />
            <FormControlLabel
              control={
                <Checkbox
                  name="feeder"
                  color="primary"
                  checked={formik.values.feeder}
                  onChange={formik.handleChange}
                />
              }
              label="Feeder"
            />
          </Grid>
          <Grid item xs={12} className={classes.field}>
            <TextField
              id="notes"
              label="Notes"
              multiline
              className={classes.notesField}
              rows={4}
              value={formik.values.notes}
              onChange={formik.handleChange}
              variant="outlined"
            />
          </Grid>

          <Button text="Create Inspection" className={classes.submitButton} xs={12}/>
        </Grid>
      </form>
    </React.Fragment>
  );
};
