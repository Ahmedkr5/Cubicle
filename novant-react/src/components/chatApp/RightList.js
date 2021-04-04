import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Paper from '@material-ui/core/Paper';
import Badge from '@material-ui/core/Badge';
import TextField from '@material-ui/core/TextField';


const StyledBadgeMessages = withStyles((theme) => ({
    badge: {
        right: 0,
        top: 0,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 0px',
    },

}))(Badge);
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


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        width: '100%',
        height: '600px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    rad: {
        borderRadius: 10,
    },
}));

export default function RecipeReviewCard() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <>
            <div  style={{ paddingTop: '20px' }}>
                <Paper elevation={0} className={classes.root} >
                    <Card elevation={0} className={classes.root}>
                        <CardContent>
                        <TextField id="standard-basic" label="Search" style={{width:'100%'}} />
                        </CardContent>
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <div className={classes.root} >




                                    <List component="nav" aria-label="main mailbox folders" >

                                        <ListItem
                                            button
                                        >
                                            <ListItemAvatar>
                                                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                                    <Avatar variant='rounded' src={`../assets/images/users/1.jpg`} className={classes.rad} />
                                                </StyledBadge>
                                            </ListItemAvatar>
                                            <ListItemText primary="Bouzid Mohamed" />
                                            <ListItemSecondaryAction>
                                                <StyledBadgeMessages badgeContent={4} color="secondary"></StyledBadgeMessages>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem button >
                                            <ListItemAvatar>
                                                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left' }} >
                                                    <Avatar variant='rounded' src={`../assets/images/users/2.jpg`} className={classes.rad} />
                                                </StyledBadge>
                                            </ListItemAvatar>
                                            <ListItemText primary="Bouzid Mohamed" />
                                            <ListItemSecondaryAction>
                                                <StyledBadgeMessages badgeContent={2} color="secondary"></StyledBadgeMessages>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <ListItem
                                            button

                                        >
                                            <ListItemAvatar>
                                                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left' }} >
                                                    <Avatar variant='rounded' className={classes.rad} src={`../assets/images/users/4.jpg`} />
                                                </StyledBadge>
                                            </ListItemAvatar>
                                            <ListItemText primary="Bouzid Mohamed" />
                                            <ListItemSecondaryAction>
                                                <StyledBadgeMessages badgeContent={6} color="secondary"></StyledBadgeMessages>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    </List>

                                </div>

                            </Typography>
                        </CardContent>


                    </Card>
                </Paper>
            </div>
        </>
    );
}
