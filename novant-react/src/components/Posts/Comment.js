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
  },
  commentText: {
    wordWrap: 'break-word',
    textAlign: 'left',
    marginTop: '0px',
    paddingTop: '0px',
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
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.root}>
      <Avatar aria-label='recipe' variant='rounded' className={classes.rounded}>
        H
      </Avatar>
      <div className={classes.commentBody}>
        <h5 className={classes.commentUserName}>Hamza Safraou</h5>
        <p className={classes.commentText}>
          lorem
          hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh
        </p>
      </div>
    </div>
  );
}
