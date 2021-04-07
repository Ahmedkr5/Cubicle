import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function BusinessList() {
  const classes = useStyles();

  return (
    <List component="nav" className={classes.root} aria-label="contacts">
      <ListItem button>
        <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText primary="x2keys.tn" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="Naksha.tn" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="Webmusters.tn" />
      </ListItem>
      <ListItem button>
        <ListItemText inset primary="Donation.tn" />
      </ListItem>
    </List>
  );
}