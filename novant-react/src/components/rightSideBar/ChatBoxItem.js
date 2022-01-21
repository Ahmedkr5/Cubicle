import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import authService from '../../services/auth.service';
const useStyles = makeStyles((theme) => ({
  rad: {
    borderRadius: 8,
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));

export default function ChatBoxItem(props) {
  const currentuser = authService.getCurrentUser();
  const classes = useStyles();

  return (
    <>
      <div className='blockMessageSecond'>
        <div className='authorthumb'>
          <Avatar
            variant='rounded'
            src={'https://the-cubicle.herokuapp.com/uploads/' + props.img}
            className={classes.rad}
          />
        </div>
        <span className='chatmessageitem spanMessage'>
          Hi James! Please remember to buy the food for tomorrow! I’m gonna be
          handling the gifts and Jake’s gonna get the drinks
        </span>
        <div className='notification-date'>
          <span>Yesterday at 8:10pm</span>
        </div>
      </div>

      <div className='blockMessage'>
        <div className='authorthumbrecept'>
          <Avatar
            variant='rounded'
            src={
              'https://the-cubicle.herokuapp.com/uploads/' +
              currentuser?.profileimage
            }
            className={classes.rad}
          />
        </div>
        <span className='chatmessageitemrecept spanMessagerecept'>
          Hi James! Please remember to buy the food for tomorrow!{' '}
        </span>
      </div>
    </>
  );
}
