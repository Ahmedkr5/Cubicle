import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function InvitationsList() {
    const classes = useStyles();

    return (
      <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem button>
              <ListItemText inset primary="Naksha.tn" />
              <Button variant="contained" color="primary" size='small'style={{borderRadius:'12px'}}>
                  Accept
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Decline
              </Button>
          </ListItem>
          <ListItem button>
              <ListItemText inset primary="Donation.tn" />
              <Button variant="contained" color="primary" size='small'style={{borderRadius:'12px'}}>
                  Accept
              </Button>
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Decline
              </Button>
          </ListItem>
      </List>
    );
}