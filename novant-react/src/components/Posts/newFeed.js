import { Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import React, { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '15px',
    marginTop: '15px',
    backgroundColor: '#FFF',
    padding: '15px',
    marginLeft: 'auto',
    marginright: 'auto',
    width: '100%',
  },
  avatar: {
    backgroundColor: red[500],
  },
  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: red[500],
    cursor: 'pointer',
  },
  btn: {
    marginLeft: '15px',
    backgroundColor: '#F0F2F5',
    borderRadius: '15px',
    width: '100%',
    justifyItems: 'center',
  },
}));

export default function NewFeed() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Avatar aria-label='recipe' variant='rounded' className={classes.rounded}>
        H
      </Avatar>
      <Button className={classes.btn} variant='outlined'>
        Express yourself
      </Button>
    </div>
  );
}
