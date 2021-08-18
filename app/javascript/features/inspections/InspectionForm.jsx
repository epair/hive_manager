import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import FormLabel from '@material-ui/core/FormLabel'
import RadioGroup from '@material-ui/core/RadioGroup'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import InputLabel from '@material-ui/core/InputLabel'

import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { unwrapResult } from '@reduxjs/toolkit'
import { useFormik } from 'formik';
import { useParams } from "react-router-dom";
import * as yup from 'yup';

import { Checkbox } from '../components/Checkbox';
import { Radio } from '../components/Radio';
import { Button } from '../components/Button';
import { TextField } from '../components/TextField';
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
              value="date"
              label="Inspection Date"
              type="date"
              className={classes.textField}
              formik={formik}
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
                <Radio value="needs_attention" label="Needs Attention" />
                <Radio value="healthy" label="Healthy" />
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
                <Radio value="low" label="Low" />
                <Radio value="moderate" label="Moderate" />
                <Radio value="high" label="High" />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <TextField
              value="number_of_boxes"
              label="Number of Boxes"
              type="number"
              formik={formik}
              className={classes.textField}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormLabel component="legend">Brood Present?</FormLabel>
            <Checkbox formik={formik} name="egg_brood" label="Eggs"/>
            <Checkbox formik={formik} name="larvae_brood" label="Larvae"/>
            <Checkbox formik={formik} name="capped_brood" label="Capped"/>
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <TextField
              value="number_of_frames"
              label="Number of Frames"
              type="number"
              className={classes.textField}
              formik={formik}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={6} className={classes.field}>
            <FormLabel component="legend">Alerts & Events</FormLabel>
            <Checkbox formik={formik} name="potential_swarm" label="Potential Swarm"/>
            <Checkbox formik={formik} name="feeder" label="Feeder"/>
          </Grid>
          <Grid item xs={12} className={classes.field}>
            <TextField
              value="notes"
              label="Notes"
              multiline
              className={classes.notesField}
              rows={4}
              variant="outlined"
              formik={formik}
            />
          </Grid>

          <Button text="Create Inspection" className={classes.submitButton} xs={12}/>
        </Grid>
      </form>
    </React.Fragment>
  );
};
