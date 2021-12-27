import React from 'react';
import { Typography, Container } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import Paper from '@material-ui/core/Paper';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { useState } from 'react';
import List from '@material-ui/core/List';
import { useApi } from '../../hooks/useApi';
import { createBrowserHistory } from 'history';
import authService from '../../services/auth.service';
export const history = createBrowserHistory();
const preventDefault = (event) => event.preventDefault();
const useStyles = makeStyles((theme) => ({
  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',

    cursor: 'pointer',
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  margin: {
    display: 'flex',
    margin: theme.spacing(2),
    flexDirection: 'column',
  },
  margin2: {
    margin: theme.spacing(2),
  },
}));

export default function Groups() {
  const classes = useStyles();
  const currentuser = authService.getCurrentUser();
  const userid = currentuser['id'];
  const [groupProf, err, reload] = useApi('groups/grouplist/' + userid);

  console.log(groupProf);
  return (
    <>
      <List style={{ display: 'flex', flexWrap: 'wrap', width: '100%' }}>
        {groupProf?.map((msg, index) => (
          <ListItem style={{ flex: '50%' }}>
            <Avatar
              style={{ marginTop: '10px' }}
              aria-label='recipe'
              variant='rounded'
              className={classes.rounded}
              src={'https://mycubicle.herokuapp.com/uploads/' + msg.groupimage}
            ></Avatar>

            <Typography className={classes.margin}>
              <Link
                onClick={() => {
                  history.push('/GroupProfile/' + msg._id);
                  window.location.reload();
                }}
                style={{ fontWeight: 'bold', color: '#050505' }}
              >
                {msg.groupname}
              </Link>
              <Link
                href='#'
                onClick={preventDefault}
                style={{ fontSize: '12px', color: 'grey' }}
              >
                {' '}
                last active 2 days ago
              </Link>
            </Typography>
            <div>
              <br></br>
              <IconButton aria-label='settings'>
                <MoreHorizIcon />
              </IconButton>
            </div>
          </ListItem>
        ))}
      </List>
    </>
  );
}
