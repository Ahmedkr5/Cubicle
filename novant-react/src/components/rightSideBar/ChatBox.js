import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import '../App.css';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import InputBase from '@material-ui/core/InputBase';
import EmojiEmotionsOutlinedIcon from '@material-ui/icons/EmojiEmotionsOutlined';



const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    height: 350,
    maxHeight: 350,

  },
  media: {
    height: 140,
    maxHeight: 50,

    backgroundColor: 'lavender',
  },

  content: {
    height: 200,
    minHeight: 200,
    overflowY: 'scroll',

  },
  area: {
    display: 'inline',
  },
  rad: {
    borderRadius: 8,
    width: theme.spacing(4),
    height: theme.spacing(4),


  },
  headerIcons: {
    float: 'right',
    display: 'flex ',
    flexDirection: 'row',
    marginLeft: '70px',

  },
  chatfooter:{

    float: 'right',
    display: 'flex ',
    flexDirection: 'row',

  },
  Icon: {

    padding: '6px',
  },

  input: {
    float: 'left',
    marginRight: '7px',
    marginTop: '5px',
    width: '90%',



  },
  iconButton: {
    float: 'right',
    marginLeft: '0px',
  
  },
  commentBody: {
    backgroundColor: '#F0F2F5',
    marginLeft: '10px',
    padding: '1px 15px',
    borderRadius: '15px',
    width: '60%',
    maxHeight: '40px'
  },

}));

const StyledBadge = withStyles((theme) => ({


  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },

  },

  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);



export default function ChatBox() {
  const classes = useStyles();

  return (
    <div style={{ marginLeft: "150px", marginTop: '100px' }}>
      <Card className={classes.root}  >
        <CardActionArea className={classes.Area} >
          <CardMedia className={classes.media}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div style={{ marginRight: '5px', marginLeft: '10px', marginTop: '10px' }}>
                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left' }} >
                  <Avatar variant='rounded' src={`../assets/images/users/1.jpg`} className={classes.rad} />
                </StyledBadge>
              </div>
              <div style={{ marginTop: '17px', marginLeft: '10px' }}>
                <span>Mohamed </span>

              </div>


              <div className={classes.headerIcons} >

                <IconButton className={classes.Icon} color="primary" size="small" aria-label="add an alarm">
                  <PhoneOutlinedIcon fontSize='small' />
                </IconButton>

                <IconButton className={classes.Icon} aria-label="delete" color="secondary" >
                  <VideocamIcon fontSize='s-small' />
                </IconButton>

                <IconButton className={classes.Icon} aria-label="delete">
                  <CloseIcon fontSize='small' />
                </IconButton>

              </div>
            </div>




          </CardMedia>
          <CardContent className={classes.content} >

            <Typography variant="body2" color="textSecondary" component="p">
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

            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <div className={classes.chatfooter}>
          <div className={classes.commentBody}>
            <InputBase
              className={classes.input}

              placeholder='Aa'
              inputProps={{ 'aria-label': 'search google maps' }}
            />

          </div>
          <div>  
          <IconButton
            type='submit'
            className={classes.iconButton}
            aria-label='emoji'
          
          >
        
           
            
            <EmojiEmotionsOutlinedIcon style={{ fontSize: 20 }} />
          </IconButton>
          </div>
          </div>
        </CardActions>
      </Card>
    </div>
  );
}
