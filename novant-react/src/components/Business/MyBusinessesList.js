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

export default function MyBusinessesList() {
    const classes = useStyles();

    return (
      <List component="nav" className={classes.root} aria-label="contacts">
          <ListItem button>
              <ListItemText inset primary="x2keys.tn" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Leave
              </Button>
          </ListItem>
          <ListItem button>
              <ListItemText inset primary="naksha.tn" />
              <Button variant="outlined"  size='small' className={classes.margin} style={{marginLeft:'32px',borderRadius:'12px'}}>
                  Leave
              </Button>
          </ListItem>
      </List>
    );
}