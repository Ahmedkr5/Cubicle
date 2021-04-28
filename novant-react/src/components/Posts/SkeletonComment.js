import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import Skeleton from '@material-ui/lab/Skeleton';

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
    width: '100%',
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
}));

export default function Comment() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Skeleton
        animation='wave'
        variant='rect'
        width={40}
        height={40}
        style={{ borderRadius: '5px' }}
      />
      <div className={classes.commentBody}>
        <Skeleton
          animation='wave'
          height={20}
          width={'30%'}
          className={classes.p}
        />
        <p className={classes.commentText}>
          <Skeleton animation='wave' height={20} width={'100%'} />
          <Skeleton animation='wave' height={20} width={'100%'} />
          <Skeleton animation='wave' height={20} width={'100%'} />
        </p>
      </div>
    </div>
  );
}
