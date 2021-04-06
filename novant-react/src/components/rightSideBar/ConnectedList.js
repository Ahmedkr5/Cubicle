import React, { useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Badge from '@material-ui/core/Badge';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListSubheader from '@material-ui/core/ListSubheader';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Contacts from './Contacts';

import ReactDOM from 'react-dom';
import ChatBox from './ChatBox';

const useStyles = makeStyles((theme) => ({
    root: {


        backgroundColor: theme.palette.background.paper,

        overflow: 'auto',
        marginTop: '15px',
        height: '68%',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
    },
    rad: {
        borderRadius: 10,

    },
    square: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: 'deepOrange[500]',
    },
    rounded: {


    },
}));
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
export default function ConnectedList() {


    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [searchActive, setSearchActive] = React.useState('none');





    const SearchAction = () => {
        setSearchActive('');
    }
    const activateChat1 = () => {
        ReactDOM.render(<div className='row d-flex flex-row-reverse  '><div className='col-3'  ><ChatBox /></div>  </div>  ,  document.getElementById('global'));
    }
    const activateChat2 = () => {
        ReactDOM.render(    <div className='row d-flex flex-row-reverse  '><div className='col-3'  style={{marginLeft:'95px'}}><ChatBox /></div> <div className='col-3'  ><ChatBox   /> </div></div>,  document.getElementById('global'));
    }




    return (
        <>




            <Contacts />
            <Paper elevation={0} className={classes.root} >
                <div className={classes.root} onScroll={SearchAction}>




                    <List component="nav" aria-label="main mailbox folders" >
                        <ListSubheader style={{ zIndex: '10', backgroundColor: 'white' }}>   <TextField id="primary" placeholder="Search" color="primary" style={{ display: searchActive }} /></ListSubheader>

                        <ListItem
                            button onClick={activateChat1 }

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
                        <ListItem
                            button onClick={activateChat2 }

                        >
                            <ListItemAvatar>
                                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                    <Avatar variant='rounded' src={`../assets/images/users/8.jpg`} className={classes.rad} />
                                </StyledBadge>
                            </ListItemAvatar>
                            <ListItemText primary="Bouzid Mohamed" />
                            <ListItemSecondaryAction>
                                <StyledBadgeMessages badgeContent={4} color="secondary"></StyledBadgeMessages>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem
                            button

                        >
                            <ListItemAvatar>
                                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                    <Avatar variant='rounded' src={`../assets/images/users/7.jpg`} className={classes.rad} />
                                </StyledBadge>
                            </ListItemAvatar>
                            <ListItemText primary="Bouzid Mohamed" />
                            <ListItemSecondaryAction>
                                <StyledBadgeMessages badgeContent={4} color="secondary"></StyledBadgeMessages>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <ListItem
                            button

                        >
                            <ListItemAvatar>
                                <StyledBadge overlap="circle" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot" anchorOrigin={{ vertical: 'top', horizontal: 'left', }} >
                                    <Avatar variant='rounded' src={`../assets/images/users/6.jpg`} className={classes.rad} />
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

                        </ListItem>
                        <ListItem
                            button

                        >
                            <ListItemAvatar>
                                <Avatar variant='rounded' src={`../assets/images/users/5.jpg`} className={classes.rad} />

                            </ListItemAvatar>
                            <ListItemText primary="Bouzid Mohamed" />

                        </ListItem>
                        <ListItem
                            button

                        >
                            <ListItemAvatar>
                                <Avatar variant='rounded' src={`../assets/images/users/4.jpg`} className={classes.rad} />

                            </ListItemAvatar>
                            <ListItemText primary="Bouzid Mohamed" />

                        </ListItem>
                        <ListItem
                            button

                        >
                            <ListItemAvatar>
                                <Avatar variant='rounded' src={`../assets/images/users/4.jpg`} className={classes.rad} />

                            </ListItemAvatar>
                            <ListItemText primary="Bayrem Zghuimi" />

                        </ListItem>



                    </List>

                </div>
            </Paper>



        </>

    );

}
