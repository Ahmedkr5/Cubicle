import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({


    rad: {
        borderRadius: 8,
        width: theme.spacing(4),
        height: theme.spacing(4),


    },

}));

export default function ChatBoxItem() {
    const classes = useStyles();

    return (
        <>
            <div className='blockMessageSecond'>
                <div className='authorthumb' >
                    <Avatar variant='rounded' src={`../assets/images/users/1.jpg`} className={classes.rad} />
                </div>
                <span className='chatmessageitem spanMessage'>Hi James! Please remember to buy the food for tomorrow! I’m gonna be handling the gifts and Jake’s gonna get the drinks</span>
                <div className="notification-date">
                    <span >Yesterday at 8:10pm</span>
                </div>
            </div>

            <div className='blockMessage'>
                <div className='authorthumbrecept' >
                    <Avatar variant='rounded' src={`../assets/images/users/5.jpg`} className={classes.rad} />
                </div>
                <span className='chatmessageitemrecept spanMessagerecept'>Hi James! Please remember to buy the food for tomorrow! </span>
            </div>

            <div className='blockMessageSecond'>
                <div className='authorthumbrecept' >
                </div>
                <span className='chatmessageitemrecept spanMessagerecept'>I’m gonna be handling the gifts  </span>
                <div className="notification-daterecept">
                    <span >Yesterday at 8:10pm</span>
                </div>
            </div>

            <div className='blockMessage'>
                <div className='authorthumb' >
                    <Avatar variant='rounded' src={`../assets/images/users/1.jpg`} className={classes.rad} />
                </div>
                <span className='chatmessageitem spanMessage'>Hi James! Please remember to buy the food for tomorrow! </span>
            </div>
        </>

    )
}