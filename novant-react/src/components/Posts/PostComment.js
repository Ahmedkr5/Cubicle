import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { red } from '@material-ui/core/colors';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

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
    padding: '1px 15px',
    borderRadius: '15px',
    overflow: 'auto',
    width: '100%',
  },
  commentText: {
    wordWrap: 'break-word',
    textAlign: 'left',
  },
  input: {
    float: 'left',
    marginRight: '0px',
    marginTop: '5px',
    width: '90%',
  },
  iconButton: {
    float: 'right',
    marginLeft: '0px',
  },
}));

export default function PostComment() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  return (
    <div className={classes.root}>
      <Avatar aria-label='recipe' variant='rounded' className={classes.rounded}>
        H
      </Avatar>
      <div className={classes.commentBody}>
        <InputBase
          className={classes.input}
          multiline
          placeholder='Proposez une solution...'
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton
          type='submit'
          className={classes.iconButton}
          aria-label='emoji'
        >
          <EmojiEmotionsOutlinedIcon />
        </IconButton>
      </div>
    </div>
  );
}
