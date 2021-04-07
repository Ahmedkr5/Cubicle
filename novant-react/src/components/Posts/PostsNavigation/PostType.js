import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';

const useStyles = makeStyles((theme) => ({
  wrapper: {},
  button: {},
  icon: {},
  faFeed: {},
}));

export default function PostType() {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.button}>
        <div className={classes.icon}>
          <EmojiEmotionsOutlinedIcon></EmojiEmotionsOutlinedIcon>
        </div>
        <span>Feed</span>
      </div>
    </div>
  );
}
