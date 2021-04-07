import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import PhoneOutlinedIcon from '@material-ui/icons/PhoneOutlined';
import '../../App.css';
import IconButton from '@material-ui/core/IconButton';
import VideocamIcon from '@material-ui/icons/Videocam';
import ChatBoxItem from './ChatBoxItem'
import ChatBoxFooter from './ChatBoxFooter';
import ReactDOM from 'react-dom';
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 300,
        height: 400,
        maxHeight: 400,
        borderTopLeftRadius:'15px',
        borderTopRightRadius:'15px',
    },
    rad: {
        borderRadius: 8,
        width: theme.spacing(4),
        height: theme.spacing(4),
    },
    media: {
        height: 140,
        maxHeight: 50,
        backgroundColor: 'lavender',
    },
    content: {
        height: 280,
        minHeight: 280,
        overflowY: 'scroll',

    },
    area: {
        display: 'inline',
    },
    headerIcons: {
        float: 'right',
        display: 'flex ',
        flexDirection: 'row',
        marginLeft: '50px',
    },
    chatfooter: {
        paddingTop: '5px',

        float: 'right',
        display: 'flex ',
        flexDirection: 'row',
    },
    Icon: {
        padding: '6px',
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
    const hideChatBox = () => {
        ReactDOM.render(<div></div>,  document.getElementById('global'));
        
    }


    
    return (
        <div style={{zIndex:'1', position : 'fixed' , bottom : '0'}}>
            <Card  className={classes.root}  >
            
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
                                <IconButton className={classes.Icon} aria-label="delete" color="secondary" onClick={()=>{window.open("/video")}}>
                                    <VideocamIcon fontSize='s-small' />
                                </IconButton>
                                <IconButton className={classes.Icon} aria-label="delete" onClick={hideChatBox}>
                                    <CloseIcon fontSize='small' />
                                </IconButton>
                            </div>
                        </div>
                    </CardMedia>
                    <CardContent className={classes.content}  >

                        <Typography variant="body2" color="textSecondary" component="p">
                            <ChatBoxItem />
                        </Typography>
                    </CardContent>
               
                <CardActions >
                    <ChatBoxFooter />
                </CardActions>
            </Card>
        </div>
    );
}
