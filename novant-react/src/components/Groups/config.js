import {
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from '@material-ui/core';
import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { fade, makeStyles } from '@material-ui/core/styles';
import { Field, Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Col, Container, Row } from 'react-bootstrap';
import { Label } from '@material-ui/icons';
import Fade from '@material-ui/core/Fade';
import groupService from '../../services/group-service';
import axios from 'axios';
import { useApi } from '../../hooks/useApi';
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();

const useStyles = makeStyles((theme) => ({
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },

    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
    },
  },
  searchIcon: {
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    // vertical padding + font size from searchIcon

    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    height: '150px',
    width: '300px',
    backgroundColor: theme.palette.background.paper,
    border: '2px  #000',
    borderRadius: '20px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Config(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = () => {
    axios
      .delete('https://the-cubicle.herokuapp.com/groups/delete/' + props.id, {})

      .then(() => {
        history.push('/Groupe');
        window.location.reload();
      });
  };

  return (
    <div style={{ height: '500px' }}>
      <Card style={{ height: '340px' }}>
        <div>
          <CardContent>
            <Formik
              initialValues={{ groupname: props.nom, description: props.desc }}
              validationSchema={Yup.object().shape({})}
              onSubmit={(values, { setSubmitting }) => {
                groupService
                  .editgrp(values.groupname, values.description, props.id)
                  .then(() => {
                    window.location.reload();
                  });
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                validatefield,
                /* and other goodies */
              }) => (
                <Form
                  onSubmit={handleSubmit}
                  isSubmitting={isSubmitting}
                  validatefield={validatefield}
                  errors={errors}
                  touched={touched}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={3}>
                      <Typography>
                        <b>Group name :</b>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={9}>
                      <Field
                        style={{ width: '100%' }}
                        type='text'
                        name='groupname'
                        id='groupname'
                        onChange={handleChange}
                        initialValues={props.nom}
                        onBlur={handleBlur}
                        value={values.groupname}
                        placeholder={props.nom}
                        component={TextField}
                        error={errors.groupname ? true : false}
                        helperText={errors.groupname && errors.groupname}
                      />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Divider variant='fullWidth' />
                    </Grid>

                    <Grid item xs={12} md={3}>
                      <Typography>
                        <b>Description :</b>
                      </Typography>
                    </Grid>

                    <Grid item xs={12} md={9}>
                      <Field
                        style={{ width: '100%' }}
                        type='text'
                        name='description'
                        id='description'
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.description}
                        placeholder={props.desc}
                        rowsMin={5}
                        component={TextareaAutosize}
                        error={errors.description ? true : false}
                        helperText={errors.description && errors.description}
                      />
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Divider variant='fullWidth' />
                    </Grid>

                    <Button type='submit' variant='contained' color='primary'>
                      Confirm
                    </Button>
                  </Grid>
                </Form>
              )}
            </Formik>
          </CardContent>
        </div>
        <div>
          <Button
            style={{ marginLeft: '680px' }}
            variant='contained'
            color='secondary'
            onClick={handleOpen}
          >
            Delete Group
          </Button>
        </div>
        <Modal
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={open}>
            <div
              className={classes.paper}
              style={{ display: 'flex', flexDirection: 'row' }}
            >
              <div>
                <Typography style={{ color: 'primary' }}>
                  <b>You want to delete this group permanently.Are you sure?</b>
                </Typography>
                <br></br>
                <div></div>{' '}
                <Button
                  onClick={handleDelete}
                  variant='contained'
                  color='primary'
                  size='large'
                  style={{ borderRadius: '12px', marginLeft: '20px' }}
                >
                  Yes
                </Button>
                <Button
                  onClick={handleClose}
                  variant='outlined'
                  size='large'
                  className={classes.margin}
                  style={{ marginLeft: '32px', borderRadius: '12px' }}
                >
                  No
                </Button>
              </div>
            </div>
          </Fade>
        </Modal>
      </Card>
    </div>
  );
}

export default Config;
