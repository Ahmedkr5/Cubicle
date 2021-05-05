import React from 'react';
import ShowEditor from './ShowEditor';
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
    display: 'flex',
    flexDirection: 'column',
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

export default function UpdatedComment(props) {
  const classes = useStyles();
  var delta = Math.round((+new Date() - props?.comment?.created_at) / 1000);
  var minute = 60,
    hour = minute * 60,
    day = hour * 24,
    week = day * 7;

  var fuzzy;

  if (delta < 30) {
    fuzzy = 'just now.';
  } else if (delta < minute) {
    fuzzy = delta + ' seconds ago.';
  } else if (delta < 2 * minute) {
    fuzzy = 'a minute ago.';
  } else if (delta < hour) {
    fuzzy = Math.floor(delta / minute) + ' minutes ago.';
  } else if (Math.floor(delta / hour) == 1) {
    fuzzy = '1 hour ago.';
  } else if (delta < day) {
    fuzzy = Math.floor(delta / hour) + ' hours ago.';
  } else if (delta < day * 2) {
    fuzzy = 'yesterday';
  }

  console.log(props?.comment);
  return (
    <div className={classes.root}>
      <Avatar
        aria-label='recipe'
        variant='rounded'
        className={classes.rounded}
        src={
          'http://localhost:3001/uploads/' + props?.comment?.user?.profileimage
        }
      ></Avatar>
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
            <span> {fuzzy} </span>
          </a>
        </h5>
        <ShowEditor data={props?.comment?.description}></ShowEditor>
      </div>
    </div>
  );
}
