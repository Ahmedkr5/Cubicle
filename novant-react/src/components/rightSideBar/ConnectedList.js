import React, { useState,useEffect } from 'react';
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
import FriendChat from './FriendChat';
import ReactDOM from 'react-dom';
import ChatBox from './ChatBox';

const useStyles = makeStyles((theme) => ({
    root: {


        backgroundColor: theme.palette.background.paper,

        overflow: 'auto',
        marginTop: '15px',
        height: '100%',
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



export default function ConnectedList({friends}) {


    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = React.useState(1);
    const [searchActive, setSearchActive] = React.useState('none');
   




    const SearchAction = () => {
        setSearchActive('');
    }
   



    return (
        <>




            <Contacts />
            <Paper elevation={0} className={classes.root} style={{maxHeight: '100%'}} >
                <div className={classes.root} onScroll={SearchAction}  >




                    <List component="nav" aria-label="main mailbox folders" >
                        <ListSubheader style={{ zIndex: '10', backgroundColor: 'white' }}>   <TextField id="primary" placeholder="Search" color="primary" style={{ display: searchActive }} /></ListSubheader>

                   
                   
                 
                     {friends.map(m=>(<FriendChat img={m.profileimage} firstname={m.firstname} lastname={m.lastname}></FriendChat>))}
                    
               



                    </List>

                </div>
            </Paper>



        </>

    );

}
