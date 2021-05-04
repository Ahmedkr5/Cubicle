import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexBasis: '100%',
    marginBottom: '10px',
    width: 'inherit',
  },

  rounded: {
    color: '#fff',
    height: '40px',
    width: '40px',
    backgroundColor: red[500],
    cursor: 'pointer',
  },
  commentBody: {
    backgroundColor: '#F0F2F5',
    marginLeft: '10px',
    padding: '0px 15px',
    borderRadius: '15px',
    overflow: 'auto',
    width: 'inherit',
  },
  commentText: {
    wordWrap: 'break-word',
    textAlign: 'left',
    marginTop: '0px',
    paddingTop: '0px',
    width: 'inherit',
  },
  commentUserName: {
    textAlign: 'left',
    marginBottom: '0px',
    paddingBottom: '0px',
    marginTop: '2px',
    paddingTop: '2px',
    cursor: 'pointer',
  },
  p: {
    color: '#000',
    margin: '0px',
    padding: '0px',
    textAlign: 'left',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      color: '#000',
    },
  },
}));

const preventDefault = (event) => event.preventDefault();

export default function Comment(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar aria-label='recipe' variant='rounded' className={classes.rounded}>
        H
      </Avatar>
      <div className={classes.commentBody}>
        <h5 className={classes.commentUserName}>
          <a href='#' onClick={preventDefault} className={classes.p}>
            <strong>
              <span>
                {' '}
                {props?.comment?.user?.firstname}{' '}
                {props?.comment?.user?.lastname}{' '}
              </span>
            </strong>
          </a>
          <a href='#' onClick={preventDefault} className={classes.p}>
            <span> {props?.comment?.created_at} </span>
          </a>
        </h5>
        <p className={classes.commentText}>{props?.comment?.description}</p>
      </div>
    </div>
  );
}
